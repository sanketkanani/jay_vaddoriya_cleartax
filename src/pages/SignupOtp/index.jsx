import { BBAuthentication, BBPasswordInput } from "@components";

const SignupOtp = () => {
  return (
    <BBAuthentication
      title="Signup on BurnBlack"
      buttonContent="Sign Up"
      term="I Agree all T&C"
      linkTitle="have an account?"
      link="Login"
      hrefLink="/login"
    >
      <BBPasswordInput label="Phone OTP" placeholder="Enter phone OTP" />
      <BBPasswordInput label="Email OTP" placeholder="Enter email OTP" />
    </BBAuthentication>
  );
};

export default SignupOtp;
