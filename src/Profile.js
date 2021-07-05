import React, { Component } from 'react'
import { withAuth0 } from '@auth0/auth0-react';
export class Profile extends Component {
    render() {
        return (
            <div style={{textAlign:"center"}}>
                {this.props.auth0.isAuthenticated &&
                  < >
                  <h1>{this.props.auth0.user.name}</h1>
                 <img src={this.props.auth0.user.picture}/>
                 <h1>{this.props.auth0.user.email}</h1>
                  </>

                }
            </div>
        )
    }
}

export default withAuth0(Profile)
