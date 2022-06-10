import { useNavigate, BrowserRouter } from "react-router-dom";
import React , {useState} from "react";
import './Login.css';


const Login = () => {
    const navigate = useNavigate();  
    
        const [email,setEmail] = useState("")
        const [pwd,setPwd] = useState("")
        
    const handlesubmit = (e) => {
        e.preventDefault();
        // this.setState({'submitted': true });
        
     navigate("/home");
    }
        return(
            <div className="main">
                <div className="sub-main">
                    <div>
                <form className="form" onSubmit={handlesubmit}>
                    <input  className="email" type="email" value={email} name="email" placeholder="email..." required onChange={(e) => setEmail(e.target.value)}/>
                    <br/>
                    <input className="email" type="password" value={pwd} name="pwd" placeholder="password..." required onChange={(e) => setPwd(e.target.value)}/>
                    <br/>
                    </form>
                <button style={{marginTop:10, padding:10, borderRadius:5}} onClick={() => {
            navigate("/home");
          }}>Log In</button>
                </div>
                </div>
                </div>
        )
        }

export default Login