import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Createbooks() {
   let navigate= useNavigate()

  const formik=useFormik({
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

   onSubmit :async (values)=>{
    let book = await axios.post('https://642a6fd600dfa3b54745b1cd.mockapi.io/book/',values)
    alert(" Book created ")
    navigate('/books')
   }
    
  });

 
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label>ISBN </label>
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
        <div className='col-lg-6'></div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>ViewBooks</label>
          <input className='form-control' type={'text'} value={formik.values.ViewBooks}
        onChange={formik.handleChange}
        name='ViewBooks'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>IssueBooks</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.IssueBooks}
          onChange={formik.handleChange}
          name='IssueBooks'
l
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
<div className='col-lg-6'>
  <button className='btn-btn-sm btn-success ' disabled={!formik.isValid}>Submit
    
  </button>
</div>
</div>
</div>
</div>

</div>
</div>
</div>
</form>
</div>
</div>

  
  )
}

export default Createbooks