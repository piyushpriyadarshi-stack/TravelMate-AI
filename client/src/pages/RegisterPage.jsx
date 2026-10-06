// ==================================================
// TravelMate AI - User Registration Page (Clerk Integration)
// Connects registration directly with Clerk.
// ==================================================

import React from "react";
import { SignUp } from "@clerk/react";

export function RegisterPage() {
  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 py-12 bg-slate-50">
      <div className="w-full max-w-md flex flex-col items-center">
        <SignUp
          routing="path"
          path="/register"
          signInUrl="/login"
          fallbackRedirectUrl="/profile"
        />
      </div>
    </div>
  );
}
