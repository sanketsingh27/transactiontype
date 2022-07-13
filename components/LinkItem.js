import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

export default function LinkItem({ linkDetails }) {
  const { displayValue, route } = linkDetails;
  const router = useRouter();

  return (
    <>
      <div className="">
        <Link href={route} passHref>
          <a
            className={` block my-2 mr-3 rounded-lg px-5 py-2 ${
              router.pathname === route ? " bg-primary text-white " : "bg-blue-100 text-black"
            }  hover:bg-primary hover:text-white text-lg font-medium`}
          >
            {displayValue}
          </a>
        </Link>
      </div>
    </>
  );
}
