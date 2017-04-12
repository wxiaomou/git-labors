import React from 'react';
import { Link } from 'react-router';
import './headerMenu.less';

const logoBlack="../../images/logo-black.png";
export default class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      title,
      subtitles,
      currentIndex,
      hasHeaderLogo,
      fontColor,
    } = this.props;
    return (
      <div className="header-menu row">
        {title && <div className="title col-md-12">{title}</div>}
        <div className="subtitles col-md-12">
          {subtitles && subtitles.map((subtitle, i) =>
            <Link className="header-subtitle" to={subtitle.path} key = {i}>
              <li
                className={currentIndex === i ? 'selected' : ''}
                style={{color: `${fontColor}`}}
              >
                {subtitle.name}
              </li>
            </Link>
          )}
        </div>
        {hasHeaderLogo &&
          <Link to={'/'}>
            <img className="logo" src={logoBlack}></img>
          </Link>
        }
      </div>
    );
  }
}
