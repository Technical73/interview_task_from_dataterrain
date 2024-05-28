import Logo from "../assets/Navbar_Icons/logo-1 1.svg";
import Image1 from "../assets/Navbar_Icons/day-mode 1.svg";
import Image2 from "../assets/Navbar_Icons/surface1.svg";
import Image3 from "../assets/Navbar_Icons/Component 1.svg";
import Image4 from "../assets/Navbar_Icons/notification 1.svg";
import Image5 from "../assets/Navbar_Icons/Component 2.svg";
import Image6 from "../assets/Navbar_Icons/Group 1321315952.svg";
import Search from "../assets/Navbar_Icons/search-interface-symbol 1.svg";
const Header = () => {
  return (
    <>
      {/*Main container starts from over here */}
      <section className="w-full h-[90px] bg-white shadow-md  flex justify-between items-center px-1 py-1">
        {/* content 1 such as logo and search input start from over here */}
        <div className="w-[550px] flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo} alt="logo" className="h-[50px]" />
          </div>
          {/* search input */}
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
        </div>

        {/* content 1 such as logo and search input end over here */}

        {/* content 2 such as icons and profile start over here */}
        <div className="w-[500px] flex justify-between items-center">
          <img src={Image1} alt="#" className="w-6 h-6" />
          <img src={Image2} alt="#" className="w-6 h-6" />
          <img src={Image3} alt="#" className="w-6 h-6" />
          <img src={Image4} alt="#" className="w-6 h-6" />
          <img src={Image5} alt="#" className="w-6 h-6" />
          <img src={Image6} alt="#" className="w-6 h-6" />
        </div>

        {/* content 2 such as icons and profile end over here */}
      </section>
      {/*Main container ends over here */}
    </>
  );
};

export default Header;
