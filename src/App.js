import React, { Component } from "react";
import ApolloClient, { gql } from "apollo-boost";
import { ApolloProvider, Query } from "react-apollo";
import logo from "./logo.svg";
import "./App.css";

const client = new ApolloClient({
    uri: "/.netlify/functions/graphql"
});

const helloQuery = gql`
    {
        hello
    }
`;

const LambdaDemo = () => (
    <ApolloProvider client={client}>
        <Query query={helloQuery}>
            {({ data }) => <div>A greeting from the server: {data.hello}</div>}
        </Query>
    </ApolloProvider>
);

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <LambdaDemo />
                </header>
            </div>
        );
    }
}

export default App;
