import {  FaSass , FaNode } from 'react-icons/fa';
import {  SiNpm } from 'react-icons/si';
import '../styles/Skills.css'
import html from '../assets/html.png'
import css from '../assets/css.png'
import javaScript from '../assets/javaScript.png'
import material from '../assets/material.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import tailwind from '../assets/tailwind.png'
import react from '../assets/react.png'
import figma from '../assets/figma.png'

export default function Skills() {
  return (
    <section className="skills-section" id='skills'>
      <div className="skills-content">
        <h2 className="skills-heading">
          <span className='highlight-glow-skills'>Frontend mastery</span> crafted by building <br />
          <span>real, fast, responsive UIs.</span>
        </h2>

        <div className="skills-pill hover-trigger" data-cursor-text="Tecnologies ! I mastared.">Skills</div>

        <div className="skills-flowers">
          {/* Flower Left */}
          <div className="skills-flower">
            <div className="center-label">Core UI</div>
            <div className="petal">
              <img src={html} alt="" />
              </div>
            <div className="petal">
              <img src={css} alt="" />
              </div>
            <div className="petal">
              <img src={javaScript} alt="" />
              </div>
            <div className="petal">
              <img src={git} alt="" />
              </div>
            <div className="petal">
              <img src={github} alt="" />
              </div>
            <div className="petal">
              <img src={tailwind} alt="" />
              </div>
          </div>

          {/* Flower Right */}
          <div className="skills-flower skill-flower-bottom">
            <div className="center-label">Advanced</div>
            <div className="petal">
              <img src={react} alt="" />
            </div>
            <div className="petal">
              <img src={material} alt="" />
              </div>
            <div className="petal"><FaSass title="Sass" /></div>
            <div className="petal"><FaNode title="Node Js" /></div>
            <div className="petal">
              <img src={figma} alt="" /></div>
            <div className="petal"><SiNpm title="NPM" /></div>
          </div>
        </div>
      </div>
    </section>
  );
}
