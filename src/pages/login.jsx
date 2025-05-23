import { useState } from "react";
import Cover from "@/components/templates/Register-LoginCover";
import PasswordInput from "@/components/PasswordInput";
import Header from "@/components/templates/Register-LoginHeader";
import BaseInput from "@/components/BaseInput";
import Button from "@/components/Button";
import Link from "next/link";
import { continueWithGoogle } from "@/firebase/firebaseClient";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(!loading);
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    continueWithGoogle();
  };
  return (
    <div className="flex min-h-screen h-fit relative justify-center lg:justify-end">
      <Cover />

      <form className="flex flex-col p-8 max-w-[550px] lg:max-w-[40%] lg:w-[40%] items-center justify-center">
        <Header title="Welcome Back" subTitle={"Glad to see you again \nLogin to your account below"} />

        <div className="flex flex-col gap-5 mt-7 mb-10 w-full">
          <BaseInput type="email" title="Email" id="email" placeholder="Please enter your email" />
          <PasswordInput id="password" title="Password" placeholder="Please enter your password" showStrength={false} />
        </div>

        <div className="flex flex-col w-full ">
          <div className="flex flex-col gap-4">
            <Button
              onClick={handleLogin}
              disabled={loading}
              variant="primary_lg"
              id="sign-up"
              type="submit"
              className="flex justify-center disabled:cursor-not-allowed"
            >
              {loading ? (
                <svg
                  className=" size-8 animate-spin text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                  <path
                    class="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
              ) : (
                "Login"
              )}
            </Button>
            <span className="body-7 text-center text-gray-900">
              Don't have an account?{" "}
              <Link href="/register" className="text-blue-600">
                Sign up for free
              </Link>
            </span>
          </div>
          <div className="flex items-center my-4 body-8">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4  text-gray-500  whitespace-nowrap">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="google" onClick={handleGoogleLogin}>
            <p className="text-base">Continue with google</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
