import React, { useEffect } from 'react'
import {formik,useFormik} from 'formik';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

function Editbook() {
  const params=useParams()
  const navigate=useNavigate()
         const formik= useFormik({
    initialValues : {
        ISBN :"",
       Title :"",
       Authorname :"",
       BookEdition :"",
       Publication : "",
       ViewBooks :"",
        IssueBooks :"",
       ReturnBook : ""

    },


    validate :(values)=>{
        let errors={}
        if(values.ISBN=== ""){
        errors.ISBN("Enter a ISBN")
  
      }
      if(values.Title=== ""){
      errors.Title("Enter a Title")
      }
      if(values.Authorname=== ""){
        errors.Authorname("Enter a Authorname")
        }
        if(values.BookEdition=== ""){
          errors.BookEdition("Enter a BookEdition")
          }
          if(values.Publication=== ""){
            errors.Publication("Enter a Publication")
            }
  
            if(values.ViewBooks=== ""){
              errors.ViewBooks("Enter a ViewBooks")
              }
              if(values.IssueBooks=== ""){
                errors.IssueBooks("Enter a IssueBooks")
                }
                if(values.ReturnBook=== ""){
                  errors.ReturnBook("Enter a Return books")
                  }
                  return errors;
   
            },
    onSubmit : async (values)=>{
     let student=await axios.put(`https://642a6fd600dfa3b54745b1cd.mockapi.io/book/${params.id}`,values)
     alert("Book record is updated");
     navigate('/books')

    }
  });


  useEffect(()=>{
   loadBook()
  },[])

  let loadBook=async()=>{
    try{
      let book=await axios.get(`https://642a6fd600dfa3b54745b1cd.mockapi.io/book/${params.id}`)

      formik.setValues({
      
        ISBN:book.data.ISBN,
        Title:book.data.Title,
        Authorname:book.data.Authorname,
        BookEdition:book.data.BookEdition,
         Publication:book.data.Publication,
          ViewBook:book.data.ViewBook,
        IssueBook : book.data.IssueBook,
        ReturnBook:book.data.ReturnBook
      })
    }catch(error){

    }
  }
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label>ISBN</label>
          <input className='form-control' type={'text'} 
          value={formik.values.ISBN}
            onChange={formik.handleChange} 
            name='ISBN'
            />
            <span style={{color :"red"}}>{formik.errors.ISBN}</span>
         
        </div>
     
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Title</label>
          <input className={`form-control ${formik.errors.Title ? `input-error` : ``}`} type={'text'} 
          value={formik.values.Title}
          onChange={formik.handleChange} 
            name='Title'

          />

        </div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Authorname</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Authorname}
          onChange={formik.handleChange} 
            name='Authorname' />
          
        </div>
        </div></div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>BookEdition</label>
          <input className='form-control' type={'text'}
            value={formik.values.BookEdition}
            onChange={formik.handleChange}
            name='BookEdition'

          />


        </div></div>
        </div>

        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Publication</label>
          <input className='form-control' type={'text'} 
          value={formik.values.Publication}
          onChange={formik.handleChange} 
          name='Publication'
     

          />
          <div className='container'>
        <div className='row'>

        </div>
        <div className='col-lg-6'>
        <label>ViewBook</label>
          <input className='form-control' type={'text'} 
          value={formik.values.ViewBook}
          onChange={formik.handleChange} 
          name='ViewBook'/>
          </div>
        </div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>IssueBook</label>
          <input className='form-control' type={'text'} value={formik.values.IssueBook}
        onChange={formik.handleChange}
        name='IssueBook'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>ReturnBook</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.ReturnBook}
          onChange={formik.handleChange}
          name='ReturnBook'
l
          />
</div>
        </div>
</div>
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Submit
    
  </button>
</div>
</div></div></div>
</form>
</div>
</div>

  
  )
}

export default Editbook