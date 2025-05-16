import { Link } from "react-router"

const Header = () => {
    return (
        <div className="bg-dark py-4 text-white">
            <div className="container">

                <div className="d-flex justify-content-between">
                    <div>
                        <h2>Library Management - useContext</h2>
                    </div>
                    <div>
                        <ul className="nav">
                            <li className="nav-item">
                                <Link to={`/`} className="nav-link">Books</Link>
                            </li>
                            <li className="nav-item">
                                <Link to={`/addbooks`} className="nav-link">Add Books </Link>
                            </li>
                        </ul>
                    </div>
                </div>


            </div>
        </div>
    )
}
export default Header