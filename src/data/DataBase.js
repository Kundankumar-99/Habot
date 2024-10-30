
import ConnectIcon from "../assets/svgIcon/ConnectIcon";
import PostIcon from "../assets/svgIcon/PostIcon";
import ProfileIcon from "../assets/svgIcon/ProfileIcon";
import ReviewIcon from "../assets/svgIcon/ReviewIcon";
import ShareIcon from "../assets/svgIcon/ShareIcon";
import SignUpIcon from "../assets/svgIcon/SignUpIcon";

export const buttonData = [
  "Abu Dhabi",
  "Dubai",
  "Sharjah & Ajman",
  "Fujairah",
  "Ras Al Khaimah",
  "Umm Al Quwain",
];

export const IconData = [
  {
    IconText: "Select Your Role and Sign Up",
    IconComponent: SignUpIcon,
    backgroundColor: "bg-[#E8FBFF]",
  },
  {
    IconText: "Buyers Post Your Requirements",
    IconComponent: PostIcon,
  },
  {
    IconText: "Review, Select, and Contact the Best Suppliers",
    IconComponent: ReviewIcon,
    backgroundColor: "bg-[#E8FBFF]",
  },
  {
    IconText:
      "Suppliers Complete your profile and get notified for opportunities",
    IconComponent: ProfileIcon,
  },
  {
    IconText: "Contact to Buyers and Share your Quote for the service",
    IconComponent: ShareIcon,
    backgroundColor: "bg-[#E8FBFF]",
  },
  {
    IconText:
      "Both the Parties can Connect and Make Business Leave a Feedback",
    IconComponent: ConnectIcon,
  },
];
