import React, { Component } from 'react';
import "../css/Home.css";


export default class Home extends Component {
  render() {
    return (
      <div>        
        <div className="wrapper">
          <div style={{backgroundImage: 'url(https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-1.jpg)'}}></div>
          <div style={{backgroundImage: 'url(https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-2.jpg)'}}></div>
          <div style={{backgroundImage: 'url(https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-6.jpg)'}}></div>
          <div style={{backgroundImage: 'url(https://seatreservation.railway.gov.lk/mtktwebslr/gallery/gallery-4.jpg)'}}></div>
          <div style={{backgroundImage: 'url(https://www.stockholm.embassy.gov.lk/wp-content/uploads/2022/01/sri-lanka.jpeg)'}}></div>
        </div>
        <div className='createPostWrapper'>
          <h1 className='h'>Welcome to Sri Lanka Railways </h1>
          <br></br>
          <br></br>
          <div className='p'>
          <p1 >Online Train Tickets Buying</p1>

          </div>
          <br></br>
          <br></br>
          <br></br>
          <div>
          <a className='butt' href='/addticket'>Buy your ticket Credit</a>
          </div>
          <br></br>
          <div>
          <a className='butt' href='/addworrent'>Buy your ticket Worrent</a>
          </div>
          
        </div>
        </div>
      
    )
  }
}
