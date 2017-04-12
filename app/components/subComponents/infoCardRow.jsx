import React from 'react';
import { Link } from 'react-router';
import './infoCardRow.less';

export default class InfoCardRow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      content,
      imageUrl,
    } = this.props;
    return (
      <div className="info-card-row row" >
        <div className="container offset-md-1 col-md-10 offset-sm-1 col-sm-10 col-10 offset-1 row">
          <div className="image-container col-md-5 col-sm-12">
            <img className="image-card" src={imageUrl} />
          </div>
          <div className="caption col-md-7 col-sm-12">
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
          </div>
        </div>
      </div>
    );
  }
}
