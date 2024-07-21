import Contact from "./Contact";
import ProjectCard from './ProjectCard';
import projectsData from './data/projectData';

const Projects = () => {
    return (
        <div className="projects-wrapper">
            <div className="projects-container">
                <div className="projects-header-container">
                    <h1><text>A</text> glimpse at my <p>w</p>ork</h1>
                </div>
                <div className="projects-grid-container">
                    {projectsData.map(project => (
                        <ProjectCard
                            key={project.id}
                            id={project.id}
                            description={project.description}
                            title={project.title}
                            stackIcons={project.stackIcons}
                            thumbnailSrc={project.thumbnailSrc}
                            viewLink={project.viewLink}
                            sourceLink={project.sourceLink}
                        />
                    ))}

                </div>
            </div>

            <Contact />
        </div>
    )
}
export default Projects;