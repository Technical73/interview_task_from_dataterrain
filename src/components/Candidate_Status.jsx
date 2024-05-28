import Search from "../assets/Candidate_Status_Icons/search-interface-symbol 1.svg";
import Filter_Icon from "../assets/Candidate_Status_Icons/Layer_1.svg";
import Dots from "../assets/Candidate_Status_Icons/Group 328.svg";
import View_Icon from "../assets/Candidate_Status_Icons/Group 369.svg";
import close_Icon from "../assets/Candidate_Status_Icons/Vector.svg";

const Candidate_Status = () => {
  return (
    <>
      {/* Main container starts from here */}
      <section className="w-full bg-white shadow-md rounded-[5px] px-4 py-6 gap-8 flex flex-col justify-start items-start">
        {/* Heading and input filter button start from here */}
        <div className="w-full flex justify-between items-center">
          {/* Heading start */}
          <div className="flex justify-start items-center gap-11">
            <span className="font-semibold text-[28px] text-[#3E3E3E]">
              Candidate Status
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
            {/* input start */}
            <form className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-[300px] h-[50px] border border-gray-300 outline-none shadow-md px-4 py-2 rounded font-normal text-base"
              />
              <img
                src={Search}
                alt="Search"
                className="w-5 h-5 absolute top-1/2 transform -translate-y-1/2 right-3"
              />
            </form>
            {/* input end */}
            {/* filter button start */}
            <button className="w-[106px] h-[57px] bg-white shadow-md flex justify-center items-center rounded-[5px] font-normal text-base text-[#000000] gap-3 border border-gray-300">
              <img src={Filter_Icon} alt="Filter" />
              Filters
            </button>
            {/* filter button end */}
          </div>
          {/* Input and filter end */}
        </div>
        {/* Heading and input filter button end here */}

        {/* Table starts here */}
        <div className="overflow-x-auto w-full">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-[#F5F5F5] border-b border-black">
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Job ID
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Name
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Position
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  1st Level
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  2nd Level
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  3rd Level
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  4th Level
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Total Marks
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Status
                </th>
                <th className="font-medium text-sm text-[#3E3E3E] py-6 px-4 text-start">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {/* table body row 1 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #001
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  John Doe
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Designer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  7/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  3/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#F5C961] font-normal text-sm pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#F5C961] font-normal text-sm bg-[#FFF9EC]">
                    Active
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 1 end */}
              {/* table body row 2 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #002
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  John Smith
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Angular Developer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  5/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  5/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 ">
                  8/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 ">
                  24/40
                </td>
                <td className="text-center pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#108F0E] font-normal text-sm bg-[#0EAD0B26]">
                    Hired
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 2 end */}

              {/* table body row 3 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #003
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Johnson Smith
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Python Developer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  7/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  3/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#F5C961] font-normal text-sm pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#F5C961] font-normal text-sm bg-[#FFF9EC]">
                    Active
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 3 end */}

              {/* table body row 4 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #004
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Stella
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Android Developer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  7/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  <div className="w-[25px] h-[25px] flex justify-center items-center bg-[#E73B3B26] rounded-full">
                    <img src={close_Icon} alt="" />
                  </div>
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 ">
                  <div className="w-[25px] h-[25px] flex justify-center items-center bg-[#E73B3B26] rounded-full">
                    <img src={close_Icon} alt="" />
                  </div>
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 ">
                  8/40
                </td>
                <td className="text-center pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#D12323] font-normal text-sm bg-[#E73B3B26]">
                    Reject
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 4 end */}

              {/* table body row 5 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #005
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Randy
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  IOS Developer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  7/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  3/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#F5C961] font-normal text-sm pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#F5C961] font-normal text-sm bg-[#FFF9EC]">
                    Active
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 5 end */}

              {/* table body row 6 start */}
              <tr className="hover:bg-gray-50 border-b border-[#09131640]">
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  #006
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  John Doe
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  Junior Designer
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  6/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  7/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4">
                  3/10
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#3E3E3E] font-normal text-sm pt-6 px-4 text-center">
                  <img src={Dots} alt="Dots" />
                </td>
                <td className="text-[#F5C961] font-normal text-sm pt-6 pb-2 px-4">
                  <button className=" w-[70px] h-[25px] flex justify-center items-center rounded text-[#F5C961] font-normal text-sm bg-[#FFF9EC]">
                    Active
                  </button>
                </td>
                <td className="text-[#3E3E3E] font-normal  text-sm pt-6 px-4 text-center">
                  <img src={View_Icon} alt="View" />
                </td>
              </tr>
              {/* table body row 6 end */}
            </tbody>
          </table>
        </div>
        {/* Table ends here */}
      </section>
      {/* Main container ends here */}
    </>
  );
};

export default Candidate_Status;
