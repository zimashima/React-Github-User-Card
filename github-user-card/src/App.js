import React, {Component} from 'react';
import './App.css';

import UserCard from './components/cards/UserCard'


import {Container} from '@material-ui/core'

class App extends Component{

  render(){
    return (
      <Container>
        <UserCard />
      </Container>
    )
  }

}
export default App;
