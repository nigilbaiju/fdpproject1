import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


const Student = (props) => {

  var [inputs,setInputs] =useState(props.data)
  console.log("method:",props.method)
   const navigate = useNavigate();
    const inputHandler = (e) => {
    const {name,value}=e.target
    setInputs((inputs) => ({...inputs,[name]:value}))
  //  console.log(inputs)
    }
 
const addHandler =() =>{
    console.log("Clicked")
    if(props.method === "post")
    {
    axios.post("http://localhost:3005/new",inputs)
    .then((response) =>{
      alert("Sucessfully added")
      navigate('/StudentView');
    })
    .catch(err=>console.log(err))
  }
  
  if(props.method === 'put'){
    console.log("inside put")
    axios.put("http://localhost:3005/edit/"+ inputs._id,inputs)
    .then(response=>{
      console.log("post data"+response.data)
        alert("success")
        window.location.reload(false);
    })
    .catch(err=>console.log(err))
  }

}
  return (
    <div>     
      <Typography variant='h5'>Add Students</Typography><br></br>
      <TextField id="outlined-basic" label="ADMISSION NO" variant="outlined" 
      name="Admno" value={inputs.Admno} onChange={inputHandler} />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="STUDENT NAME" variant="outlined" 
      name="Sname" value={inputs.Sname} onChange={inputHandler} />
      <br></br>
      <br></br>
      <TextField id="outlined-basic" label="Gender" variant="outlined" 
      name="Gender" value={inputs.Gender} onChange={inputHandler} />
      <br></br>
      <br></br>
            <TextField id="outlined-basic" label="DOB" variant="outlined" name="Dob" value={inputs.Dob} onChange={inputHandler} />
      <br></br>
      <br></br>
      <Button variant='contained' color='success' onClick={addHandler} >SUBMIT</Button>
      </div>

  )
}

export default Student
