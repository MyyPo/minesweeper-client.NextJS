import Router from "next/router";

// this function calls backend endpoint removing http-only and non-http-only cookies
// by setting their expiration time to Date.now()
export default async function handleLogout() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_AUTH_LOGOUT, {
    credentials: "include",
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    Router.reload();
  } else {
    await response.json();
    console.log(response.msg);
  }
}
