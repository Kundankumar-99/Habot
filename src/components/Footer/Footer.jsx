import React from "react";
import footerlogo from "../../assets/images/whiteLogo.png";
import FacebookIcon from "../../assets/svgIcon/FacebookIcon";
import InstagramIcon from "../../assets/svgIcon/InstagramIcon";
import TwitterIcon from "../../assets/svgIcon/TwitterIcon";
import LinkedInIcon from "../../assets/svgIcon/LinkedInIcon";
import { Link } from "react-router-dom";

export default function Footer() {
  const footerSections = [
    { title: "Company", links: ["About", "FAQ"] },
    { title: "Terms", links: ["Data privacy", "Terms", "Accessibility"] },
    { title: "Related", links: ["Find Buyer", "Feedback"] },
  ];

  return (
    <footer className=" flex bg-[#123557] py-16 wrap">
      <div
        style={{ borderColor: "rgba(255, 255, 255, 0.2)" }}
        className="container w-5/6 mx-auto flex md:flex-row flex-col
        justify-between gap-16 items-center border-t-[1px] border-b-[1px] border-white-20 py-8 px-2"
      >
        <div className="flex md:flex-row flex-col gap-12 items-center">
          {/* Logo */}
          <div className=" text-white flex flex-col gap-4">
            <Link to="/">
              <img src={footerlogo} alt="Logo" />
            </Link>
            <p className="font-regular">© R Singhania </p>
          </div>
          {/* Important Link */}
          <div className="flex  gap-24 text-white font-regular">
            <ul className="flex flex-col gap-2">
              <li className="font-bold">Company</li>
              <li>About</li>
              <li>FAQ</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-bold">Terms</li>
              <li>Data privacy</li>
              <li>Terms</li>
              <li>Accessibility</li>
            </ul>
            <ul className="flex flex-col gap-2">
              <li className="font-bold">Related</li>
              <li>Find Buyer</li>
              <li>Feedback</li>
            </ul>
          </div>
        </div>

        {/* Social Icons */}

        <div className="icon flex gap-4">
          <Link to="https://www.linkedin.com">
            <LinkedInIcon />
          </Link>
          <Link to="https://x.com/home">
            <TwitterIcon />
          </Link>

          <Link to="https://www.facebook.com/">
            <FacebookIcon />
          </Link>

          <Link to="https://www.instagram.com">
            <InstagramIcon />
          </Link>
        </div>
      </div>
    </footer>
  );
}
