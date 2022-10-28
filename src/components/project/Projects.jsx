import React from "react";
import Card from "./Card";
import "./Projects.css";
import UsedTech from "./UsedTech";
import { v4 as uuidv4 } from 'uuid';

const Projects = ({projectRef}) => {
  const projects = [
    {
      projectName:"Deccan Herald",
      imgUrl:
        "data:image/png;base64,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",
      codeUrl: "https://github.com/kshivang80/fluent-canvas-584",
      websiteUrl: "https://glistening-profiterole-4e0dab.netlify.app",
      aboute: "Deccan Herald is an Indian English language daily newspaper published from the Indian state of Karnataka. It was founded by K. N. Guruswamy, a liquor businessman from Ballari and was launched on 17 June 1948",
      tech: ["React","Javascript", "HTML ", "CSS ","Chakra-Ui"],
    },
    {
      projectName:"Semrush",
      imgUrl:
        "https://static.semrush.com/wt-static/semrush-com.png",
      codeUrl: "https://github.com/kshivang80/fanatical-building-1351",
      websiteUrl: "https://coruscating-gingersnap-6ba7d6.netlify.app",
      aboute: "Semrush Inc is an American public company that offers a SaaS platform known as Semrush. The platform is often used for keyword research and online ranking data, including metrics such as search volume and cost per click",
      tech: ["React","Javascript", "HTML ", "CSS ","Chakra-Ui"],
    },
    {
      projectName:"Youtube app",
      imgUrl:
        "https://wallpaper.dog/large/977168.jpg",
      codeUrl: "https://github.com/masai-course/SHIVANG_fp03_190/tree/master/unit-3/sprint-3/day-1/assignments",
      websiteUrl: "https://shiny-pegasus-a8ef30.netlify.app/",
      aboute: "YouTube is an American online video sharing and social media platform headquartered in San Bruno, California. It was launched on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim. It is owned by Google, and is the second most visited website, after Google Search",
      tech: ["Javascript", "HTML ", "CSS " ,"Youtube-api"],
    },
    {
      projectName:"AirGarage",
      imgUrl:
        "https://thebrandhopper.com/wp-content/uploads/2021/04/maxresdefault.jpg",
      codeUrl: "https://github.com/Amanyadav2030/Airgarage-Clone",
      websiteUrl: "https://dazzling-meerkat-951529.netlify.app/",
      aboute: "sAirGarage is a full service parking operator. We handle all of the day-to-day logistics that go into making your parking lot or garage the most successful version of itself.",
      tech: ["Javascript", "HTML ", "CSS " ],
    },
  ];

  return (
    <div className="container" >
      <div className="project">
        <h1 ref={projectRef} className="d-flex justify-content-center">Projects</h1>
      </div>
      <div className="my-3">
        <div className="my-0 d-flex justify-content-center flex-wrap">
          {projects.map((item) => {
            let stack = item.tech;

            return (
              <Card 
                key={uuidv4()}
                projectName={item.projectName}
                imageUrl={item.imgUrl}
                codeUrl={item.codeUrl}
                websiteUrl={item.websiteUrl}
                about={item.aboute}
                usedTech={stack.map((tech) => {
                  return <UsedTech key={uuidv4()} techStack={tech} />;
                })}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Projects;
