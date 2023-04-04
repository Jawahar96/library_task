import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Membersview() {
    const params=useParams()
    console.log(params);
const [searchparams,setSearchParams]=useSearchParams()
console.log(...searchparams);

const [memberData,setMemberData]=useState({})

useEffect(()=>{
loadUser()
},[])

let loadUser= async() =>{
  try{

   let members= await axios.get(`https://642a6fd600dfa3b54745b1cd.mockapi.io/members/${params.id}`)
   setMemberData(members.data)
  }catch(error){

}}

  
  return (

    <div>
    {/* <h2>{studentData.name}</h2>
    <h2>{studentData.Age}</h2>
    <h2>{studentData.Email}</h2>
    <h2>{studentData.Mobileno}</h2>
    <h2>{studentData.Startdate}</h2>
    <h2>{studentData.TeachersId}</h2>
    <h2>{studentData.Class}</h2>

    <h2>{studentData.Subject}</h2> */}

    <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Member Id : {memberData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-warning" style={{fontSize : "20px"}}>
          <h5 className="card-title">Name : {memberData.name}</h5>
          <h5 className='card-title'>cardid :{memberData.cardid}</h5>
          <h5 className='card-title'>EmailId :{memberData.EmailId}</h5>
          <h5 className='card-title'>membergroup :{memberData.membergroup}</h5>
          <h5 className='card-title'>address :{memberData.address}</h5>
          <h5 className='card-title'>Authorname :{memberData.Authorname}</h5>
          <h5 className="card-title">EducationLearner : {memberData.EducationLearner}</h5>
          <h5 className="card-title">ReturnDate : {memberData.ReturnDate}</h5>
          
         
          
      </div></div></div>
     
      
  )
}

export default Membersview