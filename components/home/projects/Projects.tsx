import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
    title: "Carls",
    imgSrc: "https://github.com/carolarruda/carls/raw/main/src/blob/landingPageHero.png?raw=true",
    code: "https://github.com/carolarruda/carls",
    projectLink: "",
    tech: ["React", "MUI", "JS", "Express"],
    description:
      "A recipe social network that allows users to register, authenticate and share their recipes",
    modalContent: (
      <>
        <p>
        Carls provides users with an intuitive interface to explore, create, update and delete personal recipes as well as share them in the platform.
        </p>
        <p>
          The tech stack includes React and for the backend
          Node.js and Express, with data stored in Postgres,SQL.
        </p>
       
      </>
    ),
  },
  {
    title: "Movie Database",
    imgSrc: "https://github.com/carolarruda/movieDb/blob/main/src/gifs/addMovie.gif?raw=true",
    code: "https://github.com/carolarruda/movieDb",
    projectLink: "",
    tech: ["Node", "Express", "Postgres", "Authentication"],
    description:
      "A simple Movie Database project to keep track of all my comfort movies! This application allows users to authenticate and manage their movie collections",
    modalContent: (
      <>
        <p>
          The Movie Database is a pet project to keep track of all the movies I want to watch.
        </p>
        <p>
          I&apos;m currently working on adding new features to filter by genre and score and connecting the app to TMDb API - the movie database
        </p>
      </>
    ),
  },
 
];
