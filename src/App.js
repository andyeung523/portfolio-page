
import './App.css';
import Head from './components/head/head'
import SelfIntro from './components/content/selfIntro'
import Pflio from './components/content/portfolio'
import Bkgd from './components/content/background'
import Skill from './components/content/skill'
import Contact from './components/content/contact'


function App() {
  return (
    <div className="App">
        <Head/>
        <SelfIntro/>
        <Bkgd/>
        <Skill/>
        <Pflio/>
        <Contact/>
    </div>
  );
}

export default App;
