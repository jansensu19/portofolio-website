import './projects.scss';
import { useState } from 'react';
import { projectsData } from '../../data/mockData';

export default function Projects() {
    const [activeFramework, setActiveFramework] = useState('All Projects');

    const frameworks = [
        'All Projects',
        ...new Set(projectsData.map((project) => project.frameworkLabel).sort())
    ];

    const filteredProjects = activeFramework === 'All Projects'
        ? projectsData
        : projectsData.filter(
            (project) => project.frameworkLabel === activeFramework
        );

    const getProjectLinks = (links) => {
        const items = [
            {
                url: links.live,
                className: 'btn-primary',
                label: '🌐 Live Demo ↗',
            },
            {
                url: links.apk,
                className: 'btn-reactNative',
                label: '🤖 Download APK',
            },
            {
                url: links.expo,
                className: 'btn-expo',
                label: '🚀 Expo Link',
            },
            {
                url: links.youtube,
                className: 'btn-youtube',
                label: '▶️ Video Demo ↗',
            },
        ];

        const availableLinks = items.filter((item) => item.url);

        if (links.github) {
            availableLinks.push({
                url: links.github,
                className: 'btn-outline',
                label: links.live || links.apk || links.expo || links.youtube
                    ? '💻 GitHub Repo ↗'
                    : '💻 View Source on GitHub ↗',
            });
        }

        return availableLinks;
    };

    const getBadgeText = ({ live, github, apk, expo }) =>
        live && github ? "Live + Github" :
            apk ? "APK Available ✓" :
                github && expo ? "Github / Expo" :
                    live ? "Live Demo" :
                        "Source Code Ready";

    return (
        <div id='projects' className="projects-container">
            <div className="projects-content">
                <div className="projects-text">
                    <h2 className="projects-heading">PORTOFOLIO SHOWCASE</h2>
                    <h1 className="projects-title">Projects by Framework</h1>
                    <p className="projects-description">
                        Click any framework tab below to see how the <span>2-Column Grid</span> filters your projects. Notice how cards with or without a Live URL adapt cleanly.
                    </p>
                </div>
                <div className="framework-tabs">
                    {frameworks.map((framework) => {
                        const count = framework === 'All Projects'
                            ? projectsData.length
                            : projectsData.filter(
                                (project) =>
                                    project.frameworkLabel === framework
                            ).length;

                        return (
                            <button
                                key={framework}
                                className={`framework-tab ${activeFramework === framework ? 'active' : ''
                                    }`}
                                onClick={() => setActiveFramework(framework)}
                            >
                                {framework}
                                <span className={`framework-count ${activeFramework === framework ? 'active' : ''
                                    }`}>
                                    {count}
                                </span>
                            </button>
                        );
                    })}
                </div>
                <div className="projects-grid">
                    {filteredProjects.map((project) => {
                        const projectLinks = getProjectLinks(project.links);

                        return (
                            <div className="project-card" key={project.id}>

                                <div className={`project-badges-image-container ${project.framework}`}>
                                    <div className="project-info-badges">
                                        <div className="framework-badge">
                                            {project.frameworkLabel}
                                        </div>

                                        <div className="info-link-badge">
                                            {getBadgeText(project.links)}
                                        </div>
                                    </div>

                                    {project.image ? (
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                        />
                                    ) : (
                                        <div className="mockup-window">
                                            <span>{project.previewLabel}</span>
                                            <span>{project.previewMeta}</span>
                                        </div>
                                    )}
                                </div>

                                <div className="project-info">
                                    <h3 className="project-title">
                                        {project.title}
                                    </h3>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tags-container">
                                        {project.tags.map((tag) => (
                                            <span
                                                className="project-tags"
                                                key={tag}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        {projectLinks.map((link, index) => (
                                            <a
                                                key={`${link.className}-${index}`}
                                                className={`project-link ${link.className} ${projectLinks.length < 3
                                                    ? 'btn-full'
                                                    : ''
                                                    }`}
                                                href={link.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                {link.label}
                                            </a>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}