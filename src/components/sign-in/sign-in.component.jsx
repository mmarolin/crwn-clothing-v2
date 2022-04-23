import {
  signInWithGooglePopup,
  createUserDocumentFromAuth,
  signInWithTwitterPopup,
} from "../../utils/firebase/firebase.utils";
import "./sign-in.styles.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignIn = () => {
  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    await createUserDocumentFromAuth(user);
  };

  const logTwitterUser = async () => {
    const { user } = await signInWithTwitterPopup();
    await createUserDocumentFromAuth(user);
  };

  return (
    <div className="sign-container">
      <h1>SIGN IN</h1>

      <TextField
        className="form"
        type="email"
        id="standard-basic"
        label="Email"
        variant="standard"
        required
      />
      <TextField
        className="form"
        id="standard-basic"
        label="Password"
        type="password"
        variant="standard"
        required
      />

      <Button variant="outlined" onClick={logGoogleUser}>
        Sign in with Google
      </Button>
      <Button variant="outlined" onClick={logTwitterUser}>
        Sign in with Twitter
      </Button>
    </div>
  );
};

export default SignIn;
