import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router";
import "./NotFound";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/notFound");
  }, [navigate]);

  return (
    <div className="notFoundContainer">
      <h2>Page not found!</h2>
      <p>Redirecting to the not-found page...</p>
      <NavLink to="/">
        <button>go home</button>
      </NavLink>
    </div>
  );
}

export default NotFound;
