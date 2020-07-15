import React from 'react';
import ProjectCard from "../components/ProjectCard";
import Wrapper from "../components/Wrapper";
import projects from "../components/projects.json";

function Writing() {
    return (
        <div>
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
            </Wrapper>
        </div>
    );
}

export default Writing;
