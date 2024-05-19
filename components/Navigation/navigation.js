import React from "react";
import Link from "next/link";
import { NAVIGATION_LINKS } from "../../constants/constants";

const Navigation = () => {
  return (

      <ul className="navigation-container">
        {NAVIGATION_LINKS.map((data, index) => (
          <>
            <li className="">
              <Link key={index + data?.link} href={data?.link}>
                {data?.name}
              </Link>
            </li>
          </>
        ))}
      </ul>
   
  );
};

export default Navigation;
