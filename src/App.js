import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <a href="/reviews" className="navbar-brand">
            Reviews
          </a>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/reviews"} className="nav-link">
                Reviews
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/add"} className="nav-link">
                Add
              </Link>
            </li>
          </div>
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<ReviewsList/>} />
            <Route path="/reviews" element={<ReviewsList/>} />
            <Route path="/add" element={<AddReview/>} />
            <Route path="/reviews/:id" element={<Review/>} />
          </Routes>
        </div>
      </div>
    );
  }
}

export default App;
