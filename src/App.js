import React, {Component} from 'react';

import Header from './Header'
import Hero from './Hero'
import Article from './Article'

class App extends Component {
    // render is a required function of a component
    render() {
      let heroHeadline = "Curse of the Current Reviews"
      let heroText = "When you want to buy any application from the Apple iTunes store you have more choices than you can handle. Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage. Their choice is dependent on three important factors price, screenshot, and reviews."
      let articles = []
      articles[0] = {headline: "Hello WatchKit", text: "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.", comments: 12, likes: 124 }
      articles[1] = {headline: "Introduction to Swift", text: "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications. Swift is a fairly new language and still in development but it clearly reflects the intentions and future direction. This article will revolve around the basic concepts in the Swift language and how you can get started.", comments: 15, likes: 45 }

      return (
            <>
              <Header />
              <Hero heroHeadline={heroHeadline} heroText={heroText} />
              <Article headline={articles[0].headline} text={articles[0].text} comments={articles[0].comments} likes={articles[0].likes} />
              <Article headline={articles[1].headline} text={articles[1].text} comments={articles[1].comments} likes={articles[1].likes} />
            </>
      )
    }
}

export default App;
         