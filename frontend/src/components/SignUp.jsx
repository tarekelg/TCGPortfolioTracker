import axios from "axios";

const SignUp = () => {
  const check_password_confirmation = (password, confirm_password) => {
    if (password == confirm_password) {
      return true;
    } else {
      return false;
    }
  };

  const validateSignUpForm = (data) => {
    const newErrors = {};
    if (!data.username) newErrors.username = "Username is required";

    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) newErrors.password = "Password is required";
    if (!data.confirm_password)
      newErrors.confirm_password = "Password confirmation is required";
    if (!check_password_confirmation(data.password, data.confirm_password))
      newErrors.confirmationProcess = "Could not confirm password";

    return newErrors;
  };

  async function signup(e) {
    e.preventDefault();
    console.log(e.target.username.value);

    const data = {
      username: e.target.username.value,
      email: e.target.email.value,
      password: e.target.password.value,
      confirm_password: e.target.confirm_password.value,
    };

    const newErrors = validateSignUpForm(data);

    if (!(Object.keys(newErrors).length > 0)) {
      try {
        const response = await axios.post(
          "http://localhost:3000/users/signup",
          data,
          { withCredentials: true }
        );
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log(newErrors);
    }
  }

  return (
    <form
      action=""
      className="flex flex-col items-center text-white  p-8 gap-3 "
      onSubmit={signup}
    >
      <div>
        <p>username</p>

        <input type="text" className=" bg-black text-white" name="username" />
        <p>email</p>
        <input type="text" className=" bg-black text-white" name="email" />
      </div>
      <div>
        <p>password</p>
        <input
          type="password"
          className="bg-black text-white"
          name="password"
        />

        <p>confirm password</p>
        <input
          type="password"
          className="bg-black text-white"
          name="confirm_password"
        />
      </div>
      <button className=" bg-cyan-700 min-w-20 h-10">Sign Up</button>
      <p></p>
    </form>
  );
};

export default SignUp;
