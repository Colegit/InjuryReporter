import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
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



import clsx from 'clsx';

import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    padding: theme.spacing(1)
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    
  },
  mainPage: theme.mixins.toolbar,
  drawerPaper: {
    width:drawerWidth
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

const TheDrawer = () => {
    const classes = useStyles()
    const theme = useTheme();
    const [open, setOpen] = React.useState(false)
  
const AnalyticsLink = () => {

  return <Link to= "/analytics" component={Analytics} />

}

const handleDrawerOpen = () => {
  setOpen(true);
}

const handleDrawerClose = () => {
  setOpen(false);
}

    return(

      
        <div className={classes.root}>
        <CssBaseline />

        <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, {
              [classes.hide]: open,
            })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Injury Reporter
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(classes.drawer, {
          [classes.drawerOpen]: open,
          [classes.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [classes.drawerOpen]: open,
            [classes.drawerClose]: !open,
          }),
        }}
      >

        <div className={classes.toolbar}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </div>
        <Divider />

        
        <List>
            <ListItem button component={Link} to="/">
                <ListItemIcon>
                  <HomeIcon/>
                </ListItemIcon>
                  <ListItemText primary="Home"></ListItemText>
            </ListItem>
        </List>

        <ListItem button component={Link} to="/analytics">
                <ListItemIcon>
                  <TimelineIcon/>
                </ListItemIcon>
                  <ListItemText primary="Data Dashboard"></ListItemText>
        </ListItem>

        <List>
            <ListItem button component={Link} to="/edit">
                <ListItemIcon>
                  <EditIcon/>
                </ListItemIcon>
                  <ListItemText primary="Make Edits"></ListItemText>
            </ListItem>
        </List>


      </Drawer>

      <main className={classes.content}>
      </main>

      
        
        {/* <AppBar position="fixed" className={classes.appBar}> 
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
      */}

        </div>
        
    )
      
}

export default TheDrawer;