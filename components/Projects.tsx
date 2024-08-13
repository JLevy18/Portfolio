import { useState } from "react";
import Contact from "./Contact";
import ProjectCard from './ProjectCard';
import projectsData from './data/projectData';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Projects = () => {
    const [focusedIndex, setFocusedIndex] = useState(0);
    const [selectedVersion, setSelectedVersion] = useState('1');

    const handleNext = () => {
        setFocusedIndex((prevIndex) => (prevIndex + 1) % projectsData.length);
    };

    const handlePrev = () => {
        setFocusedIndex((prevIndex) => (prevIndex - 1 + projectsData.length) % projectsData.length);
    };

    const handleVersionChange = (version: number) => {
        setSelectedVersion(version.toString());
    };

    const getVersionData = (index: number) => {
        const project = projectsData[index];
        return project.versions.find(v => v.version === selectedVersion) || project.versions[0]; // Fallback to first version if not found
    };

    return (
        <div className="projects-wrapper">
            <div className="projects-container">
                <div className="projects-header-container">
                    <h1><span>A</span> glimpse at my <p>w</p>ork</h1>
                </div>
                <div className="projects-carousel-container">
                    {projectsData.map((_, index) => {
                        const isFocused = index === focusedIndex;
                        const isPrev = index === (focusedIndex - 1 + projectsData.length) % projectsData.length;
                        const isNext = index === (focusedIndex + 1) % projectsData.length;

                        return (
                            <ProjectCard
                                key={projectsData[index].id}
                                id={projectsData[index].id}
                                description={projectsData[index].description}
                                title={projectsData[index].title}
                                stackIcons={getVersionData(index).stackIcons}
                                thumbnailSrc={getVersionData(index).thumbnailSrc}
                                viewLink={getVersionData(index).viewLink}
                                sourceLink={getVersionData(index).sourceLink}
                                versions={projectsData[index].versions.map(v => parseInt(v.version))}
                                onVersionChange={handleVersionChange}
                                style={{
                                    zIndex: isFocused ? 3 : isPrev || isNext ? 2 : 1,
                                    transform: isFocused
                                        ? 'scale(1) translateX(0)'
                                        : isPrev
                                            ? 'scale(0.9) translateX(-40%)'
                                            : isNext
                                                ? 'scale(0.9) translateX(40%)'
                                                : 'scale(0.8) translateX(0)',
                                    opacity: isFocused ? 1 : 0.85,
                                    transition: 'transform 0.3s ease, z-index 0.3s ease, opacity 0.3s ease',
                                    transformOrigin: 'center'
                                }}
                            />
                        );
                    })}
                    <div className="carousel-button-container">
                        <button className="carousel-button" onClick={handlePrev}>
                            <FaArrowLeft style={{ width: '100%', height: '100%', color: "#32312F" }} />
                        </button>
                        <button className="carousel-button" onClick={handleNext}>
                            <FaArrowRight style={{ width: '100%', height: '100%', color: "#32312F" }}/>
                        </button>
                    </div>
                </div>
            </div>
            <Contact />
        </div>
    )
}
export default Projects;