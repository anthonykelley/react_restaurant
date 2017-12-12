import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { 
  Segment, 
  Header, 
  Dimmer, 
  Loader,
  List,
} from 'semantic-ui-react';
import axios from 'axios';


class Menu extends Component {
  state = { menus: [] };

  componentDidMount() {
    axios.get('/api/menus')
      .then( res => {
        this.setState({ menus: res.data});
      })
      .catch( err => {
        console.log(err);
    });
  }

  displayMenus = () => {
    return this.state.menus.map( menu => {
      return(<List.Item>{menu.name}</List.Item>);
    })
  }

  menusLoader() {
    return(
      <Dimmer active>
        <Loader>Loading Menu...</Loader>
      </Dimmer>
    )
  }

  render() {
    return(
      <Segment basic>
        { this.state.menus.length > 0 ?
          <List>
            {this.displayMenus()}
          </List> :
          this.menusLoader()
        }
      </Segment>
    )
  }
}

export default Menu;