import Link from "next/link";
import React from "react";

const Services = () => {
  return (
    <div className="w-full h-[80vh] flex flex-col justify-center items-center ">
      <h1 className="text-5xl font-semibold"> Services</h1>
      <Link href={"/"} className="mt-5 underline">
        Go to Home
      </Link>
    </div>
  );
};

export default Services;
