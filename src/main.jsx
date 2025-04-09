import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router.jsx";
import ScrollBird from "./components/ScrollBird.jsx";
import "./index.css";
import LoadingScreen from "./components/LoadingScreen.jsx";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time or actual resource loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      {/* <div>
        <ScrollBird />
      </div> */}
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="bg-black">
          <RouterProvider router={router} />
        </div>
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
