import { auth } from "@/auth";
import Link from "next/link";

const Buttons = async () => {
  const session = await auth();
  return (
    <>
      <div className="flex gap-3 my-2">
        <Link href="/courses">
          <button className=" btn  transition-all duration-300 px-5 py-1">
            Courses
          </button>
        </Link>
        {session ? (
          <></>
        ) : (
          <Link href="/login">
            <button className="btn transition-all duration-300 px-5 py-1">
              Log In
            </button>
          </Link>
        )}
      </div>
    </>
  );
};
export default Buttons;
