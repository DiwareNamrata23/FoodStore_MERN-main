import React,{useState} from 'react'
import { Link,Navigate,useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navebar';

export default function Login() {
    const [credentials, setCredentials] = useState({ email: "", password: ""});

    let navigate = useNavigate();

    const handleSubmit =async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/loginuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email:credentials.email, password:credentials.password})
        });

        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }

        if(json.success){
          localStorage.setItem("userEmail",credentials.email)
          localStorage.setItem("authToken",json.authToken)
          console.log(localStorage.getItem("authToken"))
          navigate('/');
        }
    };

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

  return (
    <>
    <Navbar />
    <div className='mt-3 container'>
    <h1 className='m-2 text-center'>Login</h1>
    <form onSubmit={handleSubmit}>
        
        <div className="mb-3">
            <label  className="form-label">Email address</label>
            <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange}/>
            <div className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
            <label  className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
        </div>
        <button type="submit" className="m-3 btn btn-success">Submit</button>
        <Link to="/createuser" className='m-3 btn btn-danger'>I'm a new user</Link>
    </form>
</div>
<Footer />
</>
  )
}
