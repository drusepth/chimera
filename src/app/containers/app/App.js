// @flow weak

import React, {
  Component
}                           from 'react';
import PropTypes            from 'prop-types';
import { appConfig }        from '../../config';
import AppBar               from 'material-ui/AppBar';
import Drawer               from 'material-ui/Drawer';
import MenuItem             from 'material-ui/MenuItem';
import IconButton           from 'material-ui/IconButton';
import IconMenu             from 'material-ui/IconMenu';
import MoreVertIcon         from 'material-ui/svg-icons/navigation/more-vert';
import {
  green800
}                           from 'material-ui/styles/colors';
import MainRoutes           from '../../routes/MainRoutes';
import { withRouter }       from 'react-router';

// Icons
import GroupWork            from 'material-ui/svg-icons/action/group-work';
import Face                 from 'material-ui/svg-icons/action/face';
import Accessibility        from 'material-ui/svg-icons/action/accessibility';
import Help                 from 'material-ui/svg-icons/action/help';
import Dashboard            from 'material-ui/svg-icons/action/dashboard';
import SettingsVoice        from 'material-ui/svg-icons/action/settings-voice';
import Wallpaper            from 'material-ui/svg-icons/device/wallpaper';

class App extends Component {
  static propTypes = {
    // react-router 4:
    match:    PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history:  PropTypes.object.isRequired
  };

  static contextTypes = {};

  state = {
    appName:      appConfig.APP_NAME,
    drawerOpened: true,
    drawerMenus:  appConfig.DRAWER.menus
  };

  render() {
    const {
      drawerOpened,
      drawerMenus,
      appName
    } = this.state;

    return (
      <div>
        <Drawer
          open={drawerOpened}
          docked={true}
          onRequestChange={this.handlesOnDrawerRequestChange}
          style={{zIndex: 1000}}>
          <div style={{backgroundColor:green800, height: '64px'}} />
          {
            drawerMenus.map(
              ({id, icon, title, routeName}, menuIdx) => (
                <MenuItem
                  key={menuIdx}
                  leftIcon={this.iconForMenuItem(icon)}
                  onTouchTap={this.routeTo(routeName)}>
                  {title}
                </MenuItem>
              )
            )
          }
        </Drawer>
        <AppBar
          title={appName}
          onLeftIconButtonTouchTap={this.handlesOnLeftIconButtonTouchTap}
          iconElementRight={
            <IconMenu
              iconButtonElement={
                <IconButton>
                  <MoreVertIcon color={'#FFFFFF'} />
                </IconButton>
              }
              targetOrigin={{horizontal: 'right', vertical: 'top'}}
              anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
              {
                drawerMenus.map(
                  ({id, icon, title, routeName}, menuIdx) => (
                    <MenuItem
                      key={menuIdx}
                      primaryText={title}
                      rightIcon={this.iconForMenuItem(icon)}
                      onTouchTap={this.routeTo(routeName)}
                    />
                  )
                )
              }
            </IconMenu>
          }
        />
        <MainRoutes />
      </div>
    );
  }

  iconForMenuItem = (iconName) => {
    if (iconName == 'GroupWork') {
      return <GroupWork />;
    } else if (iconName == 'Face') {
      return <Face />;
    } else if (iconName == 'Accessibility') {
      return <Accessibility />;
    } else if (iconName == 'Help') {
      return <Help />;
    } else if (iconName == 'Dashboard') {
      return <Dashboard />
    } else if (iconName == 'SettingsVoice') {
      return <SettingsVoice />
    } else if (iconName == 'Wallpaper') {
      return <Wallpaper />
    } else {
      return <Help />;
    }
  }

  openDrawer = () => {
    this.setState({drawerOpened: true});
  }

  closeDrawer = () => {
    this.setState({drawerOpened: false});
  }

  toggleDrawer = () => {
    const { drawerOpened } = this.state;
    this.setState({drawerOpened: !drawerOpened});
  }

  routeTo = routeName => event => {
    event.preventDefault();
    const { history } = this.props;
    history.push({pathname: routeName});
  }

  handlesOnDrawerRequestChange = (open) => {
    this.setState({drawerOpened: open});
  }

  handlesOnLeftIconButtonTouchTap = (event) => {
    event.preventDefault();
    this.toggleDrawer();
  }
}

export default withRouter(App);
