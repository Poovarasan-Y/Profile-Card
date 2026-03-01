import './App.css'

import profilePic from './assets/MyProfile.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
function App() {
  const profileData = {
    name: 'Poovarasan Yuvaraj',
    title: 'Full Stack Developer',
    skills: 'Java | Sql |React | JS | HTML | CSS',
    image: profilePic,
     social: [
      { name: 'LinkedIn', url: 'https://www.linkedin.com/in/poovarasan094/', icon: <FontAwesomeIcon icon={faLinkedin} /> },
      { name: 'GitHub', url: 'https://github.com/Poovarasan-Y', icon: <FontAwesomeIcon icon={faGithub} /> },
       { name: 'Instagram', url: 'https://www.instagram.com/poovarasan.___', icon: <FontAwesomeIcon icon={faInstagram} /> },
      { name: 'Email', url: 'mailto:poovarasanyuvaraj094@gmail.com', icon: <FontAwesomeIcon icon={faEnvelope} /> },
    ],
    projects: [
      { name: 'Project 1', url: '#' },
      { name: 'Project 2', url: '#' },
      { name: 'Project 3', url: '#' },
      { name: 'Blog', url: '#' },
    ],
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <div className="profile-image-wrapper">
          <img src={profilePic} alt={profileData.name} className="profile-image" />
        </div>

        {/* Profile Info */}
        <h1 className="profile-name">{profileData.name}</h1>
        <p className="profile-title">{profileData.title}</p>
        <p className="profile-skills">{profileData.skills}</p>

        {/* Social Links */}
        <div className="social-links">
          {profileData.social.map((link, index) => (
            <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" className="social-link" title={link.name}>
              <span>{link.icon}</span>
            </a>
          ))}
        </div>

        {/* Projects/Links */}
      {/*  <div className="projects-section">
          {profileData.projects.map((project, index) => (
            <a key={index} href={project.url} className="project-link">
              {project.name}
            </a>
          ))}
        </div>*/}

        {/* Footer */}
        <p className="profile-footer">© 2025 Poovarasan Yuvaraj. All rights reserved.</p>
      </div>
    </div>
  )
}

export default App
