import { Main_Component, SideBar } from "../components/index";

const Main_Page = () => {
  return (
    <>
      {/* grid layout starts from over here */}
      <div className="grid grid-cols-[50px,auto] w-full gap-3 px-1 h-full">
        {" "}
        <SideBar />
        <Main_Component />
      </div>

      {/* grid layout ends over here */}
    </>
  );
};

export default Main_Page;
