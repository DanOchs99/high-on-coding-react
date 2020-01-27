import React, {Component} from 'react';
import './Article.css';


class Article extends Component {
    // render is a required function of a component
    render() {
      return (
          <div className="hoc-article">
            <div className="headline">
                {this.props.headline}
            </div>
            <div className="text">
                {this.props.text}
            </div>
            <div className="footer">
                {this.props.comments} comments   {this.props.likes} likes
            </div>
          </div>
      )
    }
}

export default Article;

/*
From JS101 repo...

// create first article
let article1 = document.createElement("div");
article1.id = "article1";
article1.className = "hoc-article";
headline = document.createElement("div");
headline.id = "article1Headline";
headline.className = "headline";
headline.innerHTML = "Hello WatchKit";
text = document.createElement("div");
text.id = "article1Text";
text.className = "text";
text.innerHTML = "Last month Apple released the anticipated WatchKit Framework for developers in the form of iOS 8.2 beta SDK release. The WatchKit framework enables the developers to create Apple Watch applications. In this article we are going to focus on the basics of getting started with the WatchKit framework and developing apps for the Apple Watch.";
let footer = document.createElement("div");
footer.id = "article1Footer";
footer.className = "footer";
footer.innerHTML = "12 comments   124 likes";
article1.appendChild(headline);
article1.appendChild(text);
article1.appendChild(footer);

*/