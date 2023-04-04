import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Members() {
    const [members,setMembers] = useState ([])
    const [isLoading,setLoading] = useState(false)

    useEffect (() => {
      loadData ()
    },[])
    let loadData = async () => {
        setLoading (true);
        let member = await axios.get('https://642a6fd600dfa3b54745b1cd.mockapi.io/members');
        setMembers (member.data);
        setLoading(false);
    };

    let memberDelete = async (id) => {
        try {
            let data = window.confirm("Are you sure ! Do you want Delete this Data ?");
            if (data){
                await axios.delete(`https://642a6fd600dfa3b54745b1cd.mockapi.io/members/${id}`)
            };
            loadData ()
           } catch (error) {

        }
    
  return (
    // <!-- Begin Page Content -->
    <div className="container-fluid">

    {/* <!-- Page Heading --> */}
    <div className="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Members</h1>
        <Link to="/create-member" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
            className="fas fa-download fa-sm text-white-50"></i> Create Member</Link>
    </div>
  {
    isLoading ? 
    <button className="btn btn-primary" style={{fontSize:"50px"}} type="button" disabled>
    <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
    Loading...
    </button> :  
    
    <div className="card shadow mb-4">
        <div className="card-header py-3">
            <h6 className="m-0 font-weight-bold text-primary">DataTables Example</h6>
        </div>
        <div className="card-body">
            <div className="table-responsive">
                <table className="table table-bordered" id="dataTable" width="100%" >
                    <thead>
                        <tr>
                            <th>SN</th>
                            <th>Name</th>
                            <th>Card Id</th>
                            <th>Author name</th>
                            <th>Member Group</th>
                            <th>Email Id</th>
                            <th>Address</th>
                            <th>Education Learner</th>
                            
                            
                            <th>Return Date</th>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                        <th>SN</th>
                            <th>Name</th>
                            <th>Card Id</th>
                            <th>Authorname</th>
                            <th>Member Group</th>
                            <th>Email Id</th>
                            <th>Address</th>
                            <th>Education Learner</th>
                       
                            
                            
                            <th>Return Date</th>
                        </tr>
                    </tfoot>
                    <tbody>
                        {
                            members.map((member,index)=>{
                                  return (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{member.name}</td>
                            <td>{member.cardid}</td>
                            <td>{member.membergroup}</td>
                            <td>{member.emailid}</td>
                            <td>{member.address}</td>
                            <td>{members.authorname}</td>
                            <td>{member.educationlearner}</td>
                            <td>{member.returndate}</td>
                            <td>
                                <Link  to ={`/members/${member.id}`} className='btn-btn-sm btn-primary'>View</Link>
                                <Link to={`/members/edit/${member.id}`} className='btn-btn-sm btn-warning'>Edit</Link>
                                <button onClick={()=>memberDelete(member.id)} className='btn-btn-sm btn-danger'>Delete</button>
                            </td>
                        </tr>
                                  )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  }

 

    </div>
   // <!-- /.container-fluid -->
  )
}}

export default Members
