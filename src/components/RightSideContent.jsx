import Profile1 from "../assets/RightSideContent_Icons/user-1 6.svg";
import Profile2 from "../assets/RightSideContent_Icons/user-2 1.svg";
import Profile3 from "../assets/RightSideContent_Icons/user-3 1.svg";
import Candidate1 from "../assets/RightSideContent_Icons/Mask group.svg";
import Candidate2 from "../assets/RightSideContent_Icons/Mask group (2).svg";
import Candidate3 from "../assets/RightSideContent_Icons/Mask group (3).svg";
import Candidate4 from "../assets/RightSideContent_Icons/Mask group (4).svg";
import Candidate5 from "../assets/RightSideContent_Icons/Mask group (1).svg";
import Prev from "../assets/RightSideContent_Icons/Vector.svg";
import Next from "../assets/RightSideContent_Icons/Vector (1).svg";

const RightSideContent = () => {
  return (
    <>
      {/* Main Calender starts from over here */}
      <section className="w-full min-h-[248px] bg-[#FFFFFF] shadow-xl px-3 py-3 flex justify-start items-center flex-col gap-6">
        {/* prev mon next start  */}
        <section className="flex justify-start items-center gap-1 w-full flex-col">
          <div className="w-full flex justify-between items-center">
            <img src={Prev} alt="#" />
            <h3 className="font-normal text-xs text-[#091316]">March 2024</h3>
            <img src={Next} alt="#" />
          </div>
          {/* underline start */}
          <div className="w-full h-[1px] bg-[#00000026]"></div>
        </section>
        {/* prev mon next end  */}

        {/* Months and  dates start */}
        <section className="w-full flex flex-col justify-start items-center gap-2">
          {/* months start*/}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <span className="text-[#0B74AD] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              Mon
            </span>
            <span className="text-[#0B74AD] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              Tue
            </span>
            <span className="text-[#0B74AD] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              Wed
            </span>
            <span className="text-[#0B74AD] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              Thu
            </span>
            <span className="text-[#0B74AD]  w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              Fri
            </span>
            <span className="text-[#0B74AD] w-[25px] h-[25px] justify-center items-center flex text-[10px] font-normal">
              Sat
            </span>
            <span className="text-[#0B74AD] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              Sun
            </span>
          </div>
          {/* months end */}
          {/* row 1 start */}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              1
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              2
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              3
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              4
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              5
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              6
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              7
            </span>
          </div>
          {/* row 1 end */}
          {/* row 2 start */}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              8
            </span>
            <div className="col-start-2 col-end-10 rounded-xl flex justify-around items-center bg-[#0B74AD26]">
              <span className="text-[#FFFFFF] text-center  text-[10px] w-[25px] h-[25px] rounded-full flex justify-center items-center bg-[#0A66C2] font-normal">
                9
              </span>
              <span className="text-[#000000]  w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                10
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                11
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                12
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
                13
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                14
              </span>
            </div>
          </div>
          {/* row 2 end */}
          {/* row 3 start */}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <div className="col-start-1 col-end-6 rounded-xl flex justify-around items-center bg-[#0B74AD26]">
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
                15
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
                16
              </span>
              <span className="text-[#000000] flex justify-center items-center w-[25px] h-[25px]  text-[10px] font-normal">
                17
              </span>
              <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                18
              </span>
              <span className="text-[#FFFFFF] bg-[#0A66C2] rounded-full w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
                19
              </span>
            </div>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              20
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              21
            </span>
          </div>
          {/* row 3 end */}
          {/* row 4 start */}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              22
            </span>
            <span className="text-[#000000]  w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              23
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              24
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              25
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              26
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              27
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              28
            </span>
          </div>
          {/* row 4 end */}
          {/* row 5 start */}
          <div className="w-full grid grid-cols-7 gap-3 text-center">
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center text-[10px] font-normal">
              29
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              30
            </span>
            <span className="text-[#000000] w-[25px] h-[25px] flex justify-center items-center  text-[10px] font-normal">
              31
            </span>
          </div>
          {/* row 5 end */}
        </section>
        {/* Months and dates end */}
      </section>
      {/* Main Calender ends over here */}

      {/* Main Upcoming container starts from over here */}
      <section className="w-full mb-3  flex flex-col justify-start items-start gap-[40px]">
        {/* Heading start */}
        <div className="w-full flex justify-between items-center">
          <span className="font-medium text-[22px] text-[#3E3E3E]">
            Upcomings
          </span>
          <a
            href="#"
            className="text-[#0A66C2] font-normal text-base underline underline-[#0A66C2]"
          >
            View All
          </a>
        </div>
        {/* Heading end */}

        {/* Schedules design start from over here */}
        <section className="flex justify-between items-center  w-full">
          {/* Date start */}
          <div className="w-[54px] h-[54px] flex flex-col bg-[#0B74AD26] justify-center items-center rounded-[5px] ">
            <h3 className="text-[14px] text-[#0B74AD] font-medium">07</h3>
            <p className="text-[14px] text-[#0B74AD] font-medium">Feb</p>
          </div>
          {/* Date end */}

          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start ">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              Interview with Designer
            </h3>
            <span className="font-normal text-xs text-[#000000]">
              Created by{" "}
              <span className="text-[#0A66C2] text-sm font-normal ">
                {" "}
                Stella
              </span>
            </span>
            <h3 className="font-normal text-[10px] text-[#3E3E3E]">
              10 A.M to 11 A.M
            </h3>
          </div>
          {/* Interview Details end */}

          {/* details button start*/}
          <button className="w-[73px] h-[37px] rounded  text-[14px] font-medium text-[#FFFFFF] bg-[#0A66C2] flex justify-center items-center">
            Details
          </button>
          {/* details button end */}
        </section>
        <section className="flex justify-between items-center  w-full">
          {/* Date start */}
          <div className="w-[54px] h-[54px] flex flex-col bg-[#D6D6D6] justify-center items-center rounded-[5px] ">
            <h3 className="text-[14px] text-black font-medium">07</h3>
            <p className="text-[14px] text-black font-medium">Feb</p>
          </div>
          {/* Date end */}

          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start ">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              Interview with Designer
            </h3>
            <span className="font-normal text-xs text-[#000000]">
              Created by{" "}
              <span className="text-[#0A66C2] text-sm font-normal ">
                {" "}
                Stella
              </span>
            </span>
            <h3 className="font-normal text-[10px] text-[#3E3E3E]">
              10 A.M to 11 A.M
            </h3>
          </div>
          {/* Interview Details end */}

          {/* details button start*/}
          <button className="w-[73px] h-[37px] rounded  text-[14px] font-medium text-[#FFFFFF] bg-[#0A66C2] flex justify-center items-center">
            Details
          </button>
          {/* details button end */}
        </section>
        <section className="flex justify-between items-center  w-full">
          {/* Date start */}
          <div className="w-[54px] h-[54px] flex flex-col bg-[#D6D6D6] justify-center items-center rounded-[5px] ">
            <h3 className="text-[14px] text-black font-medium">07</h3>
            <p className="text-[14px] text-black font-medium">Feb</p>
          </div>
          {/* Date end */}

          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start ">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              Interview with Designer
            </h3>
            <span className="font-normal text-xs text-[#000000]">
              Created by{" "}
              <span className="text-[#0A66C2] text-sm font-normal ">
                {" "}
                Stella
              </span>
            </span>
            <h3 className="font-normal text-[10px] text-[#3E3E3E]">
              10 A.M to 11 A.M
            </h3>
          </div>
          {/* Interview Details end */}

          {/* details button start*/}
          <button className="w-[73px] h-[37px] rounded  text-[14px] font-medium text-[#FFFFFF] bg-[#0A66C2] flex justify-center items-center">
            Details
          </button>
          {/* details button end */}
        </section>
        {/* Schedules design end over here */}
      </section>
      {/* Main Upcoming container ends over here */}

      {/* Main Activity container starts from over here */}
      <section className="w-full mb-[12px]  flex flex-col justify-start items-start gap-[40px]">
        {/* Heading start */}
        <div className="w-full flex justify-between items-center">
          <span className="font-medium text-[22px] text-[#3E3E3E]">
            Activity
          </span>
          <a
            href="#"
            className="text-[#0A66C2] font-normal text-base underline underline-[#0A66C2]"
          >
            View All
          </a>
        </div>
        {/* Heading end */}

        {/* Activity details start from over here 1*/}
        <section className="w-full flex justify-start items-center gap-3">
          {/* Profile start */}
          <div>
            <img src={Profile1} alt="#" />
          </div>
          {/* Profile end */}
          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start gap-2">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              John Doe{"  "}
              <span className="text-[#0B74AD] text-sm font-normal ">
                [Python Developer]
              </span>
            </h3>
            <span className="font-normal text-[11px] text-[#3E3E3E]">
              Interview with Stella
            </span>
            <h3 className="font-normal text-[9px] text-[#3E3E3E]">
              15 mins ago
            </h3>
          </div>
          {/* Interview Details end */}
        </section>
        {/* Activity details end over here 1*/}

        {/* Activity details start from over here 2*/}
        <section className="w-full flex justify-start items-center gap-3">
          {/* Profile start */}
          <div>
            <img src={Profile2} alt="#" />
          </div>
          {/* Profile end */}

          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start gap-2">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              John Doe{"  "}
              <span className="text-[#0B74AD] text-sm font-normal ">
                [Python Developer]
              </span>
            </h3>
            <span className="font-normal text-[11px] text-[#3E3E3E]">
              Interview with Stella
            </span>
            <h3 className="font-normal text-[9px] text-[#3E3E3E]">
              15 mins ago
            </h3>
          </div>
          {/* Interview Details end */}
        </section>
        {/* Activity details end over here 2*/}

        {/* Activity details start from over here 3*/}
        <section className="w-full flex justify-start items-center gap-3">
          {/* Profile start */}
          <div>
            <img src={Profile3} alt="#" />
          </div>
          {/* Profile end */}

          {/* Interview Details start */}
          <div className=" flex flex-col justify-start items-start gap-2">
            <h3 className="font-medium text-xs text-[#3E3E3E]">
              John Doe{"  "}
              <span className="text-[#0B74AD] text-sm font-normal ">
                [Python Developer]
              </span>
            </h3>
            <span className="font-normal text-[11px] text-[#3E3E3E]">
              Interview with Stella
            </span>
            <h3 className="font-normal text-[9px] text-[#3E3E3E]">
              15 mins ago
            </h3>
          </div>
          {/* Interview Details end */}
        </section>
        {/* Activity details end over here 3*/}
      </section>
      {/* Main Activity container ends over here  */}

      {/* Main Hiring Candidates start from over here */}
      <section className="w-full mb-3 flex flex-col justify-start items-start gap-[35px]">
        {/* Heading start */}
        <div className="w-full flex justify-between items-center">
          <span className="font-medium text-[22px] text-[#3E3E3E]">
            Hiring Candidates
          </span>
          <a
            href="#"
            className="text-[#0A66C2] font-normal text-base underline underline-[#0A66C2]"
          >
            View All
          </a>
        </div>
        {/* Heading end */}

        {/* Candidate Details start 1*/}
        <div className="w-full flex justify-between items-center">
          {/* Profile and candidates start */}
          <div className="flex justify-start items-center gap-3">
            <div>
              <img src={Candidate1} alt="#" />
            </div>

            {/* hiring Details start */}
            <div className=" flex flex-col justify-start items-start gap-2">
              <h3 className="font-medium text-xs text-[#3E3E3E]">John Doe</h3>
              <span className="font-normal text-[11px] text-[#3E3E3E]">
                Senior Python Developer
              </span>
              <h3 className="font-normal text-[9px] text-[#3E3E3E]">
                Hired by: Stella
              </h3>
            </div>
            {/* hiring Details end */}
          </div>
          {/* Profile and candidates start */}

          {/* Details button start */}
          <button className="w-[73px] border border-solid border-[#0A66C2] rounded h-[38px] flex justify-center items-center  font-normal text-xs text-[#0A66C2]">
            Details
          </button>
          {/* Details button end */}
        </div>
        {/* Candidate Details end 1*/}

        {/* Candidate Details start 2*/}
        <div className="w-full flex justify-between items-center">
          {/* Profile and candidates start */}
          <div className="flex justify-start items-center gap-3">
            <div>
              <img src={Candidate2} alt="#" />
            </div>

            {/* hiring Details start */}
            <div className=" flex flex-col justify-start items-start gap-2">
              <h3 className="font-medium text-xs text-[#3E3E3E]">John Doe</h3>
              <span className="font-normal text-[11px] text-[#3E3E3E]">
                Senior Python Developer
              </span>
              <h3 className="font-normal text-[9px] text-[#3E3E3E]">
                Hired by: Stella
              </h3>
            </div>
            {/* hiring Details end */}
          </div>
          {/* Profile and candidates start */}

          {/* Details button start */}
          <button className="w-[73px] border border-solid border-[#0A66C2] rounded h-[38px] flex justify-center items-center  font-normal text-xs text-[#0A66C2]">
            Details
          </button>
          {/* Details button end */}
        </div>
        {/* Candidate Details end 2*/}

        {/* Candidate Details start 3*/}
        <div className="w-full flex justify-between items-center">
          {/* Profile and candidates start */}
          <div className="flex justify-start items-center gap-3">
            <div>
              <img src={Candidate3} alt="#" />
            </div>

            {/* hiring Details start */}
            <div className=" flex flex-col justify-start items-start gap-2">
              <h3 className="font-medium text-xs text-[#3E3E3E]">John Doe</h3>
              <span className="font-normal text-[11px] text-[#3E3E3E]">
                Senior Python Developer
              </span>
              <h3 className="font-normal text-[9px] text-[#3E3E3E]">
                Hired by: Stella
              </h3>
            </div>
            {/* hiring Details end */}
          </div>
          {/* Profile and candidates start */}

          {/* Details button start */}
          <button className="w-[73px] border border-solid border-[#0A66C2] rounded h-[38px] flex justify-center items-center  font-normal text-xs text-[#0A66C2]">
            Details
          </button>
          {/* Details button end */}
        </div>
        {/* Candidate Details end 3*/}

        {/* Candidate Details start 4*/}
        <div className="w-full flex justify-between items-center">
          {/* Profile and candidates start */}
          <div className="flex justify-start items-center gap-3">
            <div>
              <img src={Candidate4} alt="#" />
            </div>

            {/* hiring Details start */}
            <div className=" flex flex-col justify-start items-start gap-2">
              <h3 className="font-medium text-xs text-[#3E3E3E]">John Doe</h3>
              <span className="font-normal text-[11px] text-[#3E3E3E]">
                Senior Python Developer
              </span>
              <h3 className="font-normal text-[9px] text-[#3E3E3E]">
                Hired by: Stella
              </h3>
            </div>
            {/* hiring Details end */}
          </div>
          {/* Profile and candidates start */}

          {/* Details button start */}
          <button className="w-[73px] border border-solid border-[#0A66C2] rounded h-[38px] flex justify-center items-center  font-normal text-xs text-[#0A66C2]">
            Details
          </button>
          {/* Details button end */}
        </div>
        {/* Candidate Details end 4*/}

        {/* Candidate Details start 5*/}
        <div className="w-full flex justify-between items-center">
          {/* Profile and candidates start */}
          <div className="flex justify-start items-center gap-3">
            <div>
              <img src={Candidate5} alt="#" />
            </div>

            {/* hiring Details start */}
            <div className=" flex flex-col justify-start items-start gap-2">
              <h3 className="font-medium text-xs text-[#3E3E3E]">John Doe</h3>
              <span className="font-normal text-[11px] text-[#3E3E3E]">
                Senior Python Developer
              </span>
              <h3 className="font-normal text-[9px] text-[#3E3E3E]">
                Hired by: Stella
              </h3>
            </div>
            {/* hiring Details end */}
          </div>
          {/* Profile and candidates start */}

          {/* Details button start */}
          <button className="w-[73px] border border-solid border-[#0A66C2] rounded h-[38px] flex justify-center items-center  font-normal text-xs text-[#0A66C2]">
            Details
          </button>
          {/* Details button end */}
        </div>
        {/* Candidate Details end 5*/}
      </section>
      {/* Main Hiring Candidates end over here */}
    </>
  );
};

export default RightSideContent;
