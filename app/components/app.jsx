import React from 'react';
import './app.less';
import { Router, Route, Link, hashHistory, browserHistory } from 'react-router';
import Brief from './brief.jsx';
import Strategy from './strategy.jsx';
import Emergency from './emergency.jsx';
import Prevent from './prevent.jsx';
import TimelineComponent from './timelineComponent.jsx';
import Slider from "./slider.jsx";
import Post from './post.jsx'
import BlogMainPage from './blogMainPage';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={Slider}/>
        <Route path="/intro" component={Brief} />
        <Route path="/intro/brief" component={Brief} />
        <Route path="/intro/strategy" component={Strategy} />
        <Route path="/intro/timeline" component={TimelineComponent} />
        <Route path="/solution/emergency" component={Emergency} />
        <Route path="/solution/prevent" component={Prevent} />
        <Route path="/blogs/:post_id" component={Post} />
        <Route path="/blogs" component={BlogMainPage} />
      </Router>
    );
  }
}
