import React from 'react';
import { Link } from 'react-router';
import './bottomBanner.less';

export default class bottomBanner extends React.Component {
  constructor (props) {
    super(props)
    this.state = { modalActive: false }
  }

  openModal () {
    this.setState({ modalActive: true })
  }

  closeModal () {
    this.setState({ modalActive: false })
  }


  render() {
    return (
      <div className="bottomBanner row">
        <div className="copyRight col-sm-6">
          <div>©2017 Labours </div>
          <div className="recordcode">
            <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11010802023647" target="_blank">
            <div className="police-icon"></div>
            京公网安备11010802023647号
            </a>
          </div>
        </div>
        <div className="col-sm-6 socialNetworks">
          <div className="wechat-logo" onClick={::this.openModal}/>
          <div className='logo-title'>关注我们: </div>
        </div>
        <div className="col-sm-12">
          {this.state.modalActive && (
            <div className='modalDialog'>
              <a title='Close' className="closeIcon" onClick={::this.closeModal}>X</a>
              <div className="wechat-code" />
            </div>
          )}
        </div>
      </div>
    );
  }
}