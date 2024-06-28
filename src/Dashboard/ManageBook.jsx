import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import { Link } from "react-router-dom";

const ManageBook = () => {

  const [books,setBooks] = useState([]);

  useEffect(() =>{
      fetch("http://localhost:3000/all-books/").then(res => res.json()).then(data => setBooks(data))
  },[])

  const handleClick = (id) => {
    fetch(`http://localhost:3000/book/${id}`,{
      method:"DELETE",
    }).then(res => res.json).then(data =>{ alert("Successfuly Deleted")})
  }

  return (
    <div className="py-10 px-7">
      <h1 className="text-3xl sm:text-5xl font-bold">Manage Your Books</h1>
      <div className="py-10">
        <Table>
          <Table.Head>
            <Table.HeadCell>No.</Table.HeadCell>
            <Table.HeadCell>Book Name</Table.HeadCell>
            <Table.HeadCell>Author</Table.HeadCell>
            <Table.HeadCell>Category</Table.HeadCell>
            <Table.HeadCell>Price</Table.HeadCell>
            <Table.HeadCell>Edit or Delete</Table.HeadCell>
            <Table.HeadCell>
              <span className="sr-only">Edit</span>
            </Table.HeadCell>
          </Table.Head>
          <Table.Body className="divide-y">
            {books.map((book,index) => (
                <Table.Row key={index} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index+1}
                </Table.Cell>
                <Table.Cell>{book.book_name}</Table.Cell>
                <Table.Cell>{book.author}</Table.Cell>
                <Table.Cell>{book.genre}</Table.Cell>
                <Table.Cell>{book.price}</Table.Cell>
                <Table.Cell>
                  <Link
                    to={`/admin/dashboard/edit-books/${book._id}`}
                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-2">
                    Edit
                  </Link>
                  <button
                    onClick={() => handleClick(book._id)}
                    className="font-medium py-1 px-3 rounded bg-red-500 text-white hover:bg-red-700 active:bg-cyan-500">
                    Delete
                  </button>
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default ManageBook;
