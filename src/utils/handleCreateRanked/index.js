// create a game with predefined parameters
export default async function handleCreateRanked() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_GAME_START_RANKED, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  await response.json();
  return response;
}
