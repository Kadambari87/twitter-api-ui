import React from 'react';
import Login from './Login';

class App extends React.Component {
  render() {
        return (
            <div className="container">
            <h3 className="p-3 text-center">Welcome To Tweets Login</h3>
            <Login/>
            </div>
          );
        }
}

export { App };
