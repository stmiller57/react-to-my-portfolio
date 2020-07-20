import React from 'react';
import BioBox from '../components/BioBox';
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projects from "../components/projects.json";
import CodingTitle from "../components/CodingTitle";

function Portfolio() {
    return (
        <div>
            <BioBox />
            <CodingTitle />
            <Wrapper>
                <ProjectCard
                    image={projects[0].image}
                    title={projects[0].title}
                    body={projects[0].body}
                    technology={projects[0].technology}
                    link={projects[0].link}
                    github={projects[0].github}
                />
                <ProjectCard
                    image={projects[1].image}
                    title={projects[1].title}
                    body={projects[1].body}
                    technology={projects[1].technology}
                    link={projects[1].link}
                    github={projects[1].github}
                />
            </Wrapper>
            <Wrapper>
                <ProjectCard
                    image={projects[2].image}
                    title={projects[2].title}
                    body={projects[2].body}
                    technology={projects[2].technology}
                    link={projects[2].link}
                    github={projects[2].github}
                />
                <ProjectCard
                    image={projects[3].image}
                    title={projects[3].title}
                    body={projects[3].body}
                    technology={projects[3].technology}
                    link={projects[3].link}
                    github={projects[3].github}
                />
            </Wrapper>
            <Wrapper>
                <ProjectCard
                    image={projects[4].image}
                    title={projects[4].title}
                    body={projects[4].body}
                    technology={projects[4].technology}
                    link={projects[4].link}
                    github={projects[4].github}
                />
                <ProjectCard
                    image={projects[5].image}
                    title={projects[5].title}
                    body={projects[5].body}
                    technology={projects[5].technology}
                    link={projects[5].link}
                    github={projects[5].github}
                />
            </Wrapper>
        </div >
    );
}

export default Portfolio;
