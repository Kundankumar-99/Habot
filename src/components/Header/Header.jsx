import React, { useState } from "react";
import logo from "../../assets/images/logo.png";
import Button from "../Button";
import NavModal from "./NavModal";
import ArrowDownIcon from "../../assets/svgIcon/ArrowDownIcon";
import HamBurgerOpenIcon from "../../assets/svgIcon/HamBurgerOpenIcon";
import { Link, useNavigate } from "react-router-dom";
import Container from "../Container/Container";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (path) => {
    navigate(path);
    toggleMenu();
  };

  return (
    <>
      <header className="bg-white py-4">
        <Container>
          <div className=" flex justify-between items-center">
            <Link to="/">
              <img src={logo} alt="Logo" className="h-10 sm:h-12" />
            </Link>
            <nav
              className="hidden md:flex items-center gap-8"
              id="navbar-hamburger"
            >
              <ul className="flex gap-8 text-[#6D6E71]">
                <Link to="/findSupplier">
                  {" "}
                  <li>Find Suppliers</li>{" "}
                </Link>
                <Link to={"/findServiceTags"}>
                  <li className="flex items-center gap-2">
                    Find Service Tags <ArrowDownIcon />
                  </li>
                </Link>
              </ul>
              <Button className="border-[1px] border-[#00732F] text-[#00732F]">Login / Sign Up</Button> 
            </nav>

            {/* Mobile Menu Button for small screens */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                type="button"
                className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                aria-controls="navbar-hamburger"
                aria-expanded={isMenuOpen}
              >
                <HamBurgerOpenIcon />
              </button>
            </div>
          </div>
        </Container>

        {/* Modal for Mobile Menu */}
        <Container>
          <NavModal
            isOpen={isMenuOpen}
            onClose={toggleMenu}
            handleLinkClick={handleLinkClick}
          >
            <Link to="/" onClick={toggleMenu}>
              <img src={logo} alt="Logo" className="h-10 sm:h-12 mb-8 -ml-2" />
            </Link>
            <nav className="flex flex-col  gap-8">
              <ul className="flex flex-col gap-4 text-[#6D6E71]">
                <li
                  onClick={() => handleLinkClick("/findSupplier")}
                  className="cursor-pointer"
                >
                  Find Suppliers
                </li>{" "}
                <li
                  onClick={() => handleLinkClick("/findSupplier")}
                  className="flex items-center gap-2 cursor-pointer"
                >
                  Find Service Tags <ArrowDownIcon />
                </li>
              </ul>
              <Button className="border-[1px] border-[#00732F] text-[#00732F]">Login / Sign Up</Button>
            </nav>
          </NavModal>
        </Container>
      </header>
    </>
  );
}
