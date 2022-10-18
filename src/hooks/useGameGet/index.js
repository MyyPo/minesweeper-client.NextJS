import { useQuery } from "@tanstack/react-query";
import Router from "next/router";

const fetchGame = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_GAME_PLAY, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.status === 404) {
    return "nogame";
  }
  // in case of some terrible unhandled error try to log out the user
  if (!response.ok) {
    document.cookie = "expires= ; expires = Thu, 01 Jan 1970 00:00:00 GMT";
    Router.reload();
  }
  response = await response.json();

  return response;
};

const useGameGet = () => {
  return useQuery(["game"], () => fetchGame());
};

export { useGameGet };
