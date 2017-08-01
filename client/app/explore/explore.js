import React from 'react';
import fetch from 'node-fetch';

import Experience from './experience';
import './explore.css';

import postObject from './SampleData';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      postObject: postObject
    };
  }

  getExperiences = () => {
    return (
      <div className="experiences">
        <Experience
          image={postObject.image}
          caption={postObject.caption}
          position={postObject.position}/>
        <Experience
          image={postObject.image}
          caption={postObject.caption}
          position={postObject.position}/>
      </div>
    );
  };

  setPostObject = (text) => {
    console.log(text);
    this.setState({postObject: JSON.parse(text)});
  };

  componentDidMount() {
    //axios.get('http://localhost:8080/api/posts/explore')
    //  .then(resText => this.setPostObject(resText.data));
  }

  render() {
    return (
      <div>
        {this.state.postObject && this.getExperiences()}
      </div>
    );
  }
}
