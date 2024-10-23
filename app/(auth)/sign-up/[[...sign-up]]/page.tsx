import { SignUp } from "@clerk/nextjs";
import React from "react";

function SignUpPage() {
  return (
    <div>
      <h1>This is the Sign Up page</h1>
      <div className="bg-yellow-200 flex justify-center h-screen items-center">
        <SignUp />
      </div>
    </div>
  );
}

export default SignUpPage;
