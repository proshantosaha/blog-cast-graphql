import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

const Socials = () => {
  return (
    <>
      <a href="https://twitter.com" target="_blank">
        <FaXTwitter />
      </a>
      <a href="https://github.com" target="_blank">
        {" "}
        <FaGithub />
      </a>
    </>
  );
};

export default Socials;
