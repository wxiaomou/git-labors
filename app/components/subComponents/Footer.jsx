import React from 'react';
import { Link } from 'react-router';
import WhiteIcon from './whiteIcon';
import './Footer.less';

export default class Footer extends React.Component {
  constructor (props) {
    super(props)
  }

  render() {
    const currentUrl = this.props.currentUrl;
    return (
      <div className="footer">
        <div className='footer-content row'>
          <div className='col-md-3'>
            <WhiteIcon />
          </div>
          <div className='sitemap col-md-6'>
            <Link to={'/'} className={`footer-link ${currentUrl === '/' ? 'selected' : ''}`}>主页</Link>
            <Link to={'/intro/brief'} className={`footer-link ${currentUrl === 'brief' ? 'selected' : ''}`}>认识赉擘斯</Link>
            <Link to={'/intro/timeline'} className={`footer-link ${currentUrl === 'timeline' ? 'selected' : ''}`}>成长历程</Link>
            <Link to={'/solution'} className={`footer-link ${currentUrl === 'solution' ? 'selected' : ''}`}>解决方案</Link>
            <Link to={'/joinus'} className={`footer-link ${currentUrl === 'joinus' ? 'selected' : ''}`}>加入我们</Link>
            <Link to={'/blogs'} className={`footer-link ${currentUrl === 'blogs' ? 'selected' : ''}`}>博客</Link>
          </div>
          <div className="col-md-3">
            <img className="wechat-card" src="../images/2wm.jpg" />
          </div>
        </div>
      </div>
    );
  }
}