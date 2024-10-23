import { SignIn } from "@clerk/nextjs";
import React from "react";

function SignInPage() {
  return (
    <div>
      <h1>This is the Sign In Page</h1>
      <div className="flex justify-center h-screen items-center">
        <SignIn />
      </div>
    </div>
  );
}

export default SignInPage;
