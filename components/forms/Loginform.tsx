import {
  CardHeader,
  Card,
  CardTitle,
  CardDescription,
  CardContent,
} from "../ui/card";
import { Button } from "../ui/button";
import { FaGoogle } from "react-icons/fa";
// import { IoMdMail } from "react-icons/io";
import {} from "react-icons/fa";
// import { signIn } from "@/auth";
import { SignUpForm } from "./EmailForm";
import { Separator } from "../ui/separator";

const Loginform = () => {
  return (
    <div className="flex flex-col gap-6">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-xl ">Welcome Back</CardTitle>

          <CardDescription>Login with Google or Email</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-4 mb-7">
            <form
            //   action={async () => {
            //   "use server";
            //   await signIn("google");
            //   }}
            >
              <Button
                type="submit"
                className="w-full cursor-pointer"
                variant="outline"
              >
                <FaGoogle className="size-4" />
                Login with Google
              </Button>

              <div className="mt-8 gap-4 text-center w-full flex items-center justify-center">
                <Separator/>
              </div>
            </form>
            {/* 
              <Button
                onClick={handleSignUp}
                className="w-full cursor-pointer"
                variant="outline"
              >
                <IoMdMail className="size-4" />
                Login with Email
              </Button> */}
          </div>

          <SignUpForm />
        </CardContent>
      </Card>
      <div className="text-center text-xs text-muted-foreground text-balance">
        By clicking continue, you agree to our terms and service and privacy
        policy.
      </div>
    </div>
  );
};

export default Loginform;
