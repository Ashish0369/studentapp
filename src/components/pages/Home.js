import{ Typography, Box, Grid, TextField, Button} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors";
import List from "../student/List";
import { makeStyles } from "@mui/styles";
import axios from "axios";
import { useState } from "react";
import Events from "./StudentEvents"; 

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
const Home= () => {
    const classes = useStyles()
    const [student, setStudent] = useState({
        stuname:"",
        sturollno:"",
        stuterm:"",
        stucurrentyear:"",
        stucontactnumber:""
    });
    const [status, setStatus] = useState();

    function onTextFieldChange(e){
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
        
    }

    async function onFormSubmit(e){
        e.preventDefault()
            try{
                await axios.post(`http://localhost:3333/students`, student)
                setStatus(true);
            } catch(error){
                console.log("Something wrong");
            }
        }
        if(status){
            return <Home/>
        }
        return(
            <>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h2">STUDENT INFORMATION</Typography>
            </Box>
            <Grid container justify="center" spacing={2}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">ADD Students</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container>
                            <Grid item xs={12}>
                            <TextField autocomplete="stuname" name="stuname" variant="outlined" required fullwidth id="stuname"  placeholder="Name" onChange= {e=> onTextFieldChange(e)}autoFocus/>
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="sturollno" name="sturollno" variant="outlined" required fullwidth id="sturollno"  placeholder="Roll No" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="stuterm" name="stuterm" variant="outlined" required fullwidth id="stuterm"  placeholder="Term" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="stucurrentyear" name="stucurrentyear" variant="outlined" required fullwidth id="stucurrentyear"  placeholder="Current Year" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField autocomplete="stucontactnumber" name="stucontactnumber" variant="outlined" required fullwidth id="stucontactnumber" placeholder="Contact Number" onChange= {e=> onTextFieldChange(e)}/>    
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained"
                            color="primary" fullWidth onClick={e =>onFormSubmit(e)}>Add</Button>
                        </Box>
                    </form>
                </Grid>
                <Grid item md={6} xs={12}>
                <List/>
                </Grid>
            </Grid>
            <Events/>
            </>
        )
    
}
export default Home