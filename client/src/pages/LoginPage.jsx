// ==================================================
// TravelMate AI - User Login Page (Clerk Integration)
// Connects authentication directly with Clerk.
// ==================================================

import React from "react";
import { SignIn } from "@clerk/react";

export function LoginPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-md flex flex-col items-center">
        <SignIn
          routing="path"
          path="/login"
          signUpUrl="/register"
          fallbackRedirectUrl="/profile"
        />
      </div>
    </div>
  );
}
