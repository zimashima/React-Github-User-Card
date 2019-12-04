import React, {Component} from 'react'

import FollowCard from './FollowCard'

import axios from 'axios'

import {Paper} from '@material-ui/core'

class FollowingList extends Component {

    constructor(){
        super();
        this.state = {
            following: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/zimashima/following')
        .then (res => {
            console.log(res.data)
            this.setState({
                following: res.data
            })
        })
    }

    render(){
        return (
          <Paper className="displayList">
            {
                this.state.following.map( flw => (
                    <FollowCard userData={flw}/>
                ))
            }
          </Paper>
        )
    }
};

export default FollowingList;