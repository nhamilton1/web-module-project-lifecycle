import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import GitFollowers from './GitFollowers'


class GitUser extends React.Component {
    render() {
        return (
            <>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.user.avatar_url} alt={this.props.user.avatar_url}/>
                <Card.Body>
                    <Card.Title>{this.props.user.name}</Card.Title>
                    <Card.Text>
                            {this.props.user.login} has a {this.props.user.public_repos} public repos.
                        They have a total of {this.props.user.followers} followers and are following {this.props.user.following} people.
                    </Card.Text>
                    <Button variant="primary" href={this.props.user.html_url} target='_blank'>Go to thier GitHub</Button>
                </Card.Body>
            </Card>
                    {
                        this.props.followers.map(follows => (
                            <GitFollowers key={Math.random()} follows={follows}/>
                        ))
                    }
            </>
        )
    }
}

export default GitUser
