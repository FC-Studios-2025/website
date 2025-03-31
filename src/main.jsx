import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import "./index.css";
import BlurredCircle from "./components/BlurredCircle.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-black">
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
        positionClass="top-[60%] right-[0%] md:top-[90%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[130%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[110%] left-0 -translate-x-[50%] md:top-[180%] lg: lg:top-[180%] lg:-translate-x-[50%]"
      />
      {/*  */}
      <BlurredCircle
        color="bg-blue-400"
        positionClass="top-[180%] right-[0%] md:top-[260%] md:translate-x-[70%] lg:translate-x-[60%] lg:top-[330%]"
      />
      <BlurredCircle
        color="bg-green-400"
        positionClass="top-[260%] left-0 -translate-x-[50%] md:top-[380%] lg: lg:top-[400%] lg:-translate-x-[50%]"
      />
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);
