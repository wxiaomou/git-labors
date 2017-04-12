import React from 'react';
import './MenuModal.less';

export default class MenuModal extends React.Component {
  render() {
    const { show } = this.props;
    const display = show ? "show" : "hide";
    return (
      <div className={`modal-wrapper ${display}`}>
        <i className="fa fa-times fa-3x" aria-hidden="true"
            onClick={this.props.onClose}></i>
        <div className="modal-item">
          { this.props.children }
        </div>
      </div>
    )
  }
}

