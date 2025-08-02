import { Link } from "react-scroll";

const AboutMeText = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p>
        I'm a passionate and detail-oriented Junior Full Stack Developer with hands-on experience in building responsive and dynamic web applications using modern technologies. I specialize in crafting user-friendly frontends with HTML, CSS, React.js, and Bootstrap, and developing robust backend solutions using Node.js, Express.js, and MongoDB.

        During my internship at Zidio Development, I worked on real-world MERN stack projects that enhanced my skills in full-stack development and problem-solving.

        I enjoy transforming ideas into interactive digital solutions and continuously expanding my knowledge in web development. I’m actively seeking full-time opportunities where I can contribute, grow, and build impactful products as part of a collaborative team.

      </p>
      <button className="border border-orange rounded-full py-2 px-4 text-lg flex gap-2 items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center">
        <Link
          spy={true}
          smooth={true}
          duration={500}
          offset={-120}
          to="projects"
          className="cursor-pointer text-white hover:text-cyan transition-all duration-500"
        >
          My Projects
        </Link>
      </button>
    </div>
  );
};

export default AboutMeText;
