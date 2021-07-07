
import './App.css';
import React, { useRef } from 'react'

import Head from './components/head/head'
import SelfIntro from './components/content/selfintro/selfIntro'
import Pflio from './components/content/portfolio/portfolio'
import Bkgd from './components/content/bkgd/background'
import Skill from './components/content/skill/skill'
import Contact from './components/content/contact/contact'


function App() {

  const selfIntroRef = useRef();
  const BkgdRef = useRef();
  const SkillRef = useRef();
  const pFlioRef = useRef();
  const ContactRef = useRef();

  var refDict = {
    ["selfIntroRef"] : selfIntroRef,
    ["BkgdRef"] : BkgdRef,
    ["SkillRef"] : SkillRef,
    ["pFlioRef"] : pFlioRef,
    ["ContactRef"] : ContactRef,
  }

  return (
    <div className="App">
        <Head refDict={refDict}/>
        <SelfIntro ref={selfIntroRef}/>
        <Bkgd/>
        <Skill/>
        <Pflio/>
        <Contact/>
    </div>
  );
}

export default App;
