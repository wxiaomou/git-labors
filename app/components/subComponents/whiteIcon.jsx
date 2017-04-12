import React from 'react';
import { Link } from 'react-router';
import './whiteIcon.less';

const logoWhiteWithTitle = "../../images/logo-white-with-title.png";
export default class WhiteIcon extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      imageUrl,
    } = this.props;
    return (
      <Link to={'/'}>
        <img className="white-icon" src={logoWhiteWithTitle}></img>
      </Link>
    );
  }
}
