
import Image from "next/image";
import iWeatherLogo from "../../assets/iWeatherLogo.png";

const Header = () => {
  return (
    <div className="w-full flex justify-center absolute top-12 z-20  ">
      <a href="/" >
        <Image src={iWeatherLogo} alt="logo" width={186}/>
      </a>
    </div>
  );
};

export default Header;
