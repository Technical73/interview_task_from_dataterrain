import Search from "../assets/Posted_Jobs_Icons/search-interface-symbol 1.svg";
import Filter_Icon from "../assets/Posted_Jobs_Icons/Layer_1.svg";
import Python from "../assets/Posted_Jobs_Icons/python 1.svg";
import Angular from "../assets/Posted_Jobs_Icons/Angular_full_color_logo 2.svg";
import Java from "../assets/Posted_Jobs_Icons/java 1.svg";
import Uparrow from "../assets/Posted_Jobs_Icons/Group 161.svg";
const Posted_Jobs = () => {
  return (
    <>
      {/* Main Container starts from over here */}
      <section className="w-[100%] bg-white shadow-md rounded-[5px] px-4 py-6 gap-8 flex flex-col justify-start items-start">
        {/* Heading and input filter button start from  over here */}
        <div className="w-full flex justify-between items-center">
          {/* Heading start */}
          <div className="flex justify-start items-center gap-11">
            <span className="font-semibold text-[28px] text-[#3E3E3E]">
              Posted Jobs
            </span>
            <a
              href="#"
              className="text-[#0A66C2] font-normal text-base underline underline-[#0A66C2]"
            >
              View All
            </a>
          </div>
          {/* Heading end */}

          {/* Input and filter start */}
          <div className="flex justify-end items-center gap-11">
            {/* input start*/}
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] h-[50px] border-white outline-none shadow-md px-2 py-1  font-normal text-base"
              />
              <img
                src={Search}
                alt="#"
                className="w-5 h-5 absolute top-4 right-3"
              />
            </form>
            {/* input end */}
            {/* filter button start */}
            <button className="w-[106px] h-[57px] bg-white shadow-md flex justify-center items-center rounded-[5px] font-normal text-base text-[#000000] gap-3">
              <img src={Filter_Icon} alt="#" />
              Filters
            </button>
            {/* filter button end */}
          </div>
          {/* Input and filter end */}
        </div>
        {/* Heading and input filter button end over here */}

        {/* Nav Tabs start from over here */}
        <div className="flex justify-start items-start flex-col w-full">
          {/* Nav names start  */}
          <div className="flex justify-between items-center w-[600px]  h-[38px] ">
            {/* Active jobs */}
            <button className="w-[158px] font-normal text-xl text-[#3E3E3E] h-full flex justify-center items-center bg-[#0B74AD26]">
              Active Jobs
            </button>
            {/* Inactive Jobs */}
            <button className="w-[158px] font-normal text-xl text-[#3E3E3E] h-full flex justify-center items-center">
              Inactive Jobs
            </button>
            {/* Completed Jobs */}
            <button className="w-[158px] font-normal text-xl text-[#3E3E3E] h-full flex justify-center items-center">
              Completed Jobs
            </button>
          </div>
          {/* Nav names end */}
          {/* underline */}
          <div className="w-full h-[1px] bg-[#3E3E3E] opacity-75"></div>
        </div>
        {/* Nav Tabs end over here */}

        {/* Job cards start from over here */}
        <section className="w-full flex justify-between items-center h-[329px] ">
          {/* python dev role starts */}
          <div className="w-[260px] h-full flex flex-col justify-between items-center py-2 px-1 bg-white shadow-md ">
            {/* heading start */}
            <section className="w-full flex justify-start items-start flex-col  gap-2">
              <div className="w-full flex justify-between items-center">
                <div>
                  <img src={Python} alt="#" />
                </div>
                <h3 className="font-normal text-base text-[#091316]">
                  Python Developers
                </h3>
                <p className="text-sm font-normal text-[#091316]">#001</p>
              </div>
              {/* underline start */}
              <div className="w-full h-[1px] opacity-75 bg-[#D6D6D6]"></div>
            </section>

            {/* heading end */}

            {/* Total Applicants start */}
            <div className="flex justify-start items-center flex-col gap-3">
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Senior Developers
              </h3>
              <div className="w-[100px] bg-[#0B74AD26] h-[80px] flex justify-center items-center text-[28px] font-semibold text-[#0A66C2]">
                258
              </div>
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Total Applicants
              </h3>
            </div>
            {/* Total Applicants end */}

            {/* month and mins ago start */}
            <div className="flex justify-between items-center w-full">
              {/* last month start */}
              <div className="flex justify-start items-center gap-3">
                <img src={Uparrow} alt="#" />
                <p className="font-normal text-sm text-[#3E3E3E]">
                  <span className="text-sm mr-1 text-[#0A66C2] font-normal">
                    28%
                  </span>
                  vs Last month
                </p>
              </div>
              {/* last month end */}
              {/* mins ago start */}

              <p className="text-sm font-normal text-[#091316]">6 mins ago</p>
              {/* mins ago end */}
            </div>
            {/* month and mins ago end */}
          </div>
          {/* python dev role ends */}

          {/* Angular dev role starts */}
          <div className="w-[260px] h-full flex flex-col justify-between items-center py-2 px-1 bg-white shadow-md ">
            {/* heading start */}
            <section className="w-full flex justify-start items-start flex-col  gap-2">
              <div className="w-full flex justify-between items-center">
                <div>
                  <img src={Angular} alt="#" />
                </div>
                <h3 className="font-normal text-base text-[#091316]">
                  Angular Developers
                </h3>
                <p className="text-sm font-normal text-[#091316]">#002</p>
              </div>
              {/* underline start */}
              <div className="w-full h-[1px] opacity-75 bg-[#D6D6D6]"></div>
            </section>

            {/* heading end */}

            {/* Total Applicants start */}
            <div className="flex justify-start items-center flex-col gap-3">
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Senior Developers
              </h3>
              <div className="w-[100px] bg-[#0B74AD26] h-[80px] flex justify-center items-center text-[28px] font-semibold text-[#0A66C2]">
                258
              </div>
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Total Applicants
              </h3>
            </div>
            {/* Total Applicants end */}

            {/* month and mins ago start */}
            <div className="flex justify-between items-center w-full">
              {/* last month start */}
              <div className="flex justify-start items-center gap-3">
                <img src={Uparrow} alt="#" />
                <p className="font-normal text-sm text-[#3E3E3E]">
                  <span className="text-sm mr-1 text-[#0A66C2] font-normal">
                    28%
                  </span>
                  vs Last month
                </p>
              </div>
              {/* last month end */}
              {/* mins ago start */}

              <p className="text-sm font-normal text-[#091316]">6 mins ago</p>
              {/* mins ago end */}
            </div>
            {/* month and mins ago end */}
          </div>
          {/* Angular dev role ends */}

          {/* Java dev role starts */}
          <div className="w-[260px] h-full flex flex-col justify-between items-center py-2 px-1 bg-white shadow-md ">
            {/* heading start */}
            <section className="w-full flex justify-start items-start flex-col  gap-2">
              <div className="w-full flex justify-between items-center">
                <div>
                  <img src={Java} alt="#" />
                </div>
                <h3 className="font-normal text-base text-[#091316]">
                  Java Developers
                </h3>
                <p className="text-sm font-normal text-[#091316]">#003</p>
              </div>
              {/* underline start */}
              <div className="w-full h-[1px] opacity-75 bg-[#D6D6D6]"></div>
            </section>

            {/* heading end */}

            {/* Total Applicants start */}
            <div className="flex justify-start items-center flex-col gap-3">
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Senior Developers
              </h3>
              <div className="w-[100px] bg-[#0B74AD26] h-[80px] flex justify-center items-center text-[28px] font-semibold text-[#0A66C2]">
                258
              </div>
              <h3 className="font-normal text-sm text-[#3E3E3E]">
                Total Applicants
              </h3>
            </div>
            {/* Total Applicants end */}

            {/* month and mins ago start */}
            <div className="flex justify-between items-center w-full">
              {/* last month start */}
              <div className="flex justify-start items-center gap-3">
                <img src={Uparrow} alt="#" />
                <p className="font-normal text-sm text-[#3E3E3E]">
                  <span className="text-sm mr-1 text-[#0A66C2] font-normal">
                    28%
                  </span>
                  vs Last month
                </p>
              </div>
              {/* last month end */}
              {/* mins ago start */}

              <p className="text-sm font-normal text-[#091316]">6 mins ago</p>
              {/* mins ago end */}
            </div>
            {/* month and mins ago end */}
          </div>
          {/* Java dev role ends */}
        </section>
        {/* Job cards end over here */}
      </section>

      {/* Main Container ends over here */}
    </>
  );
};

export default Posted_Jobs;
