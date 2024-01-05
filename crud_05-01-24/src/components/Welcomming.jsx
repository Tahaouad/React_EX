import React from "react";

const Welcome = () => {
  return (
    <div className="welcome-container text-center d-flex align-items-center justify-content-center vh-100">
      <div>
        <h1 className="display-4 text-success">Hello User</h1>
        <p className="lead">Welcome to our website!</p>
      </div>
    </div>
  );
};

export default Welcome;
