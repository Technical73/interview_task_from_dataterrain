import Dots from "../assets/Interview_Meeting_Icons/Group 1292.svg";
import Person1 from "../assets/Interview_Meeting_Icons/Group 1310.svg";
import Calender from "../assets/Interview_Meeting_Icons/Group 1311.svg";
import Time from "../assets/Interview_Meeting_Icons/Group 1317.svg";

const Interview_Meeting = () => {
  return (
    <>
      <section className="w-[100%] bg-white shadow-md rounded-[5px] px-4 py-6 gap-4 flex flex-col justify-start items-start">
        {/* Heading and Three dots start from over here */}
        <div className="w-full flex justify-between items-center">
          <h3 className="font-medium text-[16px] text-[#000000] ">
            Today Interviews Meetings Info
          </h3>
          <img src={Dots} alt="#" />
        </div>
        {/* Heading and Three Dots end over here */}

        <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
        {/* Meeting cards start from over here */}
        <section className="flex w-[80%]  h-[324px]  justify-start items-center gap-4">
          {/* Card 1 starts from over here */}
          <div className="w-full h-full bg-white shadow-md flex justify-between items-center border border-solid border-[#D6D6D6] ">
            {/* Profile Content 1 start*/}
            <div className="w-[35%]  h-full flex justify-center items-center flex-col gap-6 px-2 py-2">
              {/* image and name */}
              <div className="w-full  border-solid border-[#D6D6D6] flex justify-center items-center gap-2 flex-col">
                <img src={Person1} alt="#" />
                <h3 className="font-normal text-base text-[#091316]">
                  John Smith
                </h3>
                <p className="font-normal text-sm text-[#091316]">
                  Senior Python Developer
                </p>
              </div>

              {/* date and time starts from over here */}
              <div className="w-full flex justify-around items-center">
                {/* date */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={Calender} alt="#" />
                  <span className="text-[#0A66C2] font-normal text-sm ">
                    19th Feb 2024
                  </span>
                </div>
                {/* time */}
                <div className="flex flex-col justify-center items-center gap-2">
                  <img src={Time} alt="#" />
                  <span className="text-[#0A66C2] font-normal text-sm ">
                    10.30 A.M
                  </span>
                </div>
              </div>
              {/* date and time ends over here */}
            </div>

            {/* Profile content 1 end */}

            {/* Info about the meeting starts from over here */}
            <div className="w-full  flex flex-col justify-start items-center h-full">
              {/* grid layout starts */}
              <section className="grid w-full grid-cols-2">
                {/* 1st level */}
                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    1st Level: 7/10
                  </span>
                </div>
                {/* Interviewer:
Stella */}
                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    Interviewer: Stella
                  </span>
                </div>
                {/* 2nd Level:
6/10 */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    2nd Level: 6/10
                  </span>
                </div>
                {/* Interviewer:
Smith */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    Interviewer: Smith
                  </span>
                </div>
                {/* 3rd Level:
Waiting */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    3rd Level: Waiting
                  </span>
                </div>
                {/* Interviewer:
Stephan */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    Interviewer:{" "}
                    <span className="text-[#0A66C2] text-sm font-normal ">
                      Stephan
                    </span>
                  </span>
                </div>
                {/* Meet Via:
G-Meet */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    Meet Via: G-Meet
                  </span>
                </div>
                {/* Attendees:
Johnson */}

                <div className="w-full flex justify-center items-end py-2 border border-solid border-[#D6D6D6]">
                  <span className="font-normal text-sm text-[#000000]">
                    Attendees: Johnson
                  </span>
                </div>
                <div className="col-span-full w-full h-[170px] border-[#D6D6D6] border border-solid flex justify-center items-center gap-8">
                  <button className="w-[171px] h-[45px] border border-solid border-[#0A66C2] text-[14px] font-medium text-[#0A66C2] flex justify-center items-center">
                    Reschedule Meeting
                  </button>
                  <button className="w-[171px] h-[45px]  text-[14px] font-medium text-[#FFFFFF] bg-[#0A66C2] flex justify-center items-center">
                    Join Meeting
                  </button>
                </div>
              </section>
              {/* grid layout ends */}
              {/* Buttons start from over here */}
              {/* Button end over here */}
            </div>
            {/* Info about the meeting ends over here */}
          </div>
        </section>
        {/* Meeting cards end over here */}

        {/* Scroll start */}
        <div className="w-full h-[15px] rounded-xl bg-[#D9D9D9] ">
          {/* button */}
          <div className="w-[65px] h-[15px] bg-[#0A66C2] rounded-lg ml-8"></div>
        </div>
        {/* Scroll end */}
      </section>
    </>
  );
};

export default Interview_Meeting;
