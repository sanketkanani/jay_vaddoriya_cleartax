import { BBAuthentication, BBInput, BBPasswordInput } from "@components";

const Signup = () => {
  return (
    <BBAuthentication
      title="Signup on BurnBlack"
      buttonContent="Submit for Approval"
      term="I Agree all T&C"
      linkTitle="have an account?"
      link="Login"
      hrefLink="/login"
    >
      <BBInput
        label="Full Name"
        type="text"
        placeholder="Enter legal full name"
      />
      <BBPasswordInput label="Enter email" placeholder="Enter email" />
      <BBPasswordInput label="Phone Number" placeholder="Enter phone" />
    </BBAuthentication>
  );
};

export default Signup;
