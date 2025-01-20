import axios from "axios";

const Login = () => {
  async function login(e) {
    e.preventDefault();
    console.log(e.target.username.value);

    const data = {
      email: e.target.username.value,
      password: e.target.password.value,
    };

    if (data.email) {
      if (data.password) {
        try {
          const response = await axios.post(
            "http://localhost:3000/users/login",
            data,
            { withCredentials: true }
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
      } else {
        console.log("password field empty");
      }
    } else {
      console.log("email field empty");
    }
  }

  return (
    <form
      action=""
      className="flex flex-col items-center text-white  p-8 gap-3 z-30"
      onSubmit={login}
    >
      <div>
        <p>username</p>
        <input type="text" className=" bg-black text-white" name="username" />
      </div>
      <div>
        <p>password</p>
        <input
          type="password"
          className="bg-black text-white"
          name="password"
        />
      </div>
      <button className=" bg-blue-500 min-w-20 h-10">Login</button>
    </form>
  );
};

export default Login;
