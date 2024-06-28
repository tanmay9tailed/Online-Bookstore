import React from 'react'
import { useLoaderData } from 'react-router-dom'

const SingleBook = () => {
    const {_id,book_name,author,description,genre,publication_year,rating,book_cover_img_link} = useLoaderData();
  return (
    <div>SingleBook : 
      <img src={book_cover_img_link} alt="" />
    </div>
  )
}

export default SingleBook