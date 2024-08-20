import Link from "next/link";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const socials = () => [
  { icon: <FaGithub />, path: "https://github.com/ShashankJc1/" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/shashank-jc/" },
  { icon: <FaTwitter />, path: "https://x.com/shashank_jc" },
];

const Social = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials().map((item, index) => (
        <Link key={index} href={item.path} className={iconStyles} target="_blank" rel="noopener noreferrer">
          {item.icon}
        </Link>
      ))}
    </div>
  );
};

export default Social;
