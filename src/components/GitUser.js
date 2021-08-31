import React from 'react'
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import GitFollowers from './GitFollowers'


class GitUser extends React.Component {
    render() {
        // console.log('GitUser test', this.props.followers)
        return (
            <>
            <Card style={{ width: '18rem' }}>
             <Card.Img variant="top" src={this.props.user.avatar_url} alt={this.props.user.avatar_url}/>
                <Card.Body>
                    <Card.Title>{this.props.user.name}</Card.Title>
                    <Card.Text>
                    <p>Username: {this.props.user.login}</p>
                    </Card.Text>
                    <Button variant="primary">Go to thier GitHub</Button>
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
