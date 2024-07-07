import React, { useEffect, useState } from 'react'
import BooksSwiper from './Bookcard';

const AllBooks = ({headline,data1,data2}) => {
    
    const [books,setBooks] = useState([]);

    useEffect(() =>{
        fetch("https://online-bookstore-backend-olive.vercel.app/all-books/").then(res => res.json()).then(data => setBooks(data.slice(data1, data2)))
    },[])
  return (
    <div>
        <BooksSwiper books={books} headline={headline} />
    </div>
  )
}

export default AllBooks