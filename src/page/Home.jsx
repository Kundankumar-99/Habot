import React from "react";
import { Link } from "react-router-dom";
import LocationIcon from "../assets/svgIcon/LocationIcon";
import ServiceIcon from "../assets/svgIcon/ServiceIcon";
import bg from "../assets/images/backGround.png";
import Button from "../components/Button";
import InputField from "../components/InputField";
import ArrowRightIcon from "../assets/svgIcon/ArrowRightIcon";
import Container from "../components/Container/Container";
import Tabs from "../components/Tab";
import Video from "../components/Video";
import SignUpIcon from "../assets/svgIcon/SignUpIcon";
import ConnectIcon from "../assets/svgIcon/ConnectIcon";
import PostIcon from "../assets/svgIcon/PostIcon";
import ReviewIcon from "../assets/svgIcon/ReviewIcon";
import ProfileIcon from "../assets/svgIcon/ProfileIcon";
import ShareIcon from "../assets/svgIcon/ShareIcon";
import IconBox from "../components/IconBox";

export default function Home() {
  const buttonData = [
    "Abu Dhabi",
    "Dubai",
    "Sharjah & Ajman",
    "Fujairah",
    "Ras Al Khaimah",
    "Umm Al Quwain",
  ];

  const IconData = [
    {
      IconText: "Select Your Role and Sign Up",
      IconComponent: <SignUpIcon />,
      backgroundColor: "bg-[#E8FBFF]",
    },
    {
      IconText: "Buyers Post Your Requirements",
      IconComponent: <PostIcon />,
    },
    {
      IconText: "Review, Select, and Contact the Best Suppliers",
      IconComponent: <ReviewIcon />,
      backgroundColor: "bg-[#E8FBFF]",
    },
    {
      IconText:
        "Suppliers Complete your profile and get notified for opportunities",
      IconComponent: <ProfileIcon />,
    },
    {
      IconText: "Contact to Buyers and Share your Quote for the service",
      IconComponent: <ShareIcon />,
      backgroundColor: "bg-[#E8FBFF]",
    },
    {
      IconText:
        "Both the Parties can Connect and Make Business Leave a Feedback",
      IconComponent: <ConnectIcon />,
    },
  ];
  return (
    <>
      {/* Hero Section */}
      <section className="HeroSection">
        <div className="min-h-[76vh] relative">
          <img
            src={bg}
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover z-10"
          />

          <div className="relative flex flex-col justify-center items-center py-24 sm:py-32 text-white z-20 container mx-auto w-5/6">
            <p className="text-3xl sm:text-5xl text-center leading-snug font-bold">
              Are You a Supplier ?
              <br />
              <span className="font-normal ">
                Explore Matching Opportunities.
              </span>
            </p>

            <div className="flex flex-col md:flex-row gap-2 mt-8 justify-center items-center ">
              <InputField
                placeholder="Search your required service here"
                icon={ServiceIcon}
              />
              <InputField
                placeholder="Search your desired location here"
                icon={LocationIcon}
              />
              <Button className="border-2  py-4 border-[#00732F] bg-[#00732F]">
                Search
              </Button>
            </div>

            <p className="mt-8 text-base sm:text-lg text-center">
              <span className="font-bold block sm:inline">
                Are you a buyer?{" "}
              </span>
              <span className="block sm:inline">
                <Link to="*" className="underline">
                  Click here if you are looking to post a requirement
                </Link>
              </span>
            </p>
          </div>
        </div>
      </section>
      {/* Country Section */}
      <section>
        <Container>
          <div className=" flex flex-col md:flex-row  mx-auto gap-16 md:gap-0 py-28">
            <div className=" w-full flex flex-col md:w-3/5 gap-8 md:gap-8 sm:gap-12">
              <h1 className="text-[35px] text-black font-bold ">
                Ready to dive into{" "}
                <span className="text-[#271555]">HABOT?</span>
              </h1>
              <p className="w-full sm:w-4/5">
                Signing up with HABOT opens the door to a world of new
                opportunities and potential for business growth. Gain access to
                a vibrant community of like-minded individuals, unlock valuable
                resources, and take the first step towards realizing your
                entrepreneurial dreams.
              </p>
              <Button className=" w-1/2 py-4 font-bold border-[#00732F] bg-[#00732F] text-white flex items-center justify-center gap-2">
                <span>Sign up Today!</span>
                <ArrowRightIcon />
              </Button>
            </div>

            <div className="md:w-2/5 grid grid-cols-2 gap-4">
              {buttonData.map((label) => (
                <Button
                  key={label}
                  className="px-8 py-4 w-full  border-[1px] border-[#E7760D] text-[#3E3E3E] rounded-md font-normal text-[15px] flex items-center justify-center gap-2 hover:bg-[#E7760D] hover:text-white transition-colors duration-200"
                >
                  <span>{label}</span>
                  <ArrowRightIcon />
                </Button>
              ))}
            </div>
          </div>
        </Container>
      </section>
      {/* Video Section */}
      <section>
        <Container>
          <div className="container flex flex-col md:flex-row items-start gap-4 py-28 justify-center  mx-auto h-[700px] md:h-[550px] rounded-md bg-[#072F57]">
            <div className=" w-full md:w-1/2 flex items-center justify-center  px-4 sm:ml-4 ml-0">
              <Video videoId="IZLp-TZyDkQ" />
            </div>

            <div className="right w-full md:w-1/2 flex  text-white items-center  justify-center ">
              <Tabs />
            </div>
          </div>
        </Container>
      </section>

      {/* Banner  */}
      <section className="w-full my-32 bg-[#E8FBFF]">
        <Container>
          <div className="flex py-24 sm:flex-row gap-4 sm:gap-0 flex-col justify-center sm:justify-between sm:text-left text-center items-center">
            <h2 className="font-semibold text-[37px]">
              Let Suppliers{" "}
              <span className="border-b-4 border-[#EB7150]">Find You</span>
            </h2>
            <button className="px-16 py-4 bg-[#EB7150] max-md:w-1/2 text-white rounded-md font-bold text-[18px] mt-8 sm:mt-0">
              Get Verified
            </button>
          </div>
        </Container>
      </section>

      {/* Working Process Section */}

      <section className="pb-8 sm:pb-28">
        <Container>
          <div className="flex flex-col  ">
            <div>
              <h2 className="font-bold text-[37px] text-center">
                How it works?
              </h2>
              <p className="text-center w-full sm:w-2/3 mx-auto">
                Buyers post their needs and review top suppliers, while
                suppliers complete profiles, connect with potential buyers, and
                build successful business relationships, sharing valuable
                feedback.
              </p>
            </div>

            <div className="grid md:grid-cols-3 grid-cols-1 mx-auto py-12 sm:mx-0 sm:grid-cols-2 my-8 gap-4">
              {IconData.map((item, index) => (
                <IconBox
                  key={index}
                  IconText={item.IconText}
                  backgroundColor={item.backgroundColor || "bg-transparent"} 
                >
                  {item.IconComponent}
                </IconBox>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
