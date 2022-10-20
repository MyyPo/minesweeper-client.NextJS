import styles from "./Hero.module.css";
import { useState, useEffect, useReducer } from "react";

import Game from "../Game";
import Auth from "../Auth";
import useAuthContext from "../../hooks/useAuthContext";

function Hero() {
  // comment in the hook
  const { status } = useAuthContext();

  return (
    <>
      {/* Handles authentication login/registration */}
      {status === "unauthenticated" && <Auth />}
      {status === "authenticated" && <Game />}
    </>
  );
}

export default Hero;
