import './profile.scss';
import JansenImage from '../../assets/images/Jansen.jpg';
import { profileData } from '../../data/mockData';
import cv from "../../assets/documents/Jansen_CV.pdf";


export default function Profile() {
    const technicalSkills = profileData.coreStack;
    return (
        <div id='profile' className="profile-container">
            <div className="profile-left-content">
                <div className="available-container">
                    <span className="available-text"><span className="available-dot">●</span>{profileData.availability} <span className="available-dot-small">●</span> {profileData.location}</span>
                </div>
                <h1 className="profile-name">Hi, I'm <span>{profileData.name}</span>.</h1>
                <h1 className="profile-title">{profileData.role}</h1>
                <p className="profile-description">{profileData.summary.split(/(\[[^\]]+\])/g).map((part, index) =>
                    part.startsWith("[") && part.endsWith("]") ? (
                        <span className="highlight" key={index}>
                            {part.slice(1, -1)}
                        </span>
                    ) : (
                        part
                    )
                )}</p>
                <div className="info-download">
                    <a href={cv} download="Jansen_CV.pdf" className="resume-button">
                        📄 Download CV (PDF)
                    </a>
                    <a href='#projects' className="explore-button btn-outline">
                        Explore Projects 🡇
                    </a>
                </div>

                <div className="core-stacks">
                    <span className="stack-label">CORE STACK:</span>
                    {technicalSkills.map((skill) => (
                        <div className="technical-item" key={skill.id}>
                            <div className="technical-name">{skill.name}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="profile-right-content">
                <img className="profile-image" src={JansenImage} alt="JANSEN .DEV" />
                <div className="skill-set-box">
                    {profileData.stats.map((stat) => (
                        <div className="skill-set" key={stat.id}>
                            <h3>{stat.value}</h3>
                            <span className="experience-col">{stat.label}</span>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    )
}
