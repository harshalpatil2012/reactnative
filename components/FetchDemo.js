import React, {Component} from 'react';

import axios from 'axios';
import { Text, View } from 'react-native';

class FetchDemo extends Component {
   constructor(props){
   
     super(props);     
     this.state = {
       users: []       
     }     
   }

   componentDidMount() {

      axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const users = res.data;
        this.setState({ users });
      })
      .catch(error => {
         this.setState({users:null})
        //  console.log('error', error);
      })
   }
  

  render() {
    return (
      <View>
        <Text>Fetch User...</Text>
        
          {this.state.users && this.state.users.map(user =>
            <Text key={user.id}>{user.username} &gt; {user.email}</Text>
          )}
        <Text>End</Text>
      </View>
    );
  }
}

export default FetchDemo;