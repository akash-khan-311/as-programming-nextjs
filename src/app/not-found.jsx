import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-10 text-white">
        Not Found
      </h2>
      <p className="text-white">Could not find requested resource</p>
      <Link href="/" className="btn mt-10">
        Return Home
      </Link>
    </div>
  );
}
