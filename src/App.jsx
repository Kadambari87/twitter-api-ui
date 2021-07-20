import React from 'react';
import CreateTweet from './CreateTweet';

class App extends React.Component {
  render() {
        return (
            <div className="container">
            <h3 className="p-3 text-center">React HTTP POST Requests with Fetch</h3>
            <CreateTweet/>
            </div>
          );
        }
}

export { App };
