import React, { Component } from 'react';
import Resource from './Resource.jsx';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ResourcesList extends Component {
  render() {
    var result;
    if(this.props.resources == undefined || this.props.resources.length == 0){
      result = <div>No hay recursos registrados</div>;
    } else {
      result = <ul className="accordion" data-accordion data-allow-all-closed="true">
        { this.props.resources.map((resource) => (
          <Resource resource={resource} key={resource._id} />
        ))}
      </ul>
    }
    return (
      <div className="row columns">
        <ReactCSSTransitionGroup 
          transitionName="example"
          transitionLeaveTimeout={300}
          transitionEnterTimeout={300}
          transitionAppear={true}
          transitionAppearTimeout={500}>
          {result}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}