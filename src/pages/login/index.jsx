import { BBAuthentication, BBInput, BBPasswordInput } from "@components";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <BBAuthentication
      title="Nice to see you again"
      buttonContent="Sign in"
      forgot={
        <Link hrefLang="#" className="h3">
          Forgot password?
        </Link>
      }
      term="Remember me"
      linkTitle="Dont have an account?"
      link="Become a Partner"
      hrefLink="/signup"
    >
      <BBInput
        label="Full Name"
        type="text"
        placeholder="Enter legal full name"
      />
      <BBPasswordInput label="OTP" placeholder="Enter password" />
    </BBAuthentication>
  );
};

export default Login;
