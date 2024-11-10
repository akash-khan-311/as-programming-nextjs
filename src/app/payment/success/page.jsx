import Link from "next/link";

const SuccessPage = () => {
  return (
    <main className="">
      <div className="h-[calc(100vh-268px)] backdrop-blur-md  flex flex-col justify-center items-center ">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
          <path
            fill="currentColor"
            d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"
          ></path>
        </svg>
        <h1 className="text-white text-4xl md:text-5xl lg:text-6xl">
          Payment Successful
        </h1>
        <Link href="/dashboard/courses" className="mt-10">
          <button className="btn text-white py-1 px-8">Start Learning</button>
        </Link>
      </div>
    </main>
  );
};
export default SuccessPage;
