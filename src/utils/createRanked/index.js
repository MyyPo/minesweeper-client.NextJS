// create a game with predefined parameters
const createRanked = async () => {
  const response = await fetch(process.env.NEXT_PUBLIC_API_GAME_START_RANKED, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });

  response = await response.json();

  return response;
};

export { createRanked };
