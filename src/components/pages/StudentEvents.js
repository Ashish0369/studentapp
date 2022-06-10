import{ Typography, Box, Grid, TextField, Button} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors";
import Eventlist from "../pages/Eventlist"
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";
 

const useStyles = makeStyles({
    headingColor:{
        backgroundColor: deepPurple[400],
        color: "white"
    },
    addStuColor:{
        backgroundColor: green[400],
        color:"white"
    },
})
const Events= () => {
    const classes = useStyles()
    const [events, setEvents] = useState({
        eventname:"",
        eventdes:"",
        eventstrtdate:"",
        eventenddate:"",
        eventstatus:""
    });
    const [status, setStatus] = useState();

    function onTextFieldChange(e){
        setEvents({
            ...events,
            [e.target.name]: e.target.value
        })
        
    }

    async function onFormSubmit(e){
        e.preventDefault()
            try{
                await axios.post(`http://localhost:3333/Events`, events)
                setStatus(true);
            } catch(error){
                console.log("Something wrong");
            }
        }
        if(status){
            return <Events/>
        }
        return(
            <>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h2">EVENTS INFORMATION</Typography>
            </Box>
            <Grid container justify="center" spacing={2}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">ADD Events</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container>
                            <Grid item xs={12}>
                            <TextField autocomplete="eventname" name="eventname" variant="outlined" required fullwidth id="eventname"  placeholder="Event Name" onChange= {e=> onTextFieldChange(e)}autoFocus/>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="eventdes" name="eventdes" variant="outlined" required fullwidth id="eventdes"  placeholder="Event Description" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="eventstrtdate" name="eventstrtdate" variant="outlined" required fullwidth id="eventstrtdate"  placeholder="Event Start Date" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="eventenddate" name="eventenddate" variant="outlined" required fullwidth id="eventenddate"  placeholder="Event End Date" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="eventstatus" name="eventstatus" variant="outlined" required fullwidth id="eventstatus"  placeholder="Event Status" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained"
                            color="primary" fullWidth onClick={e =>onFormSubmit(e)}>Add</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={6} xs={12}>
                <Eventlist/>
                </Grid>
            </Grid>
            </>
        )
    
}
export default Events