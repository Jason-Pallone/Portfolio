import React, {Component} from 'react';
import '../App.css';


// components
import HomePage from './HomePage'
import About from './About'
import Projects from './Projects'
import Contact from './Contact'
import Footer from './Footer'


class App extends Component{

  state={
    showAbout: false,
    showSubIntro: false,
    showCodingInfo: false,
    showStack: false,
    showRSVP: false,
    showRSVPInfo: false,
    showRSVPLinks: false,
}


showAbout = () => {
  const top = window.pageYOffset;
  if(top>400)
  this.setState({
  showAbout: true,
  })
}

showSubIntro = () => {
  const top = window.pageYOffset;
  if(top>700)
  this.setState({
  showSubIntro: true
  })
}

showCodingInfo = () => {
  const top = window.pageYOffset;
  if(top>800)
  this.setState({
  showCodingInfo: true
  })
}

showStack = () => {
  const top = window.pageYOffset;
  if(top>900)
  this.setState({
  showStack: true
  })
}

showRSVP = () => {
  const top = window.pageYOffset;
  if(top>1500)
  this.setState({
  showRSVP: true
  })
}


showRSVPInfo = () => {
  const top = window.pageYOffset;
  if(top>1600)
  this.setState({
  showRSVPInfo: true
  })
}


showRSVPLinks = () => {
  const top = window.pageYOffset;
  if(top>1750)
  this.setState({
  showRSVPLinks: true
  })
}


componentDidMount(){
    window.addEventListener("scroll", this.showAbout)
    window.addEventListener("scroll", this.showSubIntro)
    window.addEventListener("scroll", this.showCodingInfo)
    window.addEventListener("scroll", this.showStack)
    window.addEventListener("scroll", this.showRSVP)
    window.addEventListener("scroll", this.showRSVPInfo)
    window.addEventListener("scroll", this.showRSVPLinks)
}

componentWillUnmount(){
  window.addEventListener("scroll", this.showAbout)
  window.addEventListener("scroll", this.showSubIntro)
  window.addEventListener("scroll", this.showCodingInfo)
  window.addEventListener("scroll", this.showStack)
  window.addEventListener("scroll", this.showRSVP)
  window.addEventListener("scroll", this.showRSVPInfo)
  window.addEventListener("scroll", this.showRSVPLinks)
}

  render(){
    return(
      <div className='App'>
        <HomePage />

        <About 
        showAbout={this.state.showAbout}
        showSubIntro={this.state.showSubIntro}
        showCodingInfo={this.state.showCodingInfo}
        showStack={this.state.showStack}
        />

        <Projects
        showRSVP={this.state.showRSVP}
        showRSVPInfo={this.state.showRSVPInfo}
        showRSVPLinks={this.state.showRSVPLinks}
          />

        <Contact />
        <Footer />
      </div>
   )}
}


export default App;
