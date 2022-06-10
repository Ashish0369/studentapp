import{ Typography, Box, Grid, TextField, Button} from "@mui/material"
import { deepPurple, green } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";

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

const Register = () => {
    const classes = useStyles()
    const navigate = useNavigate();
    return (<>
    <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
                <Typography variant="h2">REGISTRATION</Typography>
            </Box>
            <Grid container justify="center" spacing={2}>
                <Grid item md={6} xs={12}>
                    <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                        <Typography variant="h4">EVENT REGISTRATION</Typography>
                    </Box>
                    <form noValidate>
                        <Grid container>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullwidth placeholder="Name" />
                            </Grid>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullwidth placeholder="Roll No"/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullwidth placeholder="Term"/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullwidth placeholder="Current Year"/>    
                            </Grid>
                            <Grid item xs={12}>
                            <TextField variant="outlined" required fullwidth placeholder="Contact Number"/>    
                            </Grid>
                        </Grid>
                        <Box m={3}>
                            <Button type="submit" variant="contained"
                            color="primary" fullWidth onClick={() => {
                                navigate("/home");
                              }}>Add</Button>
                        </Box>
                    </form>
                </Grid>
            </Grid>
    </>
    )
}

export default Register