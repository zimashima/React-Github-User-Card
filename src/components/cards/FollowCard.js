import React, {Component} from 'react'

import {Card, CardMedia, CardContent, CardActionArea,Typography} from '@material-ui/core'


class FollowCard extends Component {
    render(){
        return (
            <Card className="followCard">
                <CardActionArea href={this.props.userData.html_url}>
                <div className="followImgContainer">
                <CardMedia component="img" src={this.props.userData.avatar_url}/>
                </div>
                <CardContent>
                    <Typography variant="subtitle1">{this.props.userData.login}</Typography>
                </CardContent>
                </CardActionArea>
            </Card>
        )
    }
};

export default FollowCard;