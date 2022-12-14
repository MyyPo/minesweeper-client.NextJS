import Game from "../Game";
import Auth from "../Auth";
import useAuthContext from "../../hooks/useAuthContext";

function Hero() {
  // comment in the hook
  const { status } = useAuthContext();

  return (
    <>
      {/* Handles authentication login/registration */}
      {status === "unauthenticated" ? <Auth /> : null}
      {status === "authenticated" ? <Game /> : null}
    </>
  );
}

export default Hero;
