import React from 'react'
import { Button, Card } from 'react-bootstrap'

class GitFollowers extends React.Component {
    render(){
        return(
            <>
            <Card 
                key={Math.random()} 
                className='followers' 
                style={{width: '400px', display: 'flex', flexDirection: 'row'}}>
                <Card.Img 
                    variant="top" 
                    src={this.props.follows.avatar_url} 
                    alt={this.props.follows.avatar_url} 
                    style={{width: '200px'}}
                />
                <Card.Body>
                    <Card.Title>{this.props.follows.login}</Card.Title>
                    <Card.Text>     
                    </Card.Text>
                    <Button variant="primary" href={this.props.follows.html_url} target='_blank' >Go to Thier GitHub</Button>
                </Card.Body> 
            </Card>
            </>
        )
    }
}

export default GitFollowers