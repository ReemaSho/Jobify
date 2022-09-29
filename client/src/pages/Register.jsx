import { useState, useEffect } from "react";
import { Logo, FormRow, Alert } from "../components";
import Wrapper from "../assets/wrappers/RegisterPage";
import { useAppContext } from "../context/appContext";
const initialState = {
  name: "",
  email: "",
  password: "",
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  // global state and useNavigate here
  const { showAlert, isLoading, displayAlert } = useAppContext();
  // input change
  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    console.log(values);
  };

  // toggleMember
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  return (
    <Wrapper className="full-page">
      {/* form */}
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{values.isMember ? "Login" : "Register"}</h3>
        {showAlert && <Alert />}

        {/* name input  */}
        {!values.isMember && (
          <FormRow
            type="text"
            value={values.name}
            name={"name"}
            handleChange={handleChange}
          />
        )}

        {/* email input  */}
        <FormRow
          type="email"
          value={values.email}
          name="email"
          handleChange={handleChange}
        />

        {/* Password input  */}
        <FormRow
          type="Password"
          value={values.password}
          name="password"
          handleChange={handleChange}
        />

        {/* button to submit */}
        <button type="submit" className="btn btn-block">
          Submit
        </button>
        <p>
          {values.isMember ? "Not a member yet?" : "Already a member?"}
          <button type="button" onClick={toggleMember} className="member-btn">
            {values.isMember ? "Register" : "Login"}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
