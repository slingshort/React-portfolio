import React from "react";
import ProjectCard from "../components/ProjectItem";

const projects = [
  {
    title: "Bootcamp Bar",
    image: 'bootcamp-bar.jpg',
    description: "Group MERN stack project",
    live: "https://bootcamp-bar.herokuapp.com/",
    repo: "https://github.com/slingshort/Bootcamp_bar_V2.0",
  },
  {
    title: "Holiday Calendar Discoverer",
    image: 'holiday-discoverer.jpg',
    description: "First group full-stack project",
    live: "https://kangazero.github.io/holiday-calendar-discoverer/",
    repo: "https://github.com/slingshort/holiday-calendar-discoverer",
  },
  {
    title: "Legacy Portfolio",
    description: "My very first project!",
    live: "https://slingshort.github.io/Portfolio/",
    repo: "https://github.com/slingshort/holiday-calendar-discoverer",
  },
  {
    title: "Work Day Scheduler",
    description: "Work day scheduler using local storage to store persisting data",
    live: "https://slingshort.github.io/js_workday_scheduler/",
    repo: "https://github.com/slingshort/js_workday_scheduler",
  },
  {
    title: "Weather Dasboard",
    description: "Weather Dashboard",
    live: "https://slingshort.github.io/weather-dash/",
    repo: "https://github.com/slingshort/weather-dash",
  },


]

const Project = () => {
    return (
      <div>
        <h4 className="px-2">
          Here are a few recent projects I've worked on...
        </h4>
        <div className="flex-wrap">
          {projects.map((project) => (
          <ProjectCard
            key={project.title}
            title={project.title}
            image={project.image}
            description={project.description}
            live={project.live}
            repo={project.repo}
          />
        ))}
      </div>
      </div>
    );
  };
    
  export default Project;