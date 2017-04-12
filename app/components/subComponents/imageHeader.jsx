import React from 'react';
import { Link } from 'react-router';
import './imageHeader.less';

export default class ImageHeader extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      imageUrl,
      withTitleNavOnIt,
      backgroundColor,
    } = this.props;
    const divStyle = {
      backgroundImage: imageUrl ? 'url(' + imageUrl + ')' : null,
      backgroundSize: 'cover',
      height: withTitleNavOnIt ? '300px' : '220px',
      backgroundColor: backgroundColor
    }
    return (
      <div
        className="imageHeader"
        style={divStyle}
      >
      </div>
    );
  }
}
