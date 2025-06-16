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
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <React.StrictMode>
      <div className="bg-black">
        {isLoading && <LoadingScreen />}
        
        {/* Always mount the router, but hide it during loading */}
        <div style={{ display: isLoading ? "none" : "block" }}>
          <RouterProvider router={router} />
        </div>
      </div>
    </React.StrictMode>
  );
};


ReactDOM.createRoot(document.getElementById("root")).render(<App />);
