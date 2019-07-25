import React, { Component } from 'react';
import r from '../../config/data';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      isLoaded: false
    };

    this.getHotSub = this.getHotSub.bind(this);
    this.getNewSub = this.getNewSub.bind(this);
  }

  async componentDidMount() {
    const posts = await r.getSubreddit('news').getHot({ limit: 5 });

    this.setState({
      posts,
      isLoaded: true
    });
  }

  async getNewSub() {
    const posts = await r.getSubreddit('news').getNew({ limit: 5 });
    this.setState({
      posts,
      isLoaded: true
    });
  }

  async getHotSub() {
    const posts = await r.getSubreddit('news').getHot({ limit: 5 });

    this.setState({
      posts,
      isLoaded: true
    });
  }

  render() {
    const { posts, isLoaded } = this.state;
    if (!isLoaded) {
      return <div>Loading</div>;
    } else {
      return (
        <div>
          <ul>
            {posts.map(post => (
              <li key={post.url}>
                <a href={post.url}>{post.title}</a>
              </li>
            ))}
          </ul>
          <button onClick={this.getNewSub}>Click me for hot news</button>
          <button onClick={this.getHotSub}>Click me for latest news</button>
        </div>
      );
    }
  }
}

export default Home;
