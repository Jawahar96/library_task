import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'

function Bookview() {
    const params = useParams()

  const [searchParams, setSearchParams] = useSearchParams()
  console.log(...searchParams)

  const [bookData, setBookData] = useState({})

  useEffect(() => {
    loadBook()
  }, [])

  let loadBook = async () => {
    try {
      let book = await axios.get(`https://642a6fd600dfa3b54745b1cd.mockapi.io/book/${params.id}`)
      setBookData(book.data)
    } catch (error) {

    }

  }
  return (
    <>
     <div className="card text-left text-opacity ml-4 mr-4" style={{color :"black" , fontSize : "40px"}}>
        <div className="card-header">
          Book Id : {bookData.id}
        </div>
        <div className="card-body ml-5 mr-5 bg-gradient-secondary" style={{fontSize : "20px"}}>
          <h5 className="card-title">ISBN : {bookData.isbn}</h5>
          <h5 className="card-title">Book Title: {bookData.BookTitle}</h5>
          <h5 className="card-title">Author name : {bookData.Authorname}</h5>
          <h5 className="card-title"> Book Edition: {bookData.BookEdition}</h5>
          <h5 className="card-title"> Publication: {bookData.Publication}</h5>
          <h5 className="card-title">View Books : {bookData.ViewBooks}</h5>
          <h5 className="card-title"> Issue Books: {bookData.IssueBooks}</h5>
          <h5 className="card-title"> : {bookData.returndate}</h5>
        </div>
     </div>
    </>
  )
}

export default Bookview
