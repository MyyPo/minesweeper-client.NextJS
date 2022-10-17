export const initialState = {
  loginWindow: false,
  registrationWindow: false,
};

export const openLogin = () => ({
  type: "OPEN_LOGIN",
});

export const openRegistration = () => ({
  type: "OPEN_REGISTRATION",
});

export const closeWindow = () => ({
  type: "CLOSE_WINDOW",
});

export const reducer = (state, action) => {
  switch (action.type) {
    case "OPEN_LOGIN":
      return { loginWindow: true, registrationWindow: false };
    case "OPEN_REGISTRATION":
      return { registrationWindow: true, loginWindow: false };
    case "CLOSE_WINDOW":
      return { registrationWindow: false, loginWindow: false };
    default:
      throw new Error(`Invalid action type ${action.type}`);
  }
};
