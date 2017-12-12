import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import { Segment, Dimmer, Loader, List, Header, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


class Menu extends Component {
  state = { product: {}, loaded: false };

  componentDidMount() {
    const productId = this.props.match.params.id;

    axios.get(`/api/products/${productId}`)
      .then( res => {
        this.setState({ product: res.data, loaded: true });
      })
      .catch( err => {
        console.log(err);
    });
  }

  render() {
    if(this.state.loaded)
      return(
        <Segment>
          { this.displayProduct() }
        </Segment>
      )
    else
      return(
        <Dimmer active>
          <Loader>Loading Product...</Loader>
        </Dimmer>
      )
  }
}

export default Menu;