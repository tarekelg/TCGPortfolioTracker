const SignUp = () => {
  return (
    <form
      action=""
      className="flex flex-col items-center text-white  p-8 gap-3 "
    >
      <div>
        <p>username</p>
        <input type="text" className=" bg-black text-white" />
      </div>
      <div>
        <p>password</p>
        <input type="password" className="bg-black text-white" />
      </div>
      <div>
        <p>confirm password</p>
        <input type="password" className="bg-black text-white" />
      </div>
      <button className=" bg-cyan-700 min-w-20 h-10">Sign Up</button>
      <p></p>
    </form>
  );
};

export default SignUp;
