import{ Typography, Box, Grid, TextField, Button} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
const Edit =() => {
    const classes = useStyles();
    const {id} = useParams();
    const [student, setStudent] = useState({
        stuname:"",
        sturollno:"",
        stuterm:"",
        stucurrentyear:"",
        stucontactnumber:""
    });
    useEffect(()=>{
        getStudent()
    })

    async function getStudent(){
        try{
            const student = await axios.get(`http://localhost:3333/students/${id}`)
           // console.log(students.data);
           setStudent(student.data);
        } catch(error){
            console.log("Something wrong");
        }
    }
    function onTextFieldChange(e){
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
        }
    async function onFormSubmit(e){
        e.preventDefault()
            try{
                await axios.put(`http://localhost:3333/students/${id}`, student)
            } catch(error){
                console.log("Something wrong");
            }
        }
    return(
        <>
        <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
            <Typography variant="h2">STUDENT INFORMATION</Typography>
        </Box>
        <Grid container justify="center" spacing={2}>
            <Grid item md={6} xs={12}>
                <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                    <Typography variant="h4">Edit Students</Typography>
                </Box>
                <form noValidate>
                    <Grid container>
                        <Grid item xs={12}>
                        <TextField autocomplete="id" name="id" variant="outlined" required fullwidth id="id" placeholder="ID" autoFocus value={id} disabled/>
                        </Grid>
                        <Grid item xs={12}>
                        <TextField autocomplete="stuname" name="stuname" variant="outlined" required fullwidth id="stuname" placeholder="Name" value={student.stuname} onChange={e => onTextFieldChange(e)} />
                        </Grid>
                        <Grid item xs={12}>
                        <TextField autocomplete="sturollno" name="sturollno" variant="outlined" required fullwidth id="sturollno" placeholder="Roll No" value={student.sturollno} onChange={e => onTextFieldChange(e)}/>    
                        </Grid>
                        <Grid item xs={12}>
                        <TextField autocomplete="stuterm" name="stuterm" variant="outlined" required fullwidth id="stuterm" placeholder="Term" value={student.stuterm} onChange={e => onTextFieldChange(e)}/>    
                        </Grid>
                        <Grid item xs={12}>
                        <TextField autocomplete="stucurrentyear" name="stucurrentyear" variant="outlined" required fullwidth id="stucurrentyear" placeholder="Current Year" value={student.stucurrentyear} onChange={e => onTextFieldChange(e)}/>    
                        </Grid>
                        <Grid item xs={12}>
                        <TextField autocomplete="stucontactnumber" name="stucontactnumber" variant="outlined" required fullwidth id="stucontactnumber" placeholder="Contact Number" value={student.stucontactnumber} onChange={e => onTextFieldChange(e)}/>    
                        </Grid>
                    </Grid>
                    <Box m={3}>
                        <Button type="submit" variant="contained"
                        color="primary" fullWidth onClick={e => onFormSubmit(e)}>Update</Button>
                    </Box>
                </form>
                </Grid>
                </Grid>
            </>
    )
}
export default Edit