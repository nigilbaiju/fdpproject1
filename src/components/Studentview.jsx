import React, { useEffect, useState } from 'react'
// import { Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Student from './Student';

const Studentview = () => {
      var [students,setStudents] = useState([]);
      var[selected,setSelected]=useState()
      var[update,setUpdate]=useState(false)
      
       useEffect(()=>{
       axios.get("http://localhost:3005/view")
      .then(response =>{
        //  console.log(response.data)
         setStudents(response.data)     })
       .catch(err=>console.log(err))
     },[])

    const deleteValues=(id)=>{
      console.log("deleted",id)
      axios.delete("http://localhost:3005/remove/"+id)
      .then((response)=>{
        console.log(response.idvalue);
        alert("Deleted")
        //to reload window
        window.location.reload(false);
      })}

      const updateValues = (value) =>{
        console.log("updated:",value)
        setSelected(value);
        setUpdate(true);
      }
    var result=
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell>Admission No</TableCell>
          <TableCell>Student Name</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>DOB</TableCell>
         
        </TableRow>
      </TableHead>
      <TableBody>
              {students.map((value,index)=>{
                return(
                  <TableRow key={index}> 
                    <TableCell>{value.Admno}</TableCell>
                    <TableCell>{value.Sname}</TableCell>
                    <TableCell>{value.Gender}</TableCell>
                    <TableCell>{value.Dob}</TableCell>
                    <TableCell><ModeEditIcon color='success'onClick={()=>updateValues(value)}/></TableCell>
                    <TableCell><DeleteForeverIcon color='error' onClick={()=>deleteValues(value._id)}/></TableCell>
                  </TableRow>
                )
              })}
      </TableBody>

      </Table>
  </TableContainer>
 
if(update)
  result=<Student data={selected} method='put'/> 
   return ( result)
}

export default Studentview
