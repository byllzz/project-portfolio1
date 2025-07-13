import React from 'react';
import '../styles/HeroHighlightIntro.css';

import {
  Code2, LayoutDashboard, Paintbrush, Cpu, Database,
  Network, Lock, TerminalSquare, Sparkles, Palette
} from "lucide-react";

export default function HeroHighlightIntro() {
  return (
    <section className="ai-hero-cortex">
      {/* === Floating Background Code === */}
      <div className="neural-backdrop">
        <div className="fragment" style={{ '--i': 0.2 }}>const dream = () =&gt; create();</div>
        <div className="fragment" style={{ '--i': 0.4 }}>{`<Interface type="emotion" />`}</div>
        <div className="fragment" style={{ '--i': 0.6 }}>design.is("meaningful");</div>
      </div>

      {/* === LEFT SIDE === */}
      <div className="cortex-left">
        {/* Line 1 */}
        <p className="cortex-line">
          <span className="prefix-left prefix" >//</span> I design <span className="stroke" style={{marginRight : '10px'}}>interfaces</span> 
          that speak <span className="highlight-glow">emotion</span> <span className="prefix-right prefix">//</span>
        </p>

        {/* Deep poetic trio */}
        <div className="ai-hero-left">
          <p className="poetic-line">
            I design <span className="stroke">what</span> can’t be explained.
          </p>
          <p className="poetic-line">
            <span className="glow-word">Feelings</span>,  
            turned into <span className="underline-pulse">interfaces</span>.
          </p>
          <p className="ai-tagline">
            5+ years shaping <span className="boxed">brands</span>,  
            products & experiences.
          </p>
        </div>

        {/* Original tagline paragraph */}
        <p className="hero-subtext">
          In the <span className="highlight-boxed">designing</span> world for over 
          <span className="highlight-boxed"> 5 years</span>, I turn 
          <span className="highlight-boxed"> ideas</span> into 
          <span className="highlight-glow"> amazing projects</span>  
          through the world of <span className="highlight-boxed">creative</span>  
          and <span className="highlight-boxed">interactive</span> design.
          <span className="symbol">*</span>
        </p>
      </div>

      {/* === RIGHT SIDE === */}
   <div className="cortex-right">
  <div className="symbol-glitch">
    <span className="web-icon" style={{ top: '10%', left: '15%', '--rotate': '-6deg' }}>
      <Code2 size={18} /> Code
    </span>
    <span className="web-icon" style={{ top: '35%', left: '65%', '--rotate': '4deg' }}>
      <LayoutDashboard size={18} /> Layout
    </span>
    <span className="web-icon" style={{ top: '66%', left: '25%', '--rotate': '-8deg' }}>
      <Paintbrush size={18} /> UI
    </span>
    <span className="web-icon" style={{ top: '16%', left: '75%', '--rotate': '5deg' }}>
      <Cpu size={18} /> Logic
    </span>
    <span className="web-icon" style={{ top: '45%', left: '10%', '--rotate': '8deg' }}>
      <Database size={18} /> DB
    </span>
    <span className="web-icon" style={{ top: '70%', left: '60%', '--rotate': '-5deg' }}>
      <Network size={18} /> API
    </span>
    <span className="web-icon" style={{ top: '30%', left: '30%', '--rotate': '6deg' }}>
      <Lock size={18} /> Auth
    </span>
    <span className="web-icon" style={{ top: '55%', left: '80%', '--rotate': '-7deg' }}>
      <TerminalSquare size={18} /> CLI
    </span>
    <span className="web-icon" style={{ top: '50%', left: '40%', '--rotate': '3deg' }}>
      <Palette size={18} /> Theme
    </span>
    <span className="web-icon" style={{ top: '2%', left: '46%', '--rotate': '9deg' }}>
      <Sparkles size={18} /> Magic
    </span>
  </div>
  <div className="vertical-tag">WEB EXPERIENCE</div>
</div>

    </section>
  );
}
