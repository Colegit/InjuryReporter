import logo from './logo.svg';
import React, {Component, PureComponent} from 'react'
import Button from '@material-ui/core/Button';
import './App.css';

import Slider from '@material-ui/core/Slider';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';

import Paper from '@material-ui/core/Paper';

import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

import Drawer from './Drawer.jsx'

import {
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

import {
  CBadge,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CCallout
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { withStyles, makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

import TheDrawer from './Drawer'


//hiding components https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components

//using hooks inside class components https://stackoverflow.com/questions/56432167/how-to-style-components-using-makestyles-and-still-have-lifecycle-methods-in-mat

class Analytics extends Component {
  constructor(){
    super();
    this.state = {
      graph: [],
      painavg: []
      
      //Hide and show elements

    }
  }

  //Get the sql table from the flask backend
  avgpain = () => {
    fetch('/averagepain').then(response => {
      if(response.ok){
        return response.json()

      }
    }).then(data => this.setState({graph: data}))
  }

  graphdata = () => {
    JSON.stringify(this.state.graph)
    console.log(this.state.graph)

  }

  //Calculate the average pain rating
  calcaverage = () => {

    let thedata = this.state.graph.length
    let statepain = this.state.painavg

    //extract the pain values from the array
    for(let i = 0; i < thedata; i++ ) {
      let thepain = this.state.graph[i][0]

      this.state.painavg.push(thepain)
    }

    // getting array total https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers
    let total = 0;
    for(let i in statepain){
      total += statepain[i]
    }

    // calculate the mean
    let FinalAvgPain = Number(total) / Number(thedata);
    let rounded = FinalAvgPain.toFixed(1)

    //set the state variable to the mean average
    this.setState({painavg: rounded})


    console.log(this.state.painavg)
    console.log(total)
    console.log(FinalAvgPain)
  }
  render(){

    const ParentBoxCSS = {
      textAlign: 'center'
      
    };

    return (


        <div >

      {/*
        {this.avgpain()}
        */}
          
            <h1> This will be for the graphs and analytics</h1>
            <br></br>

      <Grid container spacing={3}>
        <Grid item xs={3}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={3}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={6}>
        <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
        <Grid item xs={12}>
          <Card>
            <CardContent>test</CardContent>
          </Card>
        </Grid>
      </Grid>

        
        <Grid className="containerGrid" justify="spacing around" container spacing={3}>
        <Grid className="itemGrid" item xs={8} >

        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={800}
          data={this.state.graph}
          margin={{
            padding: 20,
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis name="Date" dataKey="1" />
          <YAxis name="Pain" type="number" datakey ="0" />
          <Tooltip />
          <Area name="Pain Rating" type="monotone" dataKey="0" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </Grid>
        <Grid className="itemGrid" item xs={4} >
        <h1>Average Pain Rating</h1>
      <Typography component="p" variant="h4">
        {this.state.painavg}
      </Typography>
      <Typography color="textSecondary" >
        Since Inception
      </Typography>
        </Grid>
        </Grid>


    <Button
      variant="contained"
      color="primary"
      onClick={this.avgpain}
      >Test Flask Response</Button>

<Button
      variant="contained"
      color="primary"
      onClick={this.calcaverage}
      >Test graph state data</Button>

        </div>
    )
  }
}

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

 export default Analytics;







