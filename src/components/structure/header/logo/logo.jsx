import React from "react";
import { Link } from "react-router-dom";
import s from "./s.module.css";

export function Logo({ className }) {
  return (
    <div className={`${s.logoWrapper} ${className || ""}`}>
      <Link
        to="/"
        style={{
          textDecoration: "none",
          color: "inherit",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h5 className={s.logoTitle}>
          Logo<span>TYPE</span>
        </h5>
      </Link>
    </div>
  );
}
