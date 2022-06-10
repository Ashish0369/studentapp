import{ Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@mui/material"
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { useParams} from "react-router-dom";
import { useState, useEffect} from "react";
import  axios  from "axios";
const useStyles = makeStyles({
    stuListColor:{
        backgroundColor:orange[400],
        color:"white"
    },
    tableHeadCell:{
        color:"white",
        fontWeight:"bold",
        fontSize: 16
    },
})
const View =() => {
    const classes = useStyles();
    const {id} = useParams();
    const [student, setStudent] = useState([]);
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
    return(
        <>
           <Box textAlign="center" p={2} className={classes.stuListColor}>
                <Typography variant="h4">Student List</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{backgroundColor: "#90ee90"}}>
                            <TableCell align="center" className={classes.tableHeadCell}>NO</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Roll No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Term</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Current Year</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Contact Number</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableCell align="center">{student.id}</TableCell>
                        <TableCell align="center">{student.stuname}</TableCell>
                        <TableCell align="center">{student.sturollno}</TableCell>
                        <TableCell align="center">{student.stuterm}</TableCell>
                        <TableCell align="center">{student.stucurrentyear}</TableCell>
                        <TableCell align="center">{student.stucontactnumber}</TableCell>
                        <TableCell align="center">
                        </TableCell>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}
export default View