import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { ListItem } from 'material-ui/List'

class SideBarItem extends Component {
  render() {
    return (
      <NavLink
        activeClassName="active"
        exact={this.props.isExact}
        to={this.props.linkTo}
        key={this.props.i}
      >
        <ListItem
          hoverColor="#eee"
          primaryText={this.props.primaryText}
          onTouchTap={this.props.onClick}
        />
      </NavLink>
    )
  }
}

export default SideBarItem
