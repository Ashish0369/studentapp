import { Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@mui/material"
import { orange } from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { PieChart } from "react-minimal-pie-chart";
import { Filter } from "react-admin";



const useStyles = makeStyles({
    stuListColor: {
        backgroundColor: orange[400],
        color: "white"
    },

    tableHeadCell: {
        color: "white",
        fontWeight: "bold",
        fontSize: 12
    },
    Piechartcomponent: {
        height: "200px",
        marginBottom: 20,
        marginTop: 10

    }
})
const List = () => {
    const [searchtext, setSearchtext] = useState("");
    const [students, setStudents] = useState([]);
    const [datasource, setDatasource] = useState(students)
    const [tablefilter, setTablefilter] = useState("")
    const classes = useStyles()
    
    useEffect(() => {
        getAllStudent()
    },[])
    async function getAllStudent() {
        try {
            const students = await axios.get("http://localhost:3333/students")
            // console.log(students.data);
            setStudents(students.data);
        } catch (error) {
            console.log("Something wrong");
        }
    }
    const handleDelete = async id => {
        await axios.delete(`http://localhost:3333/students/${id}`);
        var newstudent = students.filter((item) => {
            return item.id !== id;
        })
        setStudents(newstudent);
    }
    

    const simplefilterdata = (e) => {
        setSearchtext(e.target.value);
        if( e.target.value !== "")
        {
            
            
            const filterTable = students.filter(o => o.stuterm.includes(e.target.value));
            console.log(filterTable)
            setStudents(filterTable)
        } else{getAllStudent()}
        } 
    
    return (
        <>
            <Box textAlign="center" p={2} className={classes.stuListColor}>
            <Typography variant="h4">Student List</Typography>
                <input type="text" placeholder="search here..." value={searchtext} onChange={simplefilterdata} />
                <Typography>{`Total Students: ${students.length}`}</Typography>
            </Box>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow style={{ backgroundColor: "#90ee90" }}>
                            <TableCell align="center" className={classes.tableHeadCell}>NO</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Name</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Roll No</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Term</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Current Year</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Contact Number</TableCell>
                            <TableCell align="center" className={classes.tableHeadCell}>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            students.map((student, i) => {
                                return (
                                    <TableRow key={i}>
                                        <TableCell align="center">{i + 1}</TableCell>
                                        <TableCell align="center">{student.stuname} </TableCell>
                                        <TableCell align="center">{student.sturollno}</TableCell>
                                        <TableCell align="center">{student.stuterm}</TableCell>
                                        <TableCell align="center">{student.stucurrentyear}</TableCell>
                                        <TableCell align="center">{student.stucontactnumber}</TableCell>
                                        <TableCell align="center">
                                            <Tooltip title="View">
                                                <IconButton><Link to={`/view/${student.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Edit">
                                                <IconButton><Link to={`/edit/${student.id}`}><EditIcon /></Link></IconButton>
                                            </Tooltip>
                                            <Tooltip title="Delete">
                                                <IconButton onClick={() => handleDelete(student.id)}><DeleteIcon color="secondary" /></IconButton>
                                            </Tooltip>
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }

                    </TableBody>
                </Table>
            </TableContainer>
            <div>
                <div>
                    <Box textAlign="center" p={2} mt={5} className={classes.stuListColor}>
                        <Typography variant="h4">Student PieChart</Typography>
                    </Box>
                </div>
                <PieChart className={classes.Piechartcomponent} data={students} />
            </div>
        </>
    )
}
export default List


