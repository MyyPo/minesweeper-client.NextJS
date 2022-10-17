import { useEffect, useState } from "react";

function getAuthCookie() {
  return document.cookie
    .split("; ")
    .filter((row) => row.startsWith("expires="))
    .map((c) => c.split("=")[1])[0];
}

export default getAuthCookie;
