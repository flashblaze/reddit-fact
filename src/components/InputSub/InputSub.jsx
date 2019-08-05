import React, { Component } from 'react';

class InputSub extends Component {
  state = {
    subreddit: ''
  };

  onChange = e => {
    this.setState({
      subreddit: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    console.log(this.state.subreddit);
    this.setState({
      subreddit: ''
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input
            className="bg-white focus:outline-none border focus:shadow-md border-gray-300 rounded-lg py-2 px-4 block max-w-md appearance-none leading-normal mx-auto mt-24"
            type="text"
            placeholder="Enter subreddit"
            value={this.state.subreddit}
            onChange={this.onChange}
          />
        </form>
      </div>
    );
  }
}

export default InputSub;
