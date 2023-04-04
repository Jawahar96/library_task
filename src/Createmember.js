import { Formik, useFormik } from 'formik'
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom';
function Createmember() {
  let params=useParams()
   let navigate= useNavigate()

  const formik=useFormik({
    initialValues : {
        name :"",
        cardid :"",
        Authorname :"",
        Membergroup :"",
        EmailId :"",
        Address :"",
        EducationLearner :"",
        ReturnDate :""


    },
    validate :(values)=>{

        let errors={}
        if(values.name=== ""){
        errors.name("Enter a name")
  
      }
      if(values.cardid=== ""){
      errors.cardid("Enter a cardid")
      }
      if(values.Authorname=== ""){
        errors.Authorname("Enter a Authorname")
        }
        if(values.Membergroup=== ""){
          errors.Membergroup("Enter a Member")
          }
          if(values.EmailId=== ""){
            errors.EmailId("Enter a Email id")
            }
  
            if(values.Address=== ""){
              errors.Address("Enter a Address")
              }
              if(values.EducationLearner=== ""){
                errors.EducationLearner("Enter a Educational Learnr")
                }
                if(values.ReturnDate=== ""){
                  errors.ReturnDate("Enter a Return date")
                  }
                  return errors;
   
     

    },

   onSubmit :async (values)=>{
    let member = await axios.post(`https://642a6fd600dfa3b54745b1cd.mockapi.io/members/${params.id}`,values)
    alert(" Member generated ")
    navigate('/members')
   }
    
  });

 
  return (
    <div>
      <div className='container'>
    <form onSubmit={formik.handleSubmit}>
    <div className='row'>
        <div className='col-lg-6'>
          <label>Name </label>
          <input className='form-control' type={'text'} 
          value={formik.values.name}
            onChange={formik.handleChange} 
            name='name'
            />
            <span style={{color :"red"}}>{formik.errors.ISBN}</span>
         
        </div>
     
      <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Card ID</label>
          <input className={`form-control ${formik.errors.cardid ? `input-error` : ``}`} type={'text'} 
          value={formik.values.cardid}
          onChange={formik.handleChange} 
            name='cardid'

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
          <label>Membergroup</label>
          <input className='form-control' type={'text'}
            value={formik.values.Membergroup}
            onChange={formik.handleChange}
            name='MemberGroup'

          />


        </div></div>
        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>EmailId</label>
          <input className='form-control' type={'text'} 
          value={formik.values.EmailId}
          onChange={formik.handleChange} 
          name='EmailID'
     

          />
        <div className='col-lg-6'></div>
        </div>
        </div>
        
        <div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>Address</label>
          <input className='form-control' type={'text'} value={formik.values.Address}
        onChange={formik.handleChange}
        name='Address'

          />
          

        </div>

</div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>EducationLearner</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.EducationLearner}
          onChange={formik.handleChange}
          name='Educational learner'
l
          />
</div>
        </div>
</div>
<div className='container'>
        <div className='row'>
        <div className='col-lg-6'>
          <label>ReturnDate</label>
          <input className='form-control' 
          type={'text'}
          value={formik.values.ReturnDate}
          onChange={formik.handleChange}
          name='ReturnDate'
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

export default Createmember