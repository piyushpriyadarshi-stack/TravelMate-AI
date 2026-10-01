// ==================================================
// TravelMate AI - Amazon Cognito Setup & Provisioning Utility
// Automates creation and configuration of:
// 1. Cognito User Pool (Email sign-in, verification, SRP auth)
// 2. Public Web App Client (Authorization Code flow with PKCE, NO client secret)
// 3. Callback URLs (http://localhost:5173/auth/callback) & Logout URLs
// 4. OAuth scopes (openid, email, profile) & Google IdP federation
// ==================================================

require("../server/node_modules/dotenv").config({ path: require("path").resolve(__dirname, "../server/.env") });
const {
  CognitoIdentityProviderClient,
  CreateUserPoolCommand,
  CreateUserPoolClientCommand,
  CreateUserPoolDomainCommand,
  CreateIdentityProviderCommand,
  DescribeUserPoolCommand
} = require("../server/node_modules/@aws-sdk/client-cognito-identity-provider");

const REGION = process.env.COGNITO_REGION || process.env.AWS_REGION || "us-east-1";
const CALLBACK_URL = `${process.env.CLIENT_URL || "http://localhost:5173"}/auth/callback`;
const LOGOUT_URL = `${process.env.CLIENT_URL || "http://localhost:5173"}/login`;

async function setupCognito() {
  console.log("==================================================");
  console.log("🚀 TravelMate AI - Amazon Cognito User Pool Setup");
  console.log("==================================================");
  console.log(`📍 Target AWS Region: ${REGION}`);
  console.log(`🌐 Frontend Callback URL: ${CALLBACK_URL}`);
  console.log(`🚪 Frontend Logout URL:   ${LOGOUT_URL}`);

  if (!process.env.AWS_ACCESS_KEY_ID || !process.env.AWS_SECRET_ACCESS_KEY) {
    console.log("\nℹ️  AWS Access Credentials not detected in environment variables.");
    console.log("   Printing manual AWS CLI commands & CloudFormation configuration:\n");

    printAwsCliCommands();
    return;
  }

  const client = new CognitoIdentityProviderClient({ region: REGION });

  try {
    // 1. Create Cognito User Pool
    console.log("\n📦 Step 1: Creating Cognito User Pool...");
    const createPoolCmd = new CreateUserPoolCommand({
      PoolName: "TravelMate-UserPool",
      UsernameAttributes: ["email"],
      AutoVerifiedAttributes: ["email"],
      VerificationMessageTemplate: {
        DefaultEmailOption: "CONFIRM_WITH_CODE",
        EmailSubject: "TravelMate AI - Your Verification Code",
        EmailMessage: "Welcome to TravelMate AI! Your verification code is {####}."
      },
      Policies: {
        PasswordPolicy: {
          MinimumLength: 8,
          RequireUppercase: true,
          RequireLowercase: true,
          RequireNumbers: true,
          RequireSymbols: false
        }
      },
      Schema: [
        {
          Name: "email",
          AttributeDataType: "String",
          Required: true,
          Mutable: true
        },
        {
          Name: "name",
          AttributeDataType: "String",
          Required: false,
          Mutable: true
        },
        {
          Name: "phone_number",
          AttributeDataType: "String",
          Required: false,
          Mutable: true
        }
      ]
    });

    const poolRes = await client.send(createPoolCmd);
    const userPoolId = poolRes.UserPool.Id;
    console.log(`✅ Cognito User Pool created! ID: ${userPoolId}`);

    // 2. Create Public Web App Client (NO client secret, PKCE code flow)
    console.log("\n📱 Step 2: Creating Public Web App Client (SPA)...");
    const createClientCmd = new CreateUserPoolClientCommand({
      UserPoolId: userPoolId,
      ClientName: "TravelMate-WebApp-Client",
      GenerateSecret: false, // Critical: Public SPA web client must NOT have a secret
      ExplicitAuthFlows: [
        "ALLOW_USER_SRP_AUTH",
        "ALLOW_REFRESH_TOKEN_AUTH"
      ],
      SupportedIdentityProviders: ["COGNITO"],
      AllowedOAuthFlows: ["code"], // Authorization Code flow with PKCE
      AllowedOAuthScopes: ["openid", "email", "profile"],
      AllowedOAuthFlowsUserPoolClient: true,
      CallbackURLs: [CALLBACK_URL],
      LogoutURLs: [LOGOUT_URL],
      PreventUserExistenceErrors: "ENABLED"
    });

    const clientRes = await client.send(createClientCmd);
    const clientId = clientRes.UserPoolClient.ClientId;
    console.log(`✅ Cognito App Client created! Client ID: ${clientId}`);

    // 3. Create Domain Prefix for Cognito Hosted OAuth / Federation
    const domainPrefix = `travelmate-auth-${Math.floor(1000 + Math.random() * 9000)}`;
    console.log(`\n🌐 Step 3: Setting Cognito Domain Prefix (${domainPrefix})...`);
    try {
      await client.send(new CreateUserPoolDomainCommand({
        Domain: domainPrefix,
        UserPoolId: userPoolId
      }));
      console.log(`✅ Cognito Domain configured: https://${domainPrefix}.auth.${REGION}.amazoncognito.com`);
    } catch (dErr) {
      console.warn(`⚠️ Could not automatically create domain prefix: ${dErr.message}`);
    }

    console.log("\n🎉 Cognito Setup Completed Successfully!");
    console.log("--------------------------------------------------");
    console.log(`COGNITO_USER_POOL_ID=${userPoolId}`);
    console.log(`COGNITO_CLIENT_ID=${clientId}`);
    console.log(`COGNITO_REGION=${REGION}`);
    console.log(`COGNITO_DOMAIN=${domainPrefix}.auth.${REGION}.amazoncognito.com`);
    console.log("--------------------------------------------------");

  } catch (err) {
    console.error("❌ Cognito Setup Error:", err.message);
  }
}

