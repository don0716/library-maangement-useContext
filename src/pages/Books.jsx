import { useState } from "react"
import useBooks from "../contexts/BookContext"

const Books = () => {
    const {books, toggleStatus, deleteBooks} = useBooks()
    const [filter, setFilter] = useState("all")

    const filteredBooks = books.filter((book) => {
        if(filter === "read") return book.isRead
        if(filter === "unread") return !book.isRead
        return true // if all
    })

    return (
        <>
          <div className="container py-2">
            <div className="d-flex justify-content-between">
                <h1>Books</h1>
                <div>
                    <button onClick={() => setFilter("all") } className="btn btn-secondary mx-2">All Books</button>
                    <button onClick={() => setFilter("read")} className="btn btn-secondary mx-2">Read Books</button>
                    <button onClick={() => setFilter("unread")} className="btn btn-secondary mx-2">Unread Books</button>
                </div>
            </div>

            <div className="row">
                {
                    filteredBooks.map(book => (
                        <div key={book.id} className="col-md-3">
                            <div className="card my-2">
                                <div className="card-body">
                                    <h5>{book.title}</h5>
                                    <p><strong>Author:</strong> {book.author}</p>
                                    <div className="d-flex justify-content-between">
                                        <button onClick={() => toggleStatus(book.id)} className="btn btn-warning btn-sm">{book.isRead ? "Read" : "Unread" }</button>
                                        <button onClick={() => deleteBooks(book.id)} className="btn btn-danger btn-sm">Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
        </>
    )
}
export default Books