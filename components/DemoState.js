import React, { Component } from 'react';
import { Button, Text, View } from 'react-native';

export default class DemoState extends Component {
    state = {
        myState: []
    }
    updateState = () => {
        // Put the call from the Backend. Either Promise / Fetch / Axios
        let item = "setTime..." + Date.now();  // take dynamic value form object
        var myArray = this.state.myState;
        myArray.push(item)
        this.setState({ myState: myArray })
    }
    render() {
        return (
            <View>
                <Button title="Press Me" onPress={this.updateState}></Button>
                <Text>
                {this.state.myState.map((company, index) => {
                return <Text key={index}>{company}</Text>
                })
          } </Text>
            </View>
        );
    }
}