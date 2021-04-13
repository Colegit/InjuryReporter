import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import TimelineIcon from '@material-ui/icons/Timeline';
import EditIcon from '@material-ui/icons/Edit';
import {Link, Route, Switch, BrowserRouter as Router, withRouter} from 'react-router-dom'

import { spacing } from '@material-ui/system';

import Analytics from './analytics'

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
}));

const TheDrawer = () => {
    const classes = useStyles()
  
const AnalyticsLink = () => {

  return <Link to= "/analytics" component={Analytics} />

}





    return(

      
        <div className={classes.root}>
        <CssBaseline />
        
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" noWrap>
              Injury Reporter
            </Typography>
          </Toolbar>
        </AppBar>

      <Drawer
        p={20}
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        
      >
        <div className={classes.toolbar} />
        <Divider />

       

        

        <List>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                  <ListItemText primary="Home"></ListItemText>
            </ListItem>
        </List>

        <List>


            <ListItem button component={Link} to="/analytics">
                <ListItemIcon>
                  <TimelineIcon/>
                </ListItemIcon>
                  <ListItemText primary="Data Dashboard"></ListItemText>
            </ListItem>
 

        </List>

        <List>
            <ListItem button component={Link} to="/edit">
                <ListItemIcon>
                  <EditIcon/>
                </ListItemIcon>
                  <ListItemText primary="Make Edits"></ListItemText>
            </ListItem>
        </List>






       



        </Drawer>


        </div>
        
    )
}

export default TheDrawer;