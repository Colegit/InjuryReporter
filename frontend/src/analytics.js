import logo from './logo.svg';
import React, {Component, PureComponent} from 'react'
import Button from '@material-ui/core/Button';
import './App.css';
import TheDrawer from './Drawer.jsx'
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


//hiding components https://www.pluralsight.com/guides/how-to-show-and-hide-reactjs-components

class Analytics extends Component {
  constructor(){
    super();
    this.state = {
      graph: []
      
      //Hide and show elements

    }
  }

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




  render(){
    return (

        <div>

            <br></br>
            <br></br>
            <br>
            </br>
            <h1> This will be for the graphs and analytics</h1>
            <br></br>



            <Grid className="containerGrid" container spacing={3}>
        <Grid item xs={12} md={8} lg={9} >
          <Paper>xs=12</Paper>
        </Grid>
        <Grid className="itemGrid" item xs={8} >
        <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          width={500}
          height={800}
          data={this.state.graph}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >f
          <CartesianGrid strokeDasharray="3 " />
          <XAxis dataKey="1" />
          <YAxis type="number" datakey ="0" />
          <Tooltip />
          <Area type="monotone" dataKey="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
      </ResponsiveContainer>
        </Grid>
        <Grid className="itemGrid" item xs={4} >
        <h1>Average Pain Rating</h1>
      <Typography component="p" variant="h4">
        20
      </Typography>
      <Typography color="textSecondary" >
        February 01 - March 01
      </Typography>
        </Grid>
        </Grid>

    <React.Fragment>
      <h1>Average Pain Rating</h1>
      <Typography component="p" variant="h4">
        20
      </Typography>
      <Typography color="textSecondary" >
        February 01 - March 01
      </Typography>
      <div>
        <h1 >
          
        </h1>
      </div>
    </React.Fragment>

    <Button
      variant="contained"
      color="primary"
      onClick={this.avgpain}
      >Test Flask Response</Button>

<Button
      variant="contained"
      color="primary"
      onClick={this.graphdata}
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







