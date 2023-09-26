import styles from "./stats.module.scss";
import { AiFillCode, AiFillSmile } from "react-icons/ai";
import { Reveal } from "@/components/utils/Reveal";

export const Stats = () => {
  return (
    <div className={styles.stats}>
      <Reveal>
        <div className={styles.statColumn}>
          <h4>
            <AiFillCode size="2.4rem" color="var(--brand)" />
            <span>My skills</span>
          </h4>
          <div className={styles.statGrid}>
            <span className="chip">React</span>
            <span className="chip">HTML</span>
            <span className="chip">CSS</span>
            <span className="chip">JavaScript</span>
            <span className="chip">TypeScript</span>
            <span className="chip">GIT</span>
            <span className="chip">NodeJS</span>
            <span className="chip">Prisma</span>
            <span className="chip">SQL</span>
            <span className="chip">Express</span>
            <span className="chip">GitHub</span>
            <span className="chip">Postgres</span>
            <span className="chip">Material UI</span>
            <span className="chip">Figma</span>
            <span className="chip">Jasmine</span>
            <span className="chip">Jest</span>
            <span className="chip">RESTful APIs</span>
            <span className="chip">Authentication</span>
            <span className="chip">CI/CD</span>
            <span className="chip">TDD</span>
          </div>
        </div>
      </Reveal>
     
    </div>
  );
};
