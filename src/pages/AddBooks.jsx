import { useState } from "react"
import useBooks from "../contexts/BookContext"

const AddBooks = () => {
    const {books, setBooks} = useBooks()
    const [bookData, setBookData] = useState()

    const submitHandler = (e) => {
        e.preventDefault()
        const newBook = {...bookData, id: books.length + 1}
        setBooks(prevBooks => [...prevBooks, newBook])
    }
    
    const inputChangeHandler = (e) => {
        const {value, name} = e.target
        setBookData(prevState => ({
            ...prevState,
            [name] : name === "isRead" ? value === "true" :   value
        }) )
    }

    return (
        <div className="container">
            <h1>AddBooks</h1>

            <form onSubmit={submitHandler}>
                <input required className="form-control my-2" type="text" name="title" onChange={inputChangeHandler} placeholder="Title" />

                <input required className="form-control my-2" type="text" name="author" onChange={inputChangeHandler} placeholder="Author" />

                <label htmlFor="" className="form-label">Read or Unread</label><br />
                <label htmlFor="isRead">Read</label>
                <input required className="" type="radio" name="isRead" onChange={inputChangeHandler} value="true" /> <br />
                <label htmlFor="isRead">Unread</label>
                <input required className="" type="radio" name="isRead" onChange={inputChangeHandler} value="false" /> <br />

                <button className="btn btn-primary" type="submit">Add Book</button>
                

            </form>

        </div>
    )
}
export default AddBooks