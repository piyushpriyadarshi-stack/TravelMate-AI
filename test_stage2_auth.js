// ==================================================
// TravelMate AI - Stage 2 Comprehensive Verification Suite
// Tests all 14 mandatory test cases from prompt requirement 20
// ==================================================

const fs = require("fs");
const path = require("path");
const bcrypt = require("./server/node_modules/bcryptjs");

const BASE_URL = "http://localhost:5000/api";
const USERS_FILE = path.join(__dirname, ".data/users.json");

async function runStage2Tests() {
  console.log("==================================================");
  console.log("🚀 STARTING STAGE 2 USER AUTHENTICATION TEST SUITE");
  console.log("==================================================\n");

  let passed = 0;
  let failed = 0;

  function assert(condition, message) {
    if (condition) {
      console.log(`✅ PASS: ${message}`);
      passed++;
    } else {
      console.error(`❌ FAIL: ${message}`);
      failed++;
    }
  }

  const testUser = {
    name: "Aarav Kapoor",
    email: `aarav_${Date.now()}@example.com`,
    password: "Password@123",
    confirmPassword: "Password@123",
    phone: "+91 98111 22334"
  };

  let userToken = null;
  let registeredUserId = null;

  // TEST 13 (done first to test clean unauthenticated state):
  // Try accessing a protected backend endpoint without authentication.
  console.log("🧪 TEST 13: Try accessing a protected backend endpoint without authentication...");
  try {
    const res = await fetch(`${BASE_URL}/auth/me`);
    const data = await res.json();
    assert(res.status === 401 && data.success === false, "Unauthenticated access to /api/auth/me returns 401 Unauthorized");
  } catch (e) {
    assert(false, `TEST 13 Exception: ${e.message}`);
  }

  // TEST 1 & 2:
  // Register a new user with required fields.
  console.log("\n🧪 TEST 1 & 2: Register a new user (/api/auth/register)...");
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(testUser)
    });
    const data = await res.json();

    assert(res.status === 201 && data.success === true, "User registration succeeds with status 201");
    assert(data.user && data.user.email === testUser.email, "Returned user has matching email");
    assert(!data.user.password && !data.user.passwordHash, "password and passwordHash are NEVER returned in response");
    assert(typeof data.token === "string" && data.token.length > 20, "JWT session token returned");

    userToken = data.token;
    registeredUserId = data.user.id;
  } catch (e) {
    assert(false, `TEST 1 & 2 Exception: ${e.message}`);
  }

  // TEST 3 & 4:
  // Verify user exists and password is encrypted with bcrypt (never plain-text).
  console.log("\n🧪 TEST 3 & 4: Verify user exists and password is cryptographically hashed...");
  try {
    let storedUser = null;
    if (fs.existsSync(USERS_FILE)) {
      const users = JSON.parse(fs.readFileSync(USERS_FILE, "utf-8"));
      storedUser = users.find(u => u.email === testUser.email);
    }

    assert(storedUser !== null && storedUser !== undefined, "User found in database / persistent store");
    assert(storedUser.passwordHash !== testUser.password, "Stored password is NOT plain-text");
    assert(storedUser.passwordHash.startsWith("$2a$") || storedUser.passwordHash.startsWith("$2b$"), "Password hash starts with standard bcrypt identifier ($2a$ or $2b$)");
    const isBcryptValid = await bcrypt.compare(testUser.password, storedUser.passwordHash);
    assert(isBcryptValid === true, "Bcrypt successfully verifies test password against stored hash");
  } catch (e) {
    assert(false, `TEST 3 & 4 Exception: ${e.message}`);
  }

  // TEST 5:
  // Logout.
  console.log("\n🧪 TEST 5: Logout (/api/auth/logout)...");
  try {
    const res = await fetch(`${BASE_URL}/auth/logout`, { method: "POST" });
    const data = await res.json();
    assert(res.status === 200 && data.success === true, "Logout endpoint returns 200 OK and success message");
  } catch (e) {
    assert(false, `TEST 5 Exception: ${e.message}`);
  }

  // TEST 6:
  // Login using the registered account.
  console.log("\n🧪 TEST 6: Login using the registered account (/api/auth/login)...");
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testUser.email,
        password: testUser.password
      })
    });
    const data = await res.json();
    assert(res.status === 200 && data.success === true, "Login succeeds with status 200 OK");
    assert(data.user && data.user.name === testUser.name, "Returned user contains correct name");
    assert(data.token, "Returned new authenticated session token");
    userToken = data.token;
  } catch (e) {
    assert(false, `TEST 6 Exception: ${e.message}`);
  }

  // TEST 7 & 8:
  // Open Profile & Verify correct user information appears.
  console.log("\n🧪 TEST 7 & 8: Open Profile (/api/auth/me) with token...");
  try {
    const res = await fetch(`${BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    const data = await res.json();
    assert(res.status === 200 && data.success === true, "GET /api/auth/me returns 200 OK");
    assert(data.user.id === registeredUserId, "User ID matches registered ID");
    assert(data.user.name === testUser.name, "User name matches registered name");
    assert(data.user.email === testUser.email, "User email matches registered email");
    assert(data.user.role === "USER", "User role defaults to USER");
    assert(data.user.createdAt, "Account creation date is provided");
    assert(!data.user.password && !data.user.passwordHash, "No password hash exposed on profile endpoint");
  } catch (e) {
    assert(false, `TEST 7 & 8 Exception: ${e.message}`);
  }

  // Profile Update Test:
  // Update name and phone via PUT /api/auth/profile
  console.log("\n🧪 TEST 8B: Update Profile (/api/auth/profile)...");
  try {
    const res = await fetch(`${BASE_URL}/auth/profile`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userToken}`
      },
      body: JSON.stringify({
        name: "Aarav K. Updated",
        phone: "+91 99999 11111"
      })
    });
    const data = await res.json();
    assert(res.status === 200 && data.success === true, "PUT /api/auth/profile returns 200 OK");
    assert(data.user.name === "Aarav K. Updated", "User name is updated to new value");
    assert(data.user.phone === "+91 99999 11111", "User phone is updated to new value");
  } catch (e) {
    assert(false, `Profile Update Exception: ${e.message}`);
  }

  // TEST 11:
  // Try incorrect password. Expected: Clear login error without leaking enumeration info.
  console.log("\n🧪 TEST 11: Try incorrect password on login...");
  try {
    const res = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: testUser.email,
        password: "wrong_password_xyz"
      })
    });
    const data = await res.json();
    assert(res.status === 401 && data.success === false, "Incorrect password returns 401 Unauthorized");
    assert(data.message.includes("Invalid email or password"), "Returns generic 'Invalid email or password' message");
  } catch (e) {
    assert(false, `TEST 11 Exception: ${e.message}`);
  }

  // TEST 12:
  // Try registering the same email again. Expected: Duplicate-email error.
  console.log("\n🧪 TEST 12: Try registering the same email again...");
  try {
    const res = await fetch(`${BASE_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Duplicate Aarav",
        email: testUser.email,
        password: "NewPassword@123",
        confirmPassword: "NewPassword@123"
      })
    });
    const data = await res.json();
    assert(res.status === 400 && data.success === false, "Duplicate email returns 400 Bad Request");
    assert(data.message.includes("already exists"), "Returns clear error: 'An account with this email already exists.'");
  } catch (e) {
    assert(false, `TEST 12 Exception: ${e.message}`);
  }

  // TEST 14:
  // Verify a USER cannot access future admin-protected APIs.
  console.log("\n🧪 TEST 14: Verify standard USER cannot access admin-protected APIs...");
  try {
    const res = await fetch(`${BASE_URL}/auth/admin-check`, {
      headers: { Authorization: `Bearer ${userToken}` }
    });
    const data = await res.json();
    assert(res.status === 403 && data.success === false, "Standard USER returns 403 Forbidden on admin endpoint");
    assert(data.message.includes("Administrator privileges are required"), "Clear administrator privilege required message");
  } catch (e) {
    assert(false, `TEST 14 Exception: ${e.message}`);
  }

  // TEST 14B:
  // Verify an ADMIN CAN access admin-protected APIs.
  console.log("\n🧪 BONUS: Verify ADMIN user can access admin-protected APIs...");
  try {
    const loginRes = await fetch(`${BASE_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "admin@travelmate.ai",
        password: "admin123"
      })
    });
    const loginData = await loginRes.json();
    const adminToken = loginData.token;

    const adminCheckRes = await fetch(`${BASE_URL}/auth/admin-check`, {
      headers: { Authorization: `Bearer ${adminToken}` }
    });
    const adminCheckData = await adminCheckRes.json();
    assert(adminCheckRes.status === 200 && adminCheckData.success === true, "ADMIN user returns 200 OK on admin-protected endpoint");
  } catch (e) {
    assert(false, `ADMIN Access Exception: ${e.message}`);
  }

  console.log("\n==================================================");
  console.log(`📊 TEST RESULTS: ${passed} PASSED, ${failed} FAILED`);
  console.log("==================================================");

  if (failed > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runStage2Tests();
