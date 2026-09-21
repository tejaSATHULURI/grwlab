import {about } from '../assets/constants/constants.json';
export default function About() {
  return (
    <section className="content-section about-section" id="about">
          <p className="eyebrow">{about.label}</p>
          <p className="eyebrow">{about.sublabel}</p>
          <h1>{about.heading}</h1>
          <p className="intro">
            {about.intro}
          </p>
          <div className="about-details">
            <p>{about.subHeadingDescription1}</p>
            <p>{about.subHeadingDescription2}</p>
            <p>{about.subHeadingDescription3}</p>
          </div>
        </section>
  )
}
        
    