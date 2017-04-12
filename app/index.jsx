import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app.jsx';
import 'font-awesome/css/font-awesome.min.css';
import './index.less';

// 如果使用jQuery
// let $ = require('jquery');

ReactDOM.render((
    <App />
  ), document.getElementById('app')
);
