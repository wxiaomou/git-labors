import React from 'react';
import { Link } from 'react-router';

import MenuModal from './subComponents/MenuModal.jsx';
import './navFrame.less';

export default class NavFrame extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenuModal: false,
    };
    this.toggleMenuModal = ::this.toggleMenuModal;
  }
  toggleMenuModal() {
    const state = this.state.openMenuModal;
    // Update state: modal visibility and its content
    this.setState({ openMenuModal: !state });
  }
  render() {
    const {
      currentIndex,
      children,
    } = this.props;
    const menuOpenClass = this.state.openMenuModal ? "menuOpenClass" : "";
    return (
      <div className="nav-frame">
        <div className={`content-container ${menuOpenClass}`}>
          {children}
           <div className="menu-nav-bar">
            <i className="fa fa-bars nav-bars fa-2x" aria-hidden="true" onClick={this.toggleMenuModal}></i>
          </div>
          <div className="cover" onClick={this.toggleMenuModal}></div>
        </div>

        <MenuModal show={this.state.openMenuModal} onClose={this.toggleMenuModal}>
          <div>
            <Link className="menu-title-link" to={{ pathname: '/', state: {currentIndex: 0} }} style={{ textDecoration: 'none' }}>
              <li className={`menu-title menu-title-0 ${currentIndex === 0 ? 'selected' : ''}`}>欢迎主页</li>
            </Link>
            <Link className="menu-title-link" to={{ pathname: '/', state: {currentIndex: 1} }} style={{ textDecoration: 'none' }}>
              <li className={`menu-title menu-title-1 ${currentIndex === 1 ? 'selected' : ''}`}>解决方案</li>
            </Link>
            <Link className="menu-title-link" to={{ pathname: '/', state: {currentIndex: 2} }} style={{ textDecoration: 'none' }}>
              <li className={`menu-title menu-title-2 ${currentIndex === 2 ? 'selected' : ''}`}>洞察与方法</li>
            </Link>
            <Link className="menu-title-link" to={{ pathname: '/', state: {currentIndex: 3} }} style={{ textDecoration: 'none' }}>
              <li className={`menu-title menu-title-3 ${currentIndex === 3 ? 'selected' : ''}`}>公司动态</li>
            </Link>
            <Link className="menu-title-link" to={{ pathname: '/', state: {currentIndex: 4} }} style={{ textDecoration: 'none' }}>
              <li className={`menu-title menu-title-4 ${currentIndex === 4 ? 'selected' : ''}`}>加入我们</li>
            </Link>
            <Link  className="menu-title-link" to={'/blogs'} style={{ textDecoration: 'none' }}>
              <li className="blogLink menu-title">Blog</li>
            </Link>
          </div>
        </MenuModal>
      </div>
    );
  }
}
