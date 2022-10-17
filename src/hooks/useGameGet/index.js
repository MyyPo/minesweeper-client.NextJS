import { useQuery } from "@tanstack/react-query";
import handleLogout from "../../utils/handleLogout";

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
    return handleLogout();
  }
  response = await response.json();

  return response;
};

const useGameGet = () => {
  return useQuery(["game"], () => fetchGame());
};

export { useGameGet };
