import React from 'react';
import Parser from 'html-react-parser';
import HeaderMenu from './subComponents/headerMenu.jsx';
import Footer from './subComponents/Footer.jsx';
import './post.less'

const postData = {
  subtitles: [
    {
      name: "首页",
      path: "/"
    },
    {
      name: "Blog",
      path: "/blogs"
    },
  ],
}
export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    const post_id = props.routeParams.post_id;
    const url = `https://public-api.wordpress.com/rest/v1.2/read/sites/laibosi.wordpress.com/posts/${post_id}`;
    const that = this;
    $.get(url).done(function(data) {
      const title = data.title;
      const content = data.content;
      that.setState({
        title: title.replace(/[\uE000-\uF8FF]/g, ''),
        content: content.replace(/[\uE000-\uF8FF]/g, ''),
        post_id: data.post_id,
      })
    })
  }
  getElement(element, i) {
    const NodeName = `${element.nodeName}`;
    switch(NodeName) {
      case "#text":
        return;
      default:
        return (
          // element.align can be alignleft, aligincenter, aliginright
          // in less file, we will define the css for those three types
          <NodeName key={i} className={element.align}>
            { Parser(element.innerHTML) }
          </NodeName>
        )
        break;
    }
  }
  render() {
    const {
      title,
      content,
    } = this.state;
    const subtitles = postData.subtitles;
    if (!title || !content) {
      // return (
      //   <div> Could not find the page</div>
      // )
      return null;
    }
    const elements = $.parseHTML(content);
    return(
      <div className="post">
        <HeaderMenu
          hasHeaderLogo
          subtitles = {subtitles}
          fontColor = {'#333'}
          currentIndex = {1}
        />
        <div className = "title col-sm-8 offset-sm-2">
          {Parser(title)}
        </div>
        <div className="content col-sm-8 offset-sm-2">
          {elements && elements.map((element, i) => {
            return this.getElement(element, i);
          })}
        </div>
        <Footer />
      </div>
    )
  }
}
