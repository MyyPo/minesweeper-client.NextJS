import Head from "next/head";
import Image from "next/image";
import { useState, useEffect, useMemo } from "react";
import anime from "animejs";
import styles from "../styles/Home.module.css";

import Game from "../components/Game/index";
import Hero from "../components/Hero/index";

export default function Home() {
  const [game, setGame] = useState(false);

  let field;
  field = [...Array(256).keys()];

  useEffect(() => {
    const cellsNumber = Math.sqrt(field.length);

    document.documentElement.style.setProperty("--cells", `${cellsNumber}`);
  }, [field]);

  const handleClick = () => {
    setField(!game);
  };

  return (
    // <div className={styles.body}>
    // <>{game ? <Game field={field} /> : <Hero />}</>
    <Hero />
  );
}
