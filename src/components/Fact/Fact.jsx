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
    const limit = 5;
    const maxNum = limit - 1;
    const subReddit = 'todayilearned';

    const posts = await r.getSubreddit(subReddit).getHot({ limit: limit });
    const post = posts[Math.floor(Math.random() * Math.max(maxNum))];
    this.setState({
      post,
      isLoaded: true
    });
  }

  async randomFact() {
    const limit = 10;
    const maxNum = limit - 1;
    const subReddit = 'todayilearned';

    let num = Math.floor(Math.random() * Math.max(3));

    let post, posts;
    switch (num) {
      case 0:
        posts = await r.getSubreddit(subReddit).getHot({ limit: limit });
        post = posts[Math.floor(Math.random() * Math.max(maxNum))];
        break;
      case 1:
        posts = await r.getSubreddit(subReddit).getNew({ limit: limit });
        post = posts[Math.floor(Math.random() * Math.max(maxNum))];
        break;
      case 2:
        num = Math.floor(Math.random() * Math.max(3));
        switch (num) {
          case 1:
            posts = await r
              .getSubreddit(subReddit)
              .getTop({ limit: limit, time: 'all' });
            post = posts[Math.floor(Math.random() * Math.max(maxNum))];
            break;
          case 2:
            posts = await r
              .getSubreddit(subReddit)
              .getTop({ limit: limit, time: 'year' });
            post = posts[Math.floor(Math.random() * Math.max(maxNum))];
            break;
          case 3:
            posts = await r
              .getSubreddit(subReddit)
              .getTop({ limit: limit, time: 'month' });
            post = posts[Math.floor(Math.random() * Math.max(maxNum))];
            break;
          default:
            return;
        }
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
          <h2>
            {post.title
              .split('TIL')[1]
              .charAt(1)
              .toUpperCase() + post.title.split('TIL')[1].slice(2)}
          </h2>
          <button onClick={this.randomFact}>Click me for random fact</button>
        </div>
      );
    }
  }
}

export default Fact;
