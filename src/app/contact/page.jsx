import { auth } from "@/auth";
import Image from "next/image";

const ContactPage = async () => {
  const session = await auth();

  // if (!session) redirect("/signup");
  console.log(session);

  return (
    <>
      <div className="flex justify-center items-center h-screen text-7xl">
        Welcome to ContactPage
        {/* <div className="flex flex-col-reverse justify-center items-center mx-auto w-full">
          <h1 className="text-6xl text-white">{session.user.name}</h1>
          <Image
            className="rounded-full"
            src={session.user.image}
            alt={session.user.name}
            width={200}
            height={200}
          />
        </div> */}
      </div>
    </>
  );
};
export default ContactPage;
