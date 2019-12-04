import React, {Component} from 'react'

import FollowCard from './FollowCard'

import axios from 'axios'

import {Paper} from '@material-ui/core'

class FollowerList extends Component {

    constructor(){
        super();
        this.state = {
            followers: []
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/zimashima/followers')
        .then (res => {
            console.log(res.data)
            this.setState({
                followers: res.data
            })
        })
    }

    render(){
        return (
          <Paper className="displayList">
            {
                this.state.followers.map( flw => (
                    <FollowCard userData={flw}/>
                ))
            }
          </Paper>
        )
    }
};

export default FollowerList;