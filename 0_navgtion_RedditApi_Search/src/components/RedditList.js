import React, {Component} from "react";
import {ScrollView, TextInput} from "react-native";
import axios from "axios";
import RedditDetail from "./RedditDetail";


class RedditList extends Component {

        componentWillMount(){
            this.state = {
                reddit: [],
                search: 'gifs'
            };
            axios.get('https://www.reddit.com/r/' + this.state.search + '/top/.json?limit=10&sort=hot')
                .then(response => this.setState({reddit: response.data.data.children}))
                .catch((error) => {
                    console.log("Api call error");
                });
        }



    Search(text) {

        this.setState({search: text});

        setTimeout(() => {
            axios.get('https://www.reddit.com/r/' + this.state.search + '/top/.json?limit=10&sort=hot')
                .then(response => this.setState({reddit: response.data.data.children}))
                .catch((error) => {
                    console.log("Api call error");
                });
        }, 500);


    }


    renderData() {
        console.log(this.state);
        return this.state.reddit.map(reddit =>
            <RedditDetail key={reddit.data.title} reddit={reddit}/>
        );
    }


    render() {


        return (

            <ScrollView>
                <TextInput
                    value={this.state.search}
                    onChangeText={this.Search.bind(this)}
                    placeholder="Search"
                />

                {this.renderData()}
            </ScrollView>
        );
    }
}

export  default RedditList;