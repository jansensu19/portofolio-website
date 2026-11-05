import './contact.scss'
import { contactData } from '../../data/mockData'
import cv from "../../assets/documents/Jansen_CV.pdf";

export default function Contact() {
    return (
        <div id='contact' className="contact-container">
            <div className="contact-text">
                <h2>GET IN TOUCH</h2>
                <h1>Contact Me</h1>
                <p>Direct contact links for recruiters and hiring managers.</p>
            </div>
            <div className="contact-list-container">
                <div className="contact-box">
                    <span className="contact-label">📧 EMAIL</span>
                    <span className="contact-value">{contactData.email}</span>
                    <a href={`mailto:${contactData.email}`} className="contact-link btn-outline">Send Email ↗</a>
                </div>
                <div className="contact-box">
                    <span className="contact-label">💬 WHATSAPP / PHONE</span>
                    <span className="contact-value">{contactData.phoneDisplay}</span>
                    <a href={contactData.whatsappUrl} className="contact-link btn-outline" target="_blank" rel="noopener noreferrer">
                        Chat on WhatsApp ↗
                    </a>
                </div>
                <div className="contact-box">
                    <span className="contact-label">📄 CURRICULUM VITAE</span>
                    <span className="contact-value">{contactData.cvFileName}</span>
                    <a href={cv} download="Jansen_CV.pdf" className="contact-link btn-primary">
                        ⬇ Download CV
                    </a>
                </div>
            </div>

        </div>
    )
}
