import { useMutation } from "@tanstack/react-query";

const fetchGame = async ({ x, y }) => {
  console.log(x);
  console.log(y);
  const response = await fetch(process.env.NEXT_PUBLIC_API_GAME_PLAY, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      x: x,
      y: y,
    }),
  });

  response = await response.json();

  return response;
};

const useGamePost = (turn) => {
  return useMutation(turn, () => fetchGame(turn.x, turn.y));
};

export { useGamePost, fetchGame };
