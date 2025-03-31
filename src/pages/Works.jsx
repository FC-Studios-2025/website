import React from "react";
import NavBar from "../components/NavBar";
import ReelVideoCarousel from "../components/ReelVideoCarousel";
import SqVideoCarousel from "../components/SqVideoCarousel copy";
import Footer from "../components/Footer";
import BlurredCircle from "../components/BlurredCircle";

const Works = () => {
  return (
    <div>
      <BlurredCircle
        color="bg-blue-400"
        positionClass="-top-[12%] left-[20%] md:-top-[40%] md:left-[15%] lg:left-[22%] lg:-top-[20%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="-top-[12%] right-[20%] md:-top-[40%] md:right-[15%] lg:right-[22%] lg:-top-[20%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[60%] right-[0%] md:top-[80%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[100%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[160%] lg: lg:top-[160%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:hidden"
      />
      {/* <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:hidden"
      /> */}
      {/*  */}
      {/* <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[320%] right-[0%] md:hidden"
      /> */}
      <div>
        <NavBar />
      </div>
      <div className="pt-16">
        <div>
          <ReelVideoCarousel />
        </div>
        <div>
          <SqVideoCarousel />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Works;
