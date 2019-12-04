import React, {Component} from 'react'

import {Button, Card, CardActions, CardActionArea, CardMedia, CardContent, Typography} from '@material-ui/core'

import {GitHub, LocationCity, Face} from '@material-ui/icons'

import axios from 'axios'
import {Dialog, DialogTitle, DialogContent} from '@material-ui/core'

import FollowerList from './FollowerList'
import FollowingList from './FollowingList'

import GitHubCalendar from 'github-calendar'



class UserCard extends Component {
    constructor(){
        super();
        this.state = {
            user: {},
            toggleFollower: false,
            toggleFollwing: false
        }
    }

    componentDidMount(){
        axios.get('https://api.github.com/users/zimashima')
        .then (res => {
            console.log(res.data)
            this.setState({user: res.data})
            })
    }

    toggleOpenFollower = () =>{
        this.setState({
            toggleFollower: true
        })
    }

    toggleCloseFollower = () =>{
        this.setState({
            toggleFollower: false
        })
    }

    toggleOpenFollowing = () =>{
        this.setState({
            toggleFollowing: true
        })
    }

    toggleCloseFollowing = () =>{
        this.setState({
            toggleFollowing: false
        })
    }

    render(){
        GitHubCalendar(".calendar", "zimashima", { responsive: true })
        return (
          <div>
            <Card className="userCard">
                <div className="imageContainer">
                <CardMedia component="img" src={this.state.user.avatar_url}/>
                </div>
                <div className="content">
                    <CardActionArea>
                <CardContent>
                    <Typography variant="h3" color="textSecondary">{this.state.user.name}</Typography>
                    <Typography variant="body1" color="textPrimary">{this.state.user.bio}</Typography>
                    <Face />{this.state.user.login}<br />
                    <GitHub /> {this.state.user.html_url}<br />
                    <LocationCity />{this.state.user.location}<br />
                </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button color="primary" onClick={this.toggleOpenFollower}>Followers </Button>
                    <Dialog open={this.state.toggleFollower} onClose={this.toggleCloseFollower}>
                        <DialogTitle>{this.state.user.name}'s Followers</DialogTitle>
                        <DialogContent>
                            <FollowerList />
                        </DialogContent>
                    </Dialog>
                    
                    <Button color="primary" onClick={this.toggleOpenFollowing}> Following</Button>
                    <Dialog open={this.state.toggleFollowing} onClose={this.toggleCloseFollowing}>
                        <DialogTitle>{this.state.user.name}'s Following</DialogTitle>
                        <DialogContent>
                            <FollowingList />
                        </DialogContent>
                    </Dialog>

                </CardActions>
                </div>
            </Card>
            <div className="calendar">
            </div>
          </div>
        )
    }
};

export default UserCard;