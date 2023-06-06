import React from "react";
import "./LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-animation">
        <img src="loading.gif" alt="Loading" />
      </div>
      <h2 className="loading-message">Loading Skill Awakes</h2>
      <small>
        Loading gif powered by <strong>https://loading.io/</strong>
      </small>
    </div>
  );
};

export default LoadingScreen;
