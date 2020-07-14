import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import BioBox from './components/BioBox';
import ProjectCard from "./components/ProjectCard";
import Wrapper from "./components/Wrapper";
import projects from "./components/projects.json";

function App() {
  return (
    <div className="App">
      <Header />
      <BioBox />
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
      <Footer />

    </div>
  );
}

export default App;
