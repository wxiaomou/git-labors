import React from 'react';
import { Link } from 'react-router';
import './buttomBanner.less';

export default class InfoCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      copyRight,
      wechat,
    } = this.props;
    if (!copyRight) {
      return (
        <div className="buttomBanner">
          <div className="copyRight">
            <div>©2017 Labours </div>
            <div className="recordcode">
              <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=11000002000001" target="_blank">
              <div className="police-icon"></div>
              京公网安备11000002000001号
              </a>
            </div>
          </div>
          <div className="socialNetworks">
            <ul>
            <li>关注我们: </li>
            <li><div className="wechat-logo" /></li>
            </ul>
          </div>
        </div>
      );
    }
  }
}