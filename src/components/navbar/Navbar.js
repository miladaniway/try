import React, { Component } from 'react';
import './Navbar.css';


class Navbar extends Component {
  render() {
    return (

      <div>

        <div className="nav">
          <ul>
            <li className="list-item"><a>SD</a></li>
            <li className="list-item"><a>SMP</a></li>
            <li className="list-item"><a>SMA</a></li>
            <li className="list-item"><a>SBMPTN</a></li>
            <li className="list-item"><a>About</a></li>
            <li className="list-item"><a>Blog</a></li>
            <li className="list-item"><a>About</a></li>
          </ul>
        </div>

        <div className="search">
          <input type="text" placeholder="masukan kode konten"/>
        </div>
      </div>


    );
  }

}

export default Navbar;
