import React, {Component} from 'react';
import './Hero.css';


class Hero extends Component {
    // render is a required function of a component
    render() {
      return (
          <div id="hero" className="hoc-hero">
            <div id="heroHeadline">
              {this.props.heroHeadline}
            </div>
            <div id="heroText">
              {this.props.heroText}
            </div>
          </div>
      )
    }
}

export default Hero;

/*
From JS101 repo...

// create hero element
let hero = document.createElement("div");
hero.id = "hero";
hero.className = "hoc-hero";
let headline = document.createElement("div");
headline.id = "heroHeadline";
headline.innerHTML = "Curse of the Current Reviews";
let text = document.createElement("div");
text.id = "heroText";
text.innerHTML = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot, and reviews."
hero.appendChild(headline);
hero.appendChild(text);

*/