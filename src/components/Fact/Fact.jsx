import React, { Component } from 'react';
import r from '../../config/data';

class Fact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      isLoaded: false
    };

    this.randomFact = this.randomFact.bind(this);
  }

  async componentDidMount() {
    const posts = await r.getSubreddit('todayilearned').getHot({ limit: 5 });
    const post = posts[Math.floor(Math.random() * Math.max(4))];
    this.setState({
      post,
      isLoaded: true
    });
  }

  async randomFact() {
    const binaryNum = Math.floor(Math.random() * Math.max(2));

    let post, posts;
    switch (binaryNum) {
      case 0:
        posts = await r.getSubreddit('todayilearned').getHot({ limit: 10 });
        post = posts[Math.floor(Math.random() * Math.max(9))];
        break;
      case 1:
        posts = await r.getSubreddit('todayilearned').getNew({ limit: 10 });
        post = posts[Math.floor(Math.random() * Math.max(9))];
        break;
      default:
        return;
    }

    this.setState({
      post,
      isLoaded: true
    });
  }

  render() {
    const { post, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <h2>{post.title}</h2>
          <button onClick={this.randomFact}>Click me for random fact</button>
        </div>
      );
    }
  }
}

export default Fact;
