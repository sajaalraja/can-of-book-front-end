import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron,Form,Button} from 'react-bootstrap';
import './BestBooks.css';
import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      listofbooks: [],
      email:'',
      disply:false
    }
  }

  componentDidMount = () => {
    // const urlhttp = 'http://localhost:8000/books?email=samah.abujweed@yahoo.com';
    // axios.get(urlhttp).then(res => {
    //   this.setState({
    //     listofbooks: res.data,
    //   })
    //   console.log(res.data)
    // })
    if (this.props.auth0.isAuthenticated) {
      this.props.auth0.getIdTokenClaims()
        .then(res => {
          const jwt = res.__raw;
          const config = {
            headers: { "Authorization": `Bearer ${jwt}` },
            method: 'get',
            baseURL: process.env.REACT_APP_SERVER_URL,
            url: '/authorize'
          }
          axios(config).then(response => { console.log(response.data) })
            .catch(err => console.log(err));
        }).catch(err => console.log(err));
    }
  }
  emailInput=(e)=>{
    this.setState({
      email:e.target.value
    })
  }
  sentreq = (e)=>{
    e.preventDefault();
    const urlhttp = `http://localhost:8000/books?email=${this.state.email}`;
    axios.get(urlhttp).then(res => {
      
      this.setState({
        listofbooks: res.data,
        disply:true
      })
    }).catch(
      this.setState({
        disply:false
      })
    );
      
  }
  render() {
    return (
      <Jumbotron className="text" >
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" onChange={(e)=>{this.emailInput(e)}} />
          </Form.Group>
          <Button onClick={(e)=>{this.sentreq(e)}} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <ol>
          {
            this.state.disply && this.state.listofbooks.map(item => {
              return <li>
                {item.name}
              </li>
            })
          }
        </ol>
      </Jumbotron>
    )
  }
}

export default withAuth0(MyFavoriteBooks);
