import { Button } from "@/src/components/ui/button";
import TitleSection from "@/src/components/landing-page/title-section";
import Banner from "../../../public/appBanner.png";

import React from "react";
import Image from "next/image";
const HomePage = () => {
  return (
    <>
      <section
        className="
      mt-10 
      gap-4 
      px-4 
      sm:flex 
      sm:flex-col 
      sm:px-6 
      md:items-center 
      md:justify-center"
      >
        <TitleSection
          pill="✨ Your workspace, Perfected"
          title="All-In-One Collaboration and Productivity Platform"
        />
        <div
          className="mt-6
          rounded-xl
          bg-white
          bg-gradient-to-r
          from-primary
          to-brand-primaryBlue
          p-[2px]
          sm:w-[300px]
        "
        >
          <Button
            variant="secondary"
            className=" w-full
            rounded-[10px]
            bg-background
            p-6
            text-2xl
          "
          >
            Get Cypress Free
          </Button>
        </div>
        <div className="ml-[-50px] flex w-[750px] items-center justify-center sm:ml-0 sm:w-full">
          <Image src={Banner} alt="App Banner" />
        </div>
        <div
          className="absolute
        bottom-0
        left-0
        right-0
        top-[50%]
        z-10
        bg-gradient-to-t
        dark:from-background"
        ></div>
      </section>
      <section>
        <div>
          
        </div>
      </section>
    </>
  );
};

export default HomePage;
