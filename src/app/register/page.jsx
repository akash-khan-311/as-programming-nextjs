import SignUpForm from "@/components/Form/SignUpForm";
import SocialLogin from "@/components/SocialLogin/SocialLogin";
import Link from "next/link";

const SignUpPage = () => {
  return (
    <>
      <section className="lg:py-28 md:py-20 py-16">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full backdrop-blur-md bg-white/20 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight  md:text-2xl text-white">
                Sign Up
              </h1>
              <SignUpForm />
              <div>
                <SocialLogin />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default SignUpPage;
