import { useEffect, useState } from "react";

function getAuthCookie() {
  return document.cookie
    .split("; ")
    .filter((row) => row.startsWith("expires="))
    .map((c) => c.split("=")[1])[0];
}

// function useAuthCookie() {
//   const [authCookie, setAuthCookie] = useState(null);

//   useEffect(() => {
//     setAuthCookie(
//       document.cookie
//         .split("; ")
//         .filter((row) => row.startsWith("expires="))
//         .map((c) => c.split("=")[1])[0]
//     );
//   }, []);
//   if (authCookie === null) {
//     return "loading";
//   }
//   return authCookie;
// }

export default getAuthCookie;
