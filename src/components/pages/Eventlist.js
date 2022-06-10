import{ Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@mui/material"
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import {Link} from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import PieChart from "../student/PieChart";
import PieChartComponent from "../student/PieChart";

const useStyles = makeStyles({
    stuListColor:{
        backgroundColor:orange[400],
        color:"white"
    },
    tableHeadCell:{
        color:"white",
        fontWeight:"bold",
        fontSize: 12
    },
})
const Eventlist= () => {
    const [events, setEvents] = useState([]);
    const [value, setValue] = useState("");
    const [datasource, setDatasource] = useState(events)
    const [tablefilter, setTablefilter] = useState("")
    const classes = useStyles()
    
    useEffect(()=>{
        getAllEvents()
    },[])

    async function getAllEvents(){
        try{
            const events = await axios.get("http://localhost:3333/Events")
           // console.log(students.data);
           setEvents(events.data);
        } catch(error){
            console.log("Something wrong");
        }
    }
    

    const simplefilterdata = (e) => {
        setValue(e.target.value);
        if( e.target.value !== "")
        {
            
            const filterTable = events.filter(o => o.eventstatus.includes(e.target.value));
            console.log(filterTable)
            setEvents(filterTable)
        } else{getAllEvents()}
    }
    return(
        <>
        <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Event List</Typography>
                <input type="text" placeholder="search here..." value={value} onChange={simplefilterdata} />
                <Typography>{`Total Events: ${events.length}`}</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor: "#90ee90"}}>
                            <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}> Event Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Event Description</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Start Date</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>End Date</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Status</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            events.map((events, i) =>{
                                return(
                                    <TableRow key={i}>
                        <TableCell align="center">{i + 1}</TableCell>
                        <TableCell align="center">{events.eventname}</TableCell>
                        <TableCell align="center">{events.eventdes}</TableCell>
                        <TableCell align="center">{events.eventstrtdate}</TableCell>
                        <TableCell align="center">{events.eventenddate}</TableCell>
                        <TableCell align="center">{events.eventstatus}</TableCell>
                        <TableCell align="center">
                            <Tooltip title="Register">
                                <IconButton><Link to={`/register`}><HowToRegIcon color="primary"/></Link></IconButton>
                            </Tooltip>
                        </TableCell>
                        </TableRow>
                                )
                            })
                        }
                        
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default Eventlist