import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'


function Books() {
const params=useParams()
  const[books,setBooks]=useState([])
  const[isLoading,setLoading]=useState()
  

  useEffect(()=>{
loadBook()
  },[])

  let loadBook =async()=>{
    setLoading(true)
    let book=await axios.get('https://642a6fd600dfa3b54745b1cd.mockapi.io/book');
    setBooks(book.data)
    setLoading(false)
  }

  let bookDelete=async (id) =>{
    try{
        let data = window.confirm("Are you sure you want to delete this book id ")
        if (data){
            await axios.get(`https://642a6fd600dfa3b54745b1cd.mockapi.io/book/${id}`)
        }
    }catch(error){

    }

  }
        
  return (
    <div>
     <div class="container-fluid">

<h1 class="h3 mb-2 text-gray-800">Tables</h1>
<div className="d-sm-flex align-items-center justify-content-between mb-4">
                        <h1 class="h3 mb-0 text-gray-800">Books</h1>
                        <Link to="/create-book" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                class="fas fa-download fa-sm text-white-50"></i>Create Books</Link>
                    </div>

{
    isLoading ?<span>LOADING....</span>:<div class="card shadow mb-4">
    <div class="card-header py-3">
        <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
    </div>
    <div class="card-body">
        <div class="table-responsive">
            <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                    <tr>
                    <th>SI</th>
                       <th>ISBN</th>
                       <th>Book Title</th>
                       <th>Author name</th>
                        <th>Book Edition</th>
                       <th>Publication</th>
                       <th>View Books</th>
                       <th>Issue Books</th>
                       <th>Return Book</th>

                       
                    </tr>
                </thead>
                <tfoot>
                
                    <tr>
                    <th>ISBN</th>
                       <th>Book Title</th>
                       <th>Author name</th>
                        <th>Book Edition</th>
                       <th>Publication</th>
                       <th>View Books</th>
                       <th>Issue Books</th>
                       <th>Return Book</th>
                    </tr>
                </tfoot>
                <tbody>
                    {
                        books.map((book,index)=>{
                            return <tr key={index}>
                            <td>{index +1}</td>
                            <td>{books.ISBN}</td>
                            <td>{books.Title}</td>
                            <td>{books.Authorname}</td>
                            <td>{books.BookEdition}</td>
                            <td>{books.Publication}</td>
                            <td>{books.ViewBooks}</td>
                            <td>{books.IssueBooks}</td>
                            <td>{books.ReturnBook}</td>
                            <td><Link to={`/books/${book.id}`} className='btn-btn-sm- btn-primary'>View</Link></td>
                            <td><Link to={`/books/edit/${book.id}`} className='btn-btn-sm btn-warning'> Edit</Link></td>
                            <td><button onClick={()=>bookDelete(book.id) } className='btn-btn-sm btn-danger'>Delete</button></td>
                            
                            
                            
                          </tr>
                        })
                    }
                </tbody>
                
                    </table>
                    </div>
                    </div>
                    </div>
}

                    </div>
                    </div>
  )

}
export default Books