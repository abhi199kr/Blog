import React ,{useState}from 'react'
import "./Login.css";
import { auth } from "./Firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { NavLink, useNavigate } from "react-router-dom";


function Login() {
    
  const Navigate = useNavigate();

  const [user, setUser] = useState({
  email: "",
  pass: "",

  });
  

  const [errMsg, setErrMsg] = useState("");
  const [btnDisable, setBtnDisable] = useState(false);


  const onSubmit = (e) => {
    e.preventDefault();
    const {  email, pass } = user;

    if ( !email || !pass  ) {
      setErrMsg("!...All field is required");
    } else if (!email.includes("@")) {
      setErrMsg("!...enter valid email address");
    } else if (pass.length < 6) {
      setErrMsg("!...password should be at least 6 characters");
    } else {
    
      setErrMsg("");
      setBtnDisable(true);
      signInWithEmailAndPassword(auth, email, pass)
        .then( (res) => {
          setBtnDisable(false);
          
          
         alert("Login Successfully..");
          Navigate("/user");
        })
        .catch((err) => {
          setBtnDisable(false);
          console.log( err.message);
           const er="Firebase: Error (auth/wrong-password).";
           const em="Firebase: Error (auth/user-not-found).";
           if(err.message===er){
           setErrMsg("Incorrect Password");
           }else if(err.message===em){
           setErrMsg("Please enter correct email id");
           }
        
         
        
        });
    }
  };
  return (
    <>
    <div className="body2">
         <NavLink to="/" > <h1 className="logo2">MyBlog</h1></NavLink>
     

      <div className="signup-box m-auto">
      <h1 className="header">Log In</h1>
      <div className="right-box"></div>
    <div className="form-container2">
    <div className="line2"></div>
<form className='form-data'>
<label htmlFor="" className='h3'>Email:</label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, email: e.target.value }))
                  }
                />
                <label htmlFor="" className='h3'>Password:</label>
                <input
                  type="password"
                  name="pass"
                  placeholder="Enter password"
                 required
                  onChange={(e) =>
                    setUser((prev) => ({ ...prev, pass: e.target.value }))
                  }
                />
                <b className="err-msg"> {errMsg}</b>
                <div className="text-center pt-2">
                  <button onClick={onSubmit}  disabled={btnDisable}  className="btn btn-success rounded-5">Login
                  </button>
              
                </div>
                <p className="logtext2">
                    Create Your New Account.
                    <NavLink to="/signup">
                      <span> Sign Up</span>
                    </NavLink>
                  </p>
             
</form>

    </div>
   </div>
   </div>
   
    </>
  )
}

export default Login;