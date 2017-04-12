import React from 'react';
import Parser from 'html-react-parser';
import Shuffle from 'react-shuffle';
import ImageHeader from './subComponents/imageHeader';
import WhiteIcon from './subComponents/whiteIcon';
import HeaderMenu from './subComponents/headerMenu';
import { getSnippet } from '../utils/postUtils';
import './blog.less';

const subtitles = [
  {
    name: "赉擘斯首页",
    path: "/"
  },
  {
    name: "Blog",
    path: "/blogs"
  },
];

const defaultCategory = "全部"
export default class BlogMainPage extends React.Component {
  constructor(props) {
    super(props);
    this.filterPosts = ::this.filterPosts;
    this.state = {
      categories: [],
      selectedCategory: defaultCategory
    };
  }
  componentDidMount() {
    const post_id = this.props.routeParams.post_id;
    const url = `https://public-api.wordpress.com/rest/v1.2/read/sites/laibosi.wordpress.com/posts?number=10&&order_by=date`;
    const that = this;
    $.get(url).done(function(data) {
      const posts = data.posts;
      let newPosts = [];
      let categories =[defaultCategory];
      posts.map((post, i) => {
        const postCategories = Object.keys(post.categories);
        let newPost = {
          title: Parser(post.title.replace(/[\uE000-\uF8FF]/g, '')),
          content: getSnippet(post.content.replace(/[\uE000-\uF8FF]/g, ''), 120),
          post_id: post.ID,
          featured_media: post.featured_media,
          categories: postCategories
        }
        newPosts.push(newPost);
        postCategories.forEach(category => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        })
      });
      that.setState({
        currentPosts: newPosts,
        categories: categories,
      })
    });
  }

  filterPosts(category) {
    this.setState({
      selectedCategory: category,
    });
  }

  render() {
    const posts = this.state.currentPosts;
    const categories = this.state.categories;
    const selectedCategory = this.state.selectedCategory;
    return (
      <div className="blogMainPage">
        <HeaderMenu
          hasHeaderLogo
          subtitles = {subtitles}
          fontColor = {'#333'}
          currentIndex = {1}
        />
        <div className="filterContainer">
          <span className="filterLabel">分类 :</span>
          {categories && categories.map((category, i) => {
            const categoryClassName = this.state.selectedCategory === category ? 'selected' : '';
            return (
              <button
                type="button"
                className={`btn ${categoryClassName}`}
                onClick={() => this.filterPosts(category)}
                key={`category-${i}`}
              >{category}</button>
            )
          })}
        </div>
        <div className="shuffle-container">
          <Shuffle duration={500} fade={false}>
            {posts &&
              posts.filter(post => {
                return selectedCategory === defaultCategory || post.categories.includes(selectedCategory)
              }).map((post, i) => {
                let imageUrl = "../images/intro/strategy/infoCards/experience.jpg";
                if (post.featured_media.uri) {
                  imageUrl = post.featured_media.uri;
                }
                const url = `../blogs/${post.post_id}`;
                return (
                  <div className="tile" key={post.post_id}>
                    <div className="image-top"style={{
                      'backgroundImage': `url(${imageUrl})`
                    }} />
                    {post.categories.map((category, i) => {
                        return (<span className="category-tag">{category}</span>)
                    })}
                    <h4 className="post-title">{post.title}</h4>
                    <p className="post-content">{post.content}</p>
                    <p className="read-more"><a href={url}> Read More </a></p>
                  </div>
                )
            })}
          </Shuffle>
        </div>
      </div>
    )
  }
}


class ListItem extends React.Component {
  render() {
    const post = this.props.post;
    const url = `../blogs/${this.props.post.post_id}`;
    let imageUrl = "../images/intro/strategy/infoCards/experience.jpg";
    if (this.props.post.featured_media.uri) {
      imageUrl = this.props.post.featured_media.uri;
    }
    return (
      <div className="tile" key={post.post_id}>
        <img src={post.featured_media.uri} style={{'height': '200px'}} />
        <p>{post.title}</p>
        <p>{post.content}</p>
        <a className="read-more" href={`../blogs/${post.post_id}`}> Read More > </a>
      </div>
    );
  }
};

