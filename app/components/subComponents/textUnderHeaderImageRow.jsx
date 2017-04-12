import React from 'react';
import './textUnderHeaderImageRow.less';

export default class TextUnderHeaderImageRow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      introTextArr,
    } = this.props;
    return (
      <div className="row text-under-header-image-row">
        <div className="intro-text-block col-sm-10 offset-sm-1 col-md-10 offset-md-1 col-12">
          {introTextArr.map((introText, index) => {
            return (
              <div className='text' key={index}>{introText}</div>
            )
          })}
        </div>
      </div>
    );
  }
}
