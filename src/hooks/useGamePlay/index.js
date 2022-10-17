import { useQuery } from "@tanstack/react-query";

const fetchGame = async (x, y) => {
  const response = await (
    await fetch(process.env.NEXT_PUBLIC_API_GAME_PLAY, {
      credentials: "include",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        x: x,
        y: y,
      }),
    })
  ).json();

  return response;
};

const useGamePlay = (x, y) => {
  return useQuery(["game", x, y], () => fetchGame(x, y));
};

export { useGamePlay };
