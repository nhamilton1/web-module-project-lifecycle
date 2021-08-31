import React from 'react'

class GitUser extends React.Component {
    render() {
        return (
            <>
                <img 
                    width={200}
                    src={this.props.user.avatar_url} 
                    alt={this.props.user.avatar_url} 
                    key={Math.random()} 
                />
                <p>Name: {this.props.user.name}</p>
                <p>Username: {this.props.user.login}</p>
            </>
        )
    }
}

export default GitUser
