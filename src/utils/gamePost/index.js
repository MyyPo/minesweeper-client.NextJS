const gamePost = async ({ x, y }) => {
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

export { gamePost };
