import React from 'react';

class CreateTweet extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: null
        };
    }

    componentDidMount() {
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
                       'Access-Control-Allow-Origin': '*' }
        };
        fetch('https://xf93qzt2n6.execute-api.eu-west-1.amazonaws.com/Prod/tweets/1234/', requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ message: data.message }));
    }

    render() {
        const { message } = this.state;
        return (
            <div className="card text-center m-3">
                <h5 className="card-header">Simple POST Request</h5>
                <div className="card-body">
                    Tweeted post id: {message}
                </div>
            </div>
        );
    }
}

export default CreateTweet;
