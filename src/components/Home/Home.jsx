import React, { Component } from 'react';

import r from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      post: '',
      isLoaded: false
    };

    this.randomFact = this.randomFact.bind(this);
  }

  async componentDidMount() {
    const limit = 10;
    const maxNum = limit - 1;
    const subReddit = 'facts';

    const posts = await r.getSubreddit(subReddit).getHot({ limit: limit });
    const post = posts[Math.floor(Math.random() * Math.max(maxNum))];
    this.setState({
      post,
      isLoaded: true
    });
  }

  async randomFact() {
    this.setState({
      isLoaded: false
    });
    const limit = 10;
    const maxNum = limit - 1;
    const subReddit = 'facts';

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
          case 0:
            posts = await r
              .getSubreddit(subReddit)
              .getTop({ limit: limit, time: 'all' });
            post = posts[Math.floor(Math.random() * Math.max(maxNum))];
            break;
          case 1:
            posts = await r
              .getSubreddit(subReddit)
              .getTop({ limit: limit, time: 'year' });
            post = posts[Math.floor(Math.random() * Math.max(maxNum))];
            break;
          case 2:
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
      return (
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-lg my-48">
          <div className="mx-auto pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">Loading</h4>
          </div>
        </div>
      );
    } else {
      return (
        <div className="max-w-sm mx-auto flex p-6 bg-white rounded-lg shadow-lg my-48">
          <div className="ml-6 pt-1">
            <h4 className="text-xl text-gray-900 leading-tight">
              {post.title}
            </h4>
            <button
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-8"
              onClick={this.randomFact}
            >
              Random Fact
            </button>
          </div>
        </div>
      );
    }
  }
}

export default Home;
