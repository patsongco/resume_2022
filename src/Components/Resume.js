import React, { Component } from "react";
import Slide from "react-reveal";

class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>Major in {education.major}</p>
          <p>{education.honours}</p>
          {education.description.first ? <p className="desc"><span>&bull;</span> {education.description.first}</p> : null}
          {education.description.second ? <p className="desc"><span>&bull;</span> {education.description.second}</p> : null}
          {education.description.third ? <p className="desc"><span>&bull;</span> {education.description.third}</p> : null}
          {education.description.fourth ? <p className="desc"><span>&bull;</span> {education.description.fourth}</p> : null} 
          <br></br>
        </div>
      );
    });

    const volunteering = this.props.data.volunteering.map(function (volunteering) {
      return (
        <div key={volunteering.company}>
          <h3>{volunteering.company}</h3>
          <p className="info">
            {volunteering.placement}
            <span>&bull;</span> <em className="date">{volunteering.date}</em>
          </p>
          <p>{volunteering.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <br></br>
          {work.description.first ? <p className="desc">{work.description.first}</p> : null}
          {work.description.second ? <p className="work-desc"><span>&bull;</span> {work.description.second}</p> : null}
          {work.description.third ? <p className="work-desc"><span>&bull;</span> {work.description.third}</p> : null}
          {work.description.fourth ? <p className="work-desc"><span>&bull;</span> {work.description.fourth}</p> : null}
          {work.description.fifth ? <p className="work-desc"><span>&bull;</span> {work.description.fifth}</p> : null}
          {work.description.sixth ? <p className="work-desc"><span>&bull;</span> {work.description.sixth}</p> : null}
          {work.description.seventh ? <p className="work-desc"><span>&bull;</span> {work.description.seventh}</p> : null}
          {work.description.eighth ? <p className="desc">{work.description.eighth}</p> : null}
          <br></br>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      // const backgroundColor = this.getRandomColor();
      const backgroundColor = "#2051bd";
      
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume">
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Education</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{education}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <span>Volunteering</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns">{volunteering}</div>
              </div>
            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div className="nine columns main-col">{work}</div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="skills-message">{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}

export default Resume;
