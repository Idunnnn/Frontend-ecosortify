import { useEffect, useState } from "react";
import Cover from "@/components/templates/Register-LoginCover";
import PasswordInput from "@/components/PasswordInput";
import Header from "@/components/templates/Register-LoginHeader";
import BaseInput from "@/components/BaseInput";
import Button from "@/components/Button";
import Link from "next/link";
import { isUserLogIn, continueWithGoogle } from "@/firebase/firebaseClient";

export default function register() {
  const [loading, setLoading] = useState(false);
  const handleRegister = (e) => {
    e.preventDefault();
    setLoading(true);
  };

  const handleGoogleRegister = (e) => {
    e.preventDefault();
    continueWithGoogle();
  };

  return (
    <div className="flex min-h-screen h-fit relative justify-center lg:justify-end">
      <Cover />

      <form className="flex flex-col p-8 max-w-[550px] lg:max-w-[40%] lg:w-[40%] items-center justify-center">
        <Header title="Sign Up" subTitle={"Enter your detail below to create your account and get started"} />

        <div className="flex flex-col gap-5 mt-7 mb-10 w-full">
          <BaseInput type="text" title="Full Name" id="full-name" placeholder="Please enter your full name" />
          <BaseInput type="email" title="Email" id="email" placeholder="Please enter your email" />
          <PasswordInput
            id="password"
            title="Password"
            placeholder="Please enter your password"
            form_text="Use at least 8 characters with a combination of letters and numbers."
          />
        </div>

        <div className="flex flex-col w-full ">
          <div className="flex flex-col gap-4">
            <Button
              onClick={handleRegister}
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
                "Sign Up"
              )}
            </Button>
            <span className="body-7 text-center text-gray-900">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600">
                Sign in
              </Link>
            </span>
          </div>
          <div className="flex items-center my-4 body-8">
            <hr className="flex-grow border-t border-gray-300" />
            <span className="mx-4  text-gray-500  whitespace-nowrap">OR</span>
            <hr className="flex-grow border-t border-gray-300" />
          </div>

          <Button variant="google" onClick={handleGoogleRegister}>
            <p className="text-base">Continue with google</p>
          </Button>
        </div>
      </form>
    </div>
  );
}
