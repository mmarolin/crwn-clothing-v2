import "./sign-up.styles.scss";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignUp = () => {
  return (
    <div className="sign-up-container">
      <h1>SIGN UP</h1>
      <TextField
        className="form"
        type="text"
        id="standard-basic"
        label="Username"
        variant="standard"
        required
      />
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
        type="password"
        id="standard-basic"
        label="Password"
        variant="standard"
        required
      />
      <TextField
        className="form"
        id="standard-basic"
        label="Confirm Password"
        type="password"
        variant="standard"
        required
      />
    </div>
  );
};

export default SignUp;
