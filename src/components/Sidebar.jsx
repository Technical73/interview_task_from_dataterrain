import Image1 from "../assets/Sidebar_Icons/Group 1321316581.svg";
import Image2 from "../assets/Sidebar_Icons/Group 1321316582.svg";
import Image3 from "../assets/Sidebar_Icons/Group 1321316583.svg";
import Image4 from "../assets/Sidebar_Icons/Group 1321316584.svg";
import Image5 from "../assets/Sidebar_Icons/Group 1321316585.svg";
import Image6 from "../assets/Sidebar_Icons/Group 1321316586.svg";
import Image7 from "../assets/Sidebar_Icons/Group 1321316587.svg";
import Image8 from "../assets/Sidebar_Icons/Group 1321316588.svg";
import Image9 from "../assets/Sidebar_Icons/Group 1321316589.svg";

const Sidebar = () => {
  return (
    <>
      {/* Main Container starts from over here */}
      <section className=" col-start-1 col-end-2  min-h-[610px]  rounded-tr-[30px] shadow-md bg-white flex flex-col justify-start items-center px-2 py-6">
        {/* Icons Starts from over here */}
        <div className="min-h-[400px]  flex flex-col justify-start items-center gap-9">
          <img src={Image1} alt="image1" className="w-6 h-6" />
          <img src={Image2} alt="image2" className="w-6 h-6" />
          <img src={Image3} alt="image3" className="w-6 h-6" />
          <img src={Image4} alt="image4" className="w-6 h-6" />
          <img src={Image5} alt="image5" className="w-6 h-6" />
          <img src={Image6} alt="image6" className="w-6 h-6" />
          <img src={Image7} alt="image7" className="w-6 h-6" />
          <img src={Image8} alt="image8" className="w-6 h-6" />
          <img src={Image9} alt="image9" className="w-6 h-6" />
        </div>

        {/* Icons ends over here */}
      </section>
      {/* Main Container ends over here */}
    </>
  );
};

export default Sidebar;
