import styles from "./Hero.module.css";
import { useState, useEffect, useReducer } from "react";
import { useSession } from "next-auth/react";

import Game from "../Game";
import Tile from "./tile";
import Auth from "../Auth";
import useWindowSize from "../../hooks/useWindowSize";
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
