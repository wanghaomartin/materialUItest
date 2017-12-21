import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import { white } from 'material-ui/styles/colors';
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import FileCloudDownload from 'material-ui/svg-icons/file/cloud-download';
import SvgIcon from 'material-ui/SvgIcon';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
import MenuItem from 'material-ui/MenuItem';
import IconMenu from 'material-ui/IconMenu';
class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <AppBar
            title="img"
            iconElementRight={<IconButton style={{ padding: "0px" }}>
              <div><img width="40" height="40" src={logo} style={{ animation: "App-logo-spin infinite 20s linear" }} alt="react" /></div>
            </IconButton>}
          />
          <AppBar
            title="FontIcon(material-icons)"
            iconElementRight={<IconButton><FontIcon className="material-icons" color={white}>live_tv</FontIcon></IconButton>}
          />
          <AppBar
            title="NavigationClose"
            iconElementRight={<IconButton><NavigationClose /></IconButton>}
          />
          <AppBar title="IconButton(material-icons)" iconElementRight={<IconButton iconClassName="material-icons" tooltip="家">home</IconButton>}
          />
          <AppBar title="IconButton(svg-icons)" iconElementRight={<IconButton><FileCloudDownload color={white} /></IconButton>}
          />
          <AppBar
            title="Title"
            style={{backgroundColor: "gray"}}
            iconElementLeft={<IconButton><NavigationClose /></IconButton>}
            iconElementRight={
              <IconMenu
                iconButtonElement={
                  <IconButton><MoreVertIcon /></IconButton>
                }
                targetOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
              >
                <MenuItem primaryText="Refresh" />
                <MenuItem primaryText="Help" />
                <MenuItem primaryText="Sign out" />
              </IconMenu>}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
