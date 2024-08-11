// ProjectCard.tsx
import React from 'react';
import Image from 'next/image';
import { FaCode } from 'react-icons/fa';

interface StackIcon {
    src: string;
    alt: string;
}

interface ProjectCardProps {
    id: string;
    title: string;
    description: string;
    stackIcons: StackIcon[];
    thumbnailSrc?: string;
    viewLink?: string;
    sourceLink?: string;
    style?: React.CSSProperties;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ id, title, description, stackIcons, thumbnailSrc, viewLink, sourceLink, style }) => {

    return (
        <div className='gridCard' id={id} style={style}>
            <div className='title'>
                <h2>{title}</h2>
                <div className='seperator' />
            </div>
            <div className='thumbnail'>
                {thumbnailSrc && (
                    <div className='wrapper'>
                        <Image
                            className='thumbnail-icon'
                            src={thumbnailSrc}
                            alt={`${title} thumbnail`}
                            layout="responsive"
                            width={100}
                            height={100}
                            objectFit="contain"
                        />
                    </div>
                )}
            </div>
            <div className='description'>
                {description}
            </div>
            <div className='stack'>
                {stackIcons.map((icon, index) => (
                    <div className="stack-icon" key={index}>
                        <Image
                            src={icon.src}
                            alt={icon.alt}
                            title={icon.alt}
                            width={32}
                            height={32}
                        />
                    </div>
                ))}
            </div>
            <div className='links'>
                <div className='wrapper'>
                    {viewLink && (
                        <button onClick={() => window.open(viewLink, '_blank')}>
                            <div className='link-icon'>
                                <FaCode style={{ width: '100%', height: '100%', color: "#32312F" }} />
                            </div>
                            <p>View Project</p>
                        </button>
                    )}
                    {sourceLink && (
                        <button onClick={() => window.open(sourceLink, '_blank')}>
                            <div className='link-icon'>
                                <FaCode style={{ width: '100%', height: '100%', color: "#32312F" }} />
                            </div>
                            <p>View Source</p>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
