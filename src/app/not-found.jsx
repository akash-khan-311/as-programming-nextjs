import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center h-screen backdrop-blur-md bg-white/10 p-8">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center  text-white">
        Not Found
      </h2>
      <p className="text-white text-lg md:text-xl lg:text-2xl">
        Could not find requested resource
      </p>
      <Link className="btn py-1 px-4 text-white mt-10" href="/">
        Return Home
      </Link>
    </div>
  );
}
