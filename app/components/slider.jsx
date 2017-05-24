import React, { Component } from 'react';
import Deck from 'react-slide-deck';
import { Link } from 'react-router';
import BottomBanner from './subComponents/bottomBanner.jsx';
import SliderTitle from './subComponents/sliderTitle.jsx';
import SliderBlock from './subComponents/sliderBlock.jsx';
import MenuModal from './subComponents/MenuModal.jsx';
import WhiteIcon from './subComponents/whiteIcon.jsx';
import { getSnippet } from '../utils/postUtils';
import './slider.less';

const data = [
  {
    titleArr: [
      "「中国战略劳动关系管理专家」"
    ],
    backgroundImg: "../images/slide-0.jpg",
    blocks: [
      {
        title: "「认识赉擘斯」",
        content: "创造和谐用工环境，保障企业战略目标的实现以及员工满意度的提升",
        titlePosition: "outside",
        rightArrow: "了解更多 --> ",
        href: "/intro/brief",
      },
      {
        title: "「方法战略」",
        content: "运用人力资源科学的理念、工具和方法，对接中国劳动法律的要求，融合中国社会人文文化，通过沟通落地解决方案创造和谐劳动关系环境，保障企业战略目标的实现以及员工满意度的提升",
        titlePosition: "outside",
        rightArrow: "了解更多 --> ",
        href: "/intro/strategy",
      }
    ]
  },
  {
    titleArr: [
      "「战略劳动关系管理",
      "全链条解决方案」"
    ],
    backgroundImg: "../images/slide-1.jpg",
    blocks: [
      {
        title: "救急解决方案",
        titlePosition: "inside",
        titleOnly: true,
        href: "/solution/emergency",
        blockSize: 6,
      },
      {
        title: "预防解决方案",
        titlePosition: "inside",
        titleOnly: true,
        href: "/solution/prevent",
        blockSize: 6,
      },
    ]
  },
  {
    titleArr: ["「洞察与方法」"],
    backgroundImg: "../images/slide-2.jpg",
    subtitle: "通过大量实践积累，我们不断总结和提出创新的观点。这些大胆的、独一无二的观点，让我们在研究企业战略劳动关系管理解决方案的道路上成就卓越，并始终保持领先。",
    blocks: [
      {
        title: "",
        content: "",
        titlePosition: "inside",
      },
      {
        title: "",
        content: "",
        titlePosition: "inside",
      },
      {
        title: "",
        content: "",
        titlePosition: "inside",
      },
    ]
  },
  {
    titleArr: ["「公司动态」"],
    backgroundImg: "../images/slide-3.jpg",
    blocks: [
      {
        title: "「公司动态」",
        content: "查看公司近期动态",
        titlePosition: "inside",
      },
      {
        title: "「公开课」",
        content: "查看公司近期公开课",
        titlePosition: "inside",
      },
      {
        title: "「项目案例」",
        content: "查看公司近期项目案例",
        titlePosition: "inside",
      },
    ]
  },
  {
    titleArr: ["「加入我们」"],
    backgroundImg: "../images/slide-4.jpg",
    subtitle: "",
    subtitleArrowUrl: "/joinus"
  },
];
export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0,
      factor: 0.3,
      index: 0,
      openMenuModal: false,
    };
    this.change = ::this.change;
    this.onSwitching = ::this.onSwitching;
    this.onSwitchDone = ::this.onSwitchDone;
    this.toggleMenuModal = ::this.toggleMenuModal;
    this.clickMenuTitle = ::this.clickMenuTitle;
  }
  componentWillMount() {
    if (this.props.location.state && this.props.location.state.currentIndex) {
      this.setState({
        current: this.props.location.state.currentIndex || 0,
      })
    }
  }
  componentDidMount() {
    // 洞察与方法
    const ids_for_dcyff = [421, 586, 803];
    var that = this;
    ids_for_dcyff.map((id, i) => {
      const urlForEach = `https://public-api.wordpress.com/rest/v1.2/read/sites/laibosi.wordpress.com/posts/${id}`;
      $.get(urlForEach).done(function(post) {
        data[2].blocks[i].title = post.title.replace(/[\uE000-\uF8FF]/g, '');
        data[2].blocks[i].content = getSnippet(post.content.replace(/[\uE000-\uF8FF]/g, ''), 60),
        data[2].blocks[i].titlePosition = "inside";
        data[2].blocks[i].href = `/blogs/${post.ID}`;
        that.setState({
          data: data,
        });
      });
    })
    // 公司动态
    // ordered by 公司动态, 公开课, 项目案例
    const ids = [1715, 1769, 1816];
    ids.map((id, i) => {
      const urlForEach = `https://public-api.wordpress.com/rest/v1.2/read/sites/laibosi.wordpress.com/posts/${id}`;
      $.get(urlForEach).done(function(post) {
        data[3].blocks[i].content = post.title.replace(/[\uE000-\uF8FF]/g, '');
        data[3].blocks[i].href = `/blogs/${post.ID}`;
        that.setState({
          data: data,
        });
      });
    })
  }

  change({ target }) {
    const current = Array.prototype.indexOf.call(target.parentElement.children, target);
    this.setState({ current });
  }
  clickMenuTitle({ target }) {
    this.change({ target });
    this.toggleMenuModal();
  }
  onSwitching(factor, deck) {
    const current = deck.state.current;
    this.setState({current, progress: factor});
  }
  onSwitchDone(state) {
    this.setState({
      index: state.current,
    });
  }
  toggleMenuModal() {
    const state = this.state.openMenuModal;
    // Update state: modal visibility and its content
    this.setState({ openMenuModal: !state });
  }
  render() {
    const data = this.state.data;
    const slideClasses = {
      current: 'slideCurrent',
      entering: 'slideCurrentEntering',
      prev: 'slidePrev',
      leaving: 'slidePrevLeaving'
    };
    if (!data) {
      return (<div></div>);
    }
    const menuOpenClass = this.state.openMenuModal ? "menuOpenClass" : "";
    return (
      <div className={"slider-container"}>
        <div className={`slider ${menuOpenClass}`}>
          <Deck
            className='deck'
            wheel={true}
            current={this.state.current}
            horizontal={false}
            swipe={true}
            loop={true}
            onSwitching={this.onSwitching}
            onSwitchDone={this.onSwitchDone}
            slideClasses={slideClasses}
          >
            {data && data.map((d, i) => {
              return (
                <Deck.Slide
                  key={i}
                  className={`slide-${i} deck-slide`}
                >
                  <div className="titleAndSubtitle">
                    <div className="titleBlock">
                      {d.titleArr && d.titleArr.map((title, i) => {
                        return (
                          <SliderTitle key={`title-${i}`} title={title} />
                       )
                      })}
                    </div>
                    {(!!d.subtitle || !!d.subtitleArrowUrl) &&
                      <div className="subtitleBlock">
                        {d.subtitle}
                        {!!d.subtitleArrowUrl &&
                          <Link to={d.subtitleArrowUrl} style={{ textDecoration: 'none' }}>
                            <span className="arrow"> 慕贤、勉学、名实 －＞</span>
                          </Link>
                        }
                      </div>
                    }
                  </div>
                  {d.blocks && d.blocks.map((block, i) => {
                    return(
                      <SliderBlock
                        key={`block-${i}`}
                        index = {i}
                        titlePosition={block.titlePosition}
                        title={block.title}
                        content={block.content}
                        headerArr={block.headerArr}
                        href={block.href}
                        blockSize={block.blockSize}
                        titleOnly={block.titleOnly}
                      />
                    )
                  })}                  
                </Deck.Slide>
              )
            })}
          </Deck>
          <div className='indicators' onClick={this.change}>
            <li className={this.state.current === 0 ? 'selected' : ''}></li>
            <li className={this.state.current === 1 ? 'selected' : ''}></li>
            <li className={this.state.current === 2 ? 'selected' : ''}></li>
            <li className={this.state.current === 3 ? 'selected' : ''}></li>
            <li className={this.state.current === 4 ? 'selected' : ''}></li>
          </div>
          <WhiteIcon />
          <i className="fa fa-bars nav-bars fa-2x" aria-hidden="true" onClick={this.toggleMenuModal}></i>
          <div className="cover" onClick={this.toggleMenuModal}></div>
        </div>
        <MenuModal show={this.state.openMenuModal} onClose={this.toggleMenuModal}>
          <div onClick={this.clickMenuTitle}>
            <li className={`menu-title menu-title-0 ${this.state.current === 0 ? 'selected' : ''}`}>欢迎主页</li>
            <li className={`menu-title menu-title-1 ${this.state.current === 1 ? 'selected' : ''}`}>解决方案</li>
            <li className={`menu-title menu-title-2 ${this.state.current === 2 ? 'selected' : ''}`}>洞察与方法</li>
            <li className={`menu-title menu-title-3 ${this.state.current === 3 ? 'selected' : ''}`}>公司动态</li>
            <li className={`menu-title menu-title-4 ${this.state.current === 4 ? 'selected' : ''}`}>加入我们</li>
          </div>
          <Link to={'/contactus'} style={{ textDecoration: 'none' }}><li className="blogLink menu-title">联络我们</li></Link>
          <Link to={'/blogs'} style={{ textDecoration: 'none' }}><li className="blogLink menu-title">Blog</li></Link>
        </MenuModal>       
        {this.state.current === 4 &&
          <BottomBanner />
        }
      </div>
    );
  }
}
