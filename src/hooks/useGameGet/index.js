import { useQuery } from "@tanstack/react-query";

const fetchGame = async (x, y) => {
  const response = await (
    await fetch(process.env.NEXT_PUBLIC_API_GAME_PLAY, {
      credentials: "include",
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
  ).json();

  return response;
};

const useGameGet = () => {
  return useQuery(["game"], () => fetchGame());
};

export { useGameGet };
