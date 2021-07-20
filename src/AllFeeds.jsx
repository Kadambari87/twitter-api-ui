import React from 'react';

class AllFeeds extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          message: null
      };
  }

  componentDidMount() {
      // Simple GET request to fetch all feeds
      const requestOptions = {
          method: 'GET',
          headers: { 'Content-Type': 'application/json',
                     'Access-Control-Allow-Origin': '*' }
      };
      fetch('https://rbzx7rki00.execute-api.eu-west-1.amazonaws.com/Prod/tweets/', requestOptions)
          .then(response => response.json())
          .then(data => this.setState({ message: data.message }));
  }

  render() {
      const { message } = this.state;
      return (
          <div className="card text-center m-3">
              <h5 className="card-header">Simple POST Request</h5>
              <div className="card-body">
                  All feeds: {message}
              </div>
          </div>
      );
  }
}

export default AllFeeds;
