import { useEffect } from "react";
import useFetchData from "./FetchData";
import Login from "./Login";
import Entry from "./Entry";

const MainPage = () => {
  return (
    <div className="bg-blue-950 h-screen  flex flex-col justify-center items-center">
      <Entry />
    </div>
  );
};

export default MainPage;
