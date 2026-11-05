import './experience.scss';
import { experienceData, educationData, technicalSkills } from '../../data/mockData';

export default function Experience() {
    return (
        <div id='experience' className="experience-container">
            <div className="experience-content">
                <div className="experience-text">
                    <h2 className="experience-heading">CAREER BACKGROUND</h2>
                    <h1 className='experience-title'>Experience & Education</h1>
                </div>

                <div className="experience-education-container">
                    <div className="experience-card-container">
                        {experienceData.map((experience) => (
                            <div className="experience-item" key={experience.id}>
                                <div className="experience-date">{experience.date}</div>
                                <div className="experience-card-title">{experience.role}</div>
                                <div className="experience-company">{experience.company} <span>•</span> {experience.location}</div>
                                <ul className="experience-responsibilities">
                                    {experience.highlights.map((responsibility, index) => (
                                        <li className="experience-list" key={index}>{responsibility}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>

                    <div className="education-container">
                        {educationData.map((edu) => (
                            <div className="education-item" key={edu.id}>
                                <span className="education-date">{edu.graduated}</span>
                                <h3 className="education-title">{edu.degree}</h3>
                                <p className="education-university">{edu.university}</p>
                            </div>
                        ))}

                        <div className="technical-container">
                            <h3 className="technical-heading">Technical Proficiency</h3>
                            <div className="technical-skills">
                                {technicalSkills.map((skill) => (
                                    <div className="technical-item" key={skill.id}>
                                        <div className="technical-name">{skill.name}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}
