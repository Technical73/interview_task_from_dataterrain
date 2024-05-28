import Application_Assessment from "./Application_Assessment";
import Candidate_Status from "./Candidate_Status";
import Interview_Meeting from "./Interview_Meeting";
import Posted_Jobs from "./Posted_Jobs";
import RightSideContent from "./RightSideContent";

const Main_Component = () => {
  return (
    <>
      {/* Main Container starts from over here */}
      <section className=" col-start-2 col-end-3 min-h-[600px] flex flex-col justify-start items-center px-2 py-6 gap-4">
        <Application_Assessment />
        <div className=" grid grid-cols-[600px, auto]  gap-3 w-full">
          <section className=" col-start-1 col-end-3 w-[100%] shadow-md min-h-[67px] flex flex-col justify-start items-start gap-5 ">
            <Interview_Meeting />
            <Posted_Jobs />
            <Candidate_Status />
          </section>
          <section className=" shadow-md  col-start-3 col-end-3 w-[100%] min-h-[400px] px-2 gap-6 flex flex-col justify-start items-center">
            <RightSideContent />
          </section>
        </div>
      </section>
      {/* Main Container ends over here */}
    </>
  );
};

export default Main_Component;
