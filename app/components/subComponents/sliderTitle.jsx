import React from 'react';
import './sliderTitle.less';

export default class Title extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const title = this.props.title;
    return (
      <div className='sliderTitle'>{title}</div>
    );
  }
}
