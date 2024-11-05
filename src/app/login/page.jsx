import LoginForm from "@/components/Form/LoginForm";
import Link from "next/link";

const LoginPage = () => {
  return (
    <>
      <section className=" ">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="/"
            className="flex items-center mb-6 text-2xl font-semibold  text-white"
          >
            AS Dev
          </Link>
          <div className="w-full backdrop-blur-md bg-white/20 rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0 border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-white md:text-2xl ">
                Sign in to your account
              </h1>
              <LoginForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default LoginPage;
