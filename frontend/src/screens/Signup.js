import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import Navbar from '../components/Navebar';

export default function Signup() {
    const [credentials, setCredentials] = useState({ name: "", email: "", password: "", geolocation: "" });

    const handleSubmit =async(e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5001/api/createuser",{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({name:credentials.name, email:credentials.email, password:credentials.password,location:credentials.geolocation})
        });

        const json = await response.json()
        console.log(json);

        if(!json.success){
            alert("Enter Valid Credentials")
        }
    };

    const onChange=(event)=>{
        setCredentials({...credentials,[event.target.name]:event.target.value})
    }

    return (
        <>
        <Navbar />
        <div className='mt-3 container'>
            <h1 className='m-2 text-center'>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input type="text" className="form-control" id="name" name='name' value={credentials.name} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' value={credentials.email} onChange={onChange}/>
                    <div className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Address</label>
                    <input type="text" className="form-control" id="address" name='geolocation' value={credentials.geolocation} onChange={onChange}/>
                </div>
                <div className="mb-3">
                    <label  className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
                </div>
                <button type="submit" className="m-3 btn btn-success">Submit</button>
                <Link to="/login" className='m-3 btn btn-danger'>Already a user</Link>
            </form>
        </div>
        <Footer />
        </>
    );
}
