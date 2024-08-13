// ProjectCard.tsx
import React, { useState } from 'react';
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
    versions?: number[];
    style?: React.CSSProperties;
    onVersionChange?: (version: number) => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    id,
    title,
    description,
    stackIcons,
    thumbnailSrc,
    viewLink,
    sourceLink,
    versions = [1],
    onVersionChange,
    style }) => {

    const [selectedVersion, setSelectedVersion] = useState(1);

    const handleVersionChange = (version: number) => {
        setSelectedVersion(version);
        if (onVersionChange) {
            onVersionChange(version);
        }
    };

    return (
        <div className='gridCard' id={id} style={style}>
            {versions.length > 1 && (
                <div className='version-selector'>
                    {versions.map(version => (
                        <button
                            key={version}
                            className={`version-button ${version === selectedVersion ? 'active' : ''}`}
                            onClick={() => handleVersionChange(version)}
                        >
                            v{version}
                        </button>
                    ))}
                </div>
            )}
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
                            width={0}
                            height={0}
                            sizes='100vw'
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