function printAwsCliCommands() {
  console.log(`
# 1. Create Cognito User Pool with email sign-in:
aws cognito-idp create-user-pool \\
  --pool-name "TravelMate-UserPool" \\
  --username-attributes "email" \\
  --auto-verified-attributes "email" \\
  --verification-message-template "DefaultEmailOption=CONFIRM_WITH_CODE,EmailSubject='TravelMate AI - Your Verification Code',EmailMessage='Welcome to TravelMate AI! Your verification code is {####}.'" \\
  --policies '{"PasswordPolicy":{"MinimumLength":8,"RequireUppercase":true,"RequireLowercase":true,"RequireNumbers":true,"RequireSymbols":false}}' \\
  --region "${REGION}"

# 2. Create Public Web App Client (NO client secret, Authorization Code Flow with PKCE):
aws cognito-idp create-user-pool-client \\
  --user-pool-id "<YOUR_USER_POOL_ID>" \\
  --client-name "TravelMate-WebApp-Client" \\
  --no-generate-secret \\
  --explicit-auth-flows "ALLOW_USER_SRP_AUTH" "ALLOW_REFRESH_TOKEN_AUTH" \\
  --supported-identity-providers "COGNITO" "Google" \\
  --allowed-o-auth-flows "code" \\
  --allowed-o-auth-scopes "openid" "email" "profile" \\
  --allowed-o-auth-flows-user-pool-client \\
  --callback-urls "${CALLBACK_URL}" \\
  --logout-urls "${LOGOUT_URL}" \\
  --region "${REGION}"

# 3. Create Cognito Domain for OAuth / Google Federation:
aws cognito-idp create-user-pool-domain \\
  --domain "travelmate-auth" \\
  --user-pool-id "<YOUR_USER_POOL_ID>" \\
  --region "${REGION}"

# 4. Link Google as External Identity Provider (Federation):
aws cognito-idp create-identity-provider \\
  --user-pool-id "<YOUR_USER_POOL_ID>" \\
  --provider-name "Google" \\
  --provider-type "Google" \\
  --provider-details '{"client_id":"<GOOGLE_CLIENT_ID>","client_secret":"<GOOGLE_CLIENT_SECRET>","authorize_scopes":"email profile openid"}' \\
  --attribute-mapping '{"email":"email","name":"name","username":"sub"}' \\
  --region "${REGION}"
  `);
}

if (require.main === module) {
  setupCognito();
}

module.exports = { setupCognito };
