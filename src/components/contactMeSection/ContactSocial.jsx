import SingleContactSocial from "./SingleContactSocial";
import { FaLinkedinIn } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaHackerrank } from "react-icons/fa";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleContactSocial link="https://www.linkedin.com/in/vivek-kumar-mca/" Icon={FaLinkedinIn} />
      <SingleContactSocial link="https://github.com/vivek-22bmsit" Icon={FiGithub} />
      <SingleContactSocial link="https://www.hackerrank.com/profile/vivekkr6280" Icon={FaHackerrank} />
    </div>
  );
};

export default ContactSocial;
