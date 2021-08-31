import React from 'react'

class GitFollowers extends React.Component {
    render(){
        return(
            <div key={Math.random()} className='followers'>
                <img 
                    width={200}
                    src={this.props.follows.avatar_url} 
                    alt={this.props.follows.avatar_url} 
                    key={Math.random()} 
                />
                    <p>Username: {this.props.follows.username}</p>
                    <p>Name: {this.props.follows.name}</p>               
            </div>
        )
    }
}

export default GitFollowers