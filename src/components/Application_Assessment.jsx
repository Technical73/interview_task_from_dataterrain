import { useState } from "react";
import ReactApexChart from "react-apexcharts";
import DropDown from "../assets/Application_and_Assessment_Icons/Group 966.svg";
import Group_Icon from "../assets/Application_and_Assessment_Icons/Group 344.svg";
import Person from "..//assets/Application_and_Assessment_Icons/69812641_007_office_girl 2.svg";
import Person2 from "../assets/Application_and_Assessment_Icons/69812641_007_office_girl 1.svg";

const Application_Assessment = () => {
  const [chartOptions] = useState({
    series: [
      {
        name: "Website Blog",
        type: "column",
        data: [
          2000, 1000, 1200, 2000, 1677, 1763, 999, 3213, 987, 764, 1000, 1600,
        ],
      },
      {
        name: "Social Media",
        type: "line",
        data: [
          2000, 1000, 1200, 2000, 1677, 1763, 999, 3213, 987, 764, 1000, 1600,
        ],
      },
    ],
    options: {
      chart: {
        height: 250,
        type: "line",
        toolbar: {
          show: false, // Hide the entire toolbar
        },
      },
      stroke: {
        width: [0, 4],
        colors: ["#002B55BD"], // Set line color
      },
      colors: ["#277ACC", "#002B55BD"], // Set bar and line colors
      tooltip: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        enabledOnSeries: [1],
      },
      labels: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      xaxis: {
        type: "category",
        axisBorder: {
          show: true,
          color: "#3E3E3E", // Set x-axis line color
        },
      },
      yaxis: {
        min: 0,
        max: 4000,
        axisBorder: {
          show: true,
          color: "#3E3E3E",
          offsetX: 0,
          offsetY: 0,
        },
      },

      legend: {
        show: false, // Hide the legend
      },
      plotOptions: {
        bar: {
          borderRadius: 5, // Rounded top bar
          colors: {
            ranges: [
              {
                from: 0,
                to: 4000,
                color: "#277ACC", // Set bar color
              },
            ],
          },
        },
      },
      grid: {
        show: false, // Hide the grid lines
      },
    },
  });

  return (
    <>
      <div className="w-full  min-h-[20px] flex flex-col justify-start items-start gap-3">
        <h2 className="font-normal text-2xl text-[#3E3E3E]">HR Employee</h2>
        <p className="text-lg text-[#3E3E3E] font-normal">
          Enjoy your selecting potential candidates Tracking and Management
          System.
        </p>
      </div>
      <div className="w-full  md:grid-cols-[800px,auto] grid-cols-1 grid gap-3">
        {/* Application Info Content starts from over here */}
        <div className="col-span-1 h-full bg-white shadow-md rounded-[10px] flex justify-start items-start gap-3 flex-col px-2 py-2">
          {/* Heading and DropDown Design start from over */}
          <div className="w-full flex justify-between items-center">
            {/* content 1 */}
            <div className="flex justify-start items-center gap-6">
              <h3 className="font-medium text-[16px] text-[#000000] ">
                Application’s Info
              </h3>
              <div className="flex justify-start items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#277ACC]"></div>
                <p className="font-normal text-sm text-[#000000]">Received</p>
              </div>

              <div className="flex justify-start items-center gap-2">
                <div className="w-5 h-5 rounded bg-[#002B55BD]"></div>
                <p className="font-normal text-sm text-[#000000]">Processed</p>
              </div>
            </div>
            {/* content 2 */}

            <img src={DropDown} alt="dropdown" />
          </div>

          {/* Heading and Dropdown Design end over here */}
          {/* underline */}
          <div className="w-full h-[1px] bg-[#D6D6D6]"></div>
          {/* Chart starts from over here */}
          <div id="chart">
            <ReactApexChart
              options={chartOptions.options}
              series={chartOptions.series}
              type="line"
              height={270}
              width={800}
            />
          </div>
          {/* Chart ends over here */}
        </div>
        {/* Application Info Content ends over here */}
        <div
          className="col-span-1 rounded-[10px] h-full px-2 py-2 flex justify-center items-center"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(10, 102, 194, 1), rgba(89, 148, 206, 1))",
          }}
        >
          {/* content 1 starts */}
          <div className="flex gap-0 justify-between items-start">
            {/* Content 1 */}

            <div className="flex justify-start items-start flex-col gap-5 ">
              <div className="w-[120px] h-[120px] rounded-[3px] bg-white flex justify-center items-center">
                <img src={Group_Icon} alt="#" />
              </div>
              <h2 className="font-semibold text-[56px] text-[#FFFFFF]">0033</h2>
              <p className="font-medium text-[22px]  text-[#FFFFFF]">
                New Assessment's
              </p>
            </div>
            {/* content 2 */}
            <img src={Person} alt="#" />
          </div>
          {/* content 1 ends */}
          {/* content 2 starts */}
          <div className="flex flex-col h-[280px] justify-end items-center gap-3 relative w-[220px]">
            {/* image */}

            <img src={Person2} alt="#" className="absolute bottom-[98px]" />

            {/* View Details button */}

            <button className="w-[145px] h-[45px] font-medium text-[14px] text-[#000000] bg-white flex justify-center items-center">
              VIEW DETAILS
            </button>
          </div>

          {/* content 2 ends */}
        </div>
      </div>
    </>
  );
};

export default Application_Assessment;
