import React from 'react';
import { Link } from 'react-router';
import './infoCard.less';

export default class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      content,
      imageUrl,
      position,
    } = this.props;
    return (
      <div className={`info-card col-sm-5 col-md-5 ${position === 'left' ? 'offset-sm-1 offset-md-1' : ''}`} >
        <div className="container">
          <img style={{'width':'100%'}} src={imageUrl} />
          <div className="caption">
            <h3>{title}</h3>
            <p className="content">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}
