import SingleExperience from "./SingleExperience";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "Web Developer internship",
    company: "Exposys Data Labs",
    date: "Oct-2023 - Nov-2023",
    responsibilities: [
      "Designed a Mass-Mail Dispatcher web app using HTML, CSS, JavaScript, enabling bulk email dispatch.",
      "Implemented email validation from CSV files, categorizing 1000+ email addresses into valid and invalid lists.",
    ],
  },
  {
    job: "Prompt Engineer - Freelance",
    company: "Outlier.ai",
    date: "Jun 2024 – Apr 2025",
    responsibilities: [
      "Created and optimized prompts to improve AI responses, focusing on accuracy, clarity.",
      "Collaborated with team to evaluate outputs, identify edge cases, and implement iterative prompt refinements.",
    ],
  },
  {
    job: "Web Developer Intern",
    company: "Zidio Development",
    date: "May-2025 - Present",
    responsibilities: [
      "Currently interning at Zidio Development as a Web Developer Intern, working on a real-world MERN stack project using React.js, Node.js, Express.js and MongoDB.",
    ],
  },
];

const AllExperiences = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 2 ? (
              <motion.div
                variants={fadeIn("right", 0)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.7 }}
              >
                <FaArrowRightLong className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperiences;
