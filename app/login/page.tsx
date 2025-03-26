import Loginform from "@/components/forms/Loginform";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center">
      <div className="flex flex-col gap-6 w-full max-w-sm">
        <Link href="/" className="flex items-center self-center">
          <h1 className="font-bold text-2xl">
            Job<span className="text-primary">Board</span>
          </h1>
        </Link>
        <Loginform />
      </div>
    </div>
  );
};

export default LoginPage;
