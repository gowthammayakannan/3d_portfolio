import { experiences, skills } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
const About = () => {
  return (
    <div>
      <section className="max-container">
        <h1 className="head-text">
          Hello, I m{" "}
          <span className="blue-gradient_text font-semibold drop-shadow ">
            {" "}
            Gowtham
          </span>{" "}
          👋
        </h1>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            Software Engineer based in Coimbatore ,Specializing in technical
            education through hands-on learning and building web applications
          </p>
        </div>
        <div className=" py-10 flex flex-col ">
          <h3 className="subhead-text">My Skills</h3>
          <div className=" mt-16 flex flex-wrap gap-12">
            {skills.map((skill, index) => {
              return (
                <div className="block-container w-20 h-20" key={index}>
                  <div className=" btn-back rounded-xl">
                    <div className="btn-front rounded-xl flex justify-center items-center">
                      <img
                        src={skill.imageUrl}
                        alt={skill.name}
                        className=" w-1/2 h-1/2 object-contain"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-16">
          <h3 className=" subhead-text">Work Experiance</h3>
          <div className=" mt-5 flex flex-col gap-3 text-slate-500 ">
            <p>
              I{"'"}ve worked with all sorts of projects up my skills and
              teaming up with smart people.Here{"'"}s the rundown :
            </p>
          </div>
          <div className=" mt-12 flex">
            <VerticalTimeline>
              {experiences.map((experience, index) => {
                return (
                  <VerticalTimelineElement
                    key={index}
                    date={experience.date}
                    iconStyle={{ background: experience.iconBg }}
                    icon={
                      <div className=" flex items-center justify-center w-full h-full">
                        <img
                          src={experience.icon}
                          alt={experience.companyName}
                          className="w-[60%] h-[60%] object-contain"
                        />
                      </div>
                    }
                    contentStyle={{
                      borderBottom: "8px",
                      borderStyle: "solid",
                      borderBottomColor: experience.iconBg,
                      boxShadow: "none",
                    }}
                  >
                    <div>
                      <h3 className=" text-black text-xl font-poppins font-semibold">
                        {experience.title}
                      </h3>
                      <p
                        className=" text-black-500 font-medium text-base"
                        style={{ margin: 0 }}
                      >
                        {experience.companyName}
                      </p>
                    </div>
                    <ul className=" my-5 list-disc ml-5 space-y-2">
                      {experience.points.map((point, index) => {
                        return (
                          <li
                            className=" text-black font-normal pl-1 text-sm"
                            key={index}
                          >
                            {point}
                          </li>
                        );
                      })}
                    </ul>
                  </VerticalTimelineElement>
                );
              })}
            </VerticalTimeline>
          </div>
        </div>
        <hr className="border-slate-200" />
        <CTA />
      </section>
      <Footer />
    </div>
  );
};

export default About;
