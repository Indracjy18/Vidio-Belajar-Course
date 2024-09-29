import { Link } from "react-router-dom";
import { useState } from "react";
import IconsLogo from "../Fragments/IconsLogo";
import HamburgerMenu from "../../../public/assets/img/icons/Hamburger Menu Icon.png";
import LogoutIcons from "../../../public/assets/img/icons/Logout-icon.png";
import IconsUser from "../../../public/assets/img/avatar/user-avatar.png";
import Button from "../Elements/Button/Index";

const HeaderLayouts = ({ position, type, color, page }) => {
  return (
    <nav
      className={`${position} w-screen md:h-20 h-[74px] bg-white flex justify-between items-center md:px-[120px] px-6 md:py-3 py-4 shadow-lg z-10`}
    >
      <Header />
      {type === "product" ? <Body page={page} color={color} /> : ""}
    </nav>
  );
};

const Header = () => {
  return (
    <IconsLogo classname="md:w-[237px] w-[152px] h-[42px] md:h-14 flex justify-center items-center md:px-6" />
  );
};

const Body = ({ page, color }) => {
  return (
    <>
      <ul className="md:flex hidden items-center gap-6">
        {page === "landingpage" ? (
          <ButtonRegister />
        ) : (
          <Profile color={color} />
        )}
      </ul>
      {page === "landingpage" ? <ButtonBar /> : <ProfileBar />}
    </>
  );
};

const Profile = ({ color }) => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <Link to="/kategori">
        <li className={`${color} font-bold font-dm-sans text-base`}>
          Kategori
        </li>
      </Link>
      <div
        onClick={handleClick}
        className="flex w-11 h-11 justify-center items-center"
      >
        {click ? (
          <img
            className="w-full h-full cursor-pointer"
            src={IconsUser}
            alt=""
          />
        ) : (
          <img
            className="w-full h-full cursor-pointer"
            src="/avatars/user-avatar.png"
            alt=""
          />
        )}
      </div>
      <div
        className={
          click ? "hidden" : "absolute top-[4.6rem] right-[7.5rem] z-10"
        }
      >
        <ul className="flex flex-col items-center bg-white w-[200px] border">
          <li className="w-full h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
            <Link to="/profile">Profile Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
            <Link to="/">Kelas Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
            <Link to="/keranjang">Pesanan Saya</Link>
          </li>
          <li className="w-full h-[54px] items-center py-4 px-3 text-main-tertiary font-medium font-dm-sans text-base border-b">
            <Link className="flex gap-[5px] w-6 h-6 items-center">
              Keluar
              <img className="w-5 h-[18px]" src={LogoutIcons} alt="" />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

const ProfileBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <img className="w-5 h-3" src={HamburgerMenu} alt="" />
        ) : (
          <img className="w-5 h-3" src={HamburgerMenu} alt="" />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-[4.6rem] left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link to="/kategori">
            <li className="w-screen h-[54px] md:hidden flex items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
              Kategory
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
              Profile Saya
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
              Kelas Saya
            </li>
          </Link>
          <Link to="/keranjang">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-black hover:text-white font-medium font-dm-sans text-base border-b">
              Pesanan Saya
            </li>
          </Link>
          <Link to="/profile">
            <li className="w-screen h-[54px] flex gap-[5px] items-center py-4 px-3 text-main-tertiary font-medium font-dm-sans text-base border-b">
              Keluar
              <img src="/icons/Logout icon.png" alt="" />
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

const ButtonRegister = () => {
  return (
    <>
      <Link to="/kategori">
        <li className="text-white font-bold font-dm-sans text-base">
          Kategori
        </li>
      </Link>
      <li className="flex gap-4">
        <Button
          onClick={() => {
            window.location.href = "/login";
          }}
          classname="w-32 h-11 text-center font-bold text-base font-dm-sans bg-primary-500 text-white rounded-[10px]"
        >
          Login
        </Button>
        <Button
          onClick={() => {
            window.location.href = "/register";
          }}
          classname="w-32 h-11 text-center font-bold text-base font-dm-sans bg-white text-white rounded-[10px] border border-primary"
        >
          Register
        </Button>
      </li>
    </>
  );
};

const ButtonBar = () => {
  const [click, setClick] = useState(true);
  const handleClick = () => setClick(!click);

  return (
    <>
      <div
        onClick={handleClick}
        className="flex md:hidden w-8 h-8 justify-center items-center"
      >
        {click ? (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        ) : (
          <img
            className="w-5 h-3"
            src="/icons/Hamburger Menu Icon.png"
            alt=""
          />
        )}
      </div>
      <div className={click ? "hidden" : "absolute top-[4.6rem] left-0 z-10"}>
        <ul className="md:hidden flex flex-col items-center md:gap-6 bg-white w-screen border">
          <Link to="/beranda">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-white font-medium font-dm-sans text-base border">
              Beranda
            </li>
          </Link>
          <Link to="/kategori">
            <li className="w-screen h-[54px] items-center py-4 px-3 text-black font-medium font-dm-sans text-base border-b">
              Kategori
            </li>
          </Link>
          <li className="w-screen h-[116px] flex flex-col justify-center gap-2 px-3 border-b p-1">
            <Button
              onClick={() => {
                window.location.href = "/login";
              }}
              classname="w-full h-11 text-center font-bold text-base font-dm-sans bg-primary-500 text-white rounded-[10px]"
            >
              Login
            </Button>
            <Button
              onClick={() => {
                window.location.href = "/register";
              }}
              classname="w-full h-11 text-center font-bold text-base font-dm-sans bg-white text-white rounded-[10px] border border-primary"
            >
              Register
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default HeaderLayouts;
