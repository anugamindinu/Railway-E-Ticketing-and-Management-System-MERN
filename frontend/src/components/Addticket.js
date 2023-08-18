import React, { useState } from "react";
import axios from 'axios';
import "../css/Addticket.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

 function Addticket(){
    const [name, setName] = useState("");
    const [numberOfPassengers, setNumberOfPassengers] = useState(0);
    const [startStation, setStartStation] = useState("");
    const [endStation, setEndStation] = useState("");
    const [classNo, setClassNo] = useState(0);
    const [date, setDate] = useState("");
    const [food, setFood] = useState("");

    function sendData(e){
        e.preventDefault(); // stops page from refreshing when form is submitted

        const newTicket = {
            "name": name,
            "numberOfPassengers": numberOfPassengers,
            "startStation": startStation,
            "endStation": endStation,
            "classno": classNo,
            "date": date,
            "food": food,
        }
        console.log(newTicket);  // change this part to send data to server or API using Axios or fetch

        axios.post("http://localhost:8070/nomelticket/add", newTicket)
        .then(()=>{
            toast.success("Plese Click tha Next Button",{
              position:toast.POSITION.TOP_RIGHT,
            });
        }).catch((err)=>{
            console.log(err);

        })

    }

    return(
      <div>
        

        <div className="formbold-main-wrapper" >

        <h1 className="h1">Fill in the ticket</h1>
        <br></br>
  <div className="formbold-form-wrapper">
  
    <form  onSubmit={sendData}  >
      <div className="formbold-input-wrapp formbold-mb-3">

        <label for="name" class="formbold-form-label"> Name </label>
        <div>
          <input
          required
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your name"
            class="formbold-form-input"
            onChange={(e) => setName(e.target.value)} 
            value={name}
          />
        </div>
      </div>

      <div class="formbold-mb-3">
        <label for="numberOfPassengers" class="formbold-form-label"> Number Of Passenger </label>
        <input
          type="number"
          name="numberOfPassengers"
          id="numberOfPassengers"
          required max="10" min="1"
          placeholder="ex:25"
          class="formbold-form-input"
          onChange={(e) => setNumberOfPassengers(e.target.value)}
           value={numberOfPassengers}
        />
      </div>

      <div class="formbold-mb-3">
        <label for="dob" class="formbold-form-label"> Start Station </label>
        <input type="text"
        
        required
         id="startStation"
          onChange={(e) => setStartStation(e.target.value)}
           value={startStation} 
            class="formbold-form-input" />
      </div>

      <div class="formbold-mb-3">
        <label for="dob" class="formbold-form-label"> End Station </label>
        <input type="text" required id="endStation" 
        onChange={(e) => setEndStation(e.target.value)}
         value={endStation}
            class="formbold-form-input" />
      </div>

      <div class="formbold-mb-3">
        <label for="classNo" class="formbold-form-label"> Class </label>
        <input
          type="number"
          name="classNo"
          id="classNo"
          required max="3" min="1"
          placeholder="ex:25"
          class="formbold-form-input"
          onChange={(e) => setClassNo(e.target.value)}
           value={classNo}
        />
      </div>

      <div class="formbold-mb-3">
        <label for="date" class="formbold-form-label"> Date </label>
        <input
          type="date"
          name="date"
          id="date"
          class="formbold-form-input"
          onChange={(e)=>setDate(e.target.value)}
         
           value={date}
        />
      </div>

      <div class="formbold-mb-3" >
      <label class="formbold-form-label" htmlFor="food">Choose a Food:</label>
      <br></br>
      <center><p1  class="p1" >You can Choose only one package</p1></center>
      
      <div>
        <br></br>
            <a  className="menu-butt" href="/menu"><span>View Menu </span></a> 
       </div>

            <select  class="formbold-form-input" name="food" id="food" onChange={(e)=>setFood(e.target.value)}value={food}>
              <option  value="Single Package">Single Package</option>
              <option  value="COMBO Package">COMBO Package</option>
              <option  value="FIESTA Package">FIESTA Package</option>
              <option  value="Large Burger with App Juice">Large Burger with App Juice</option>
              <option  value="Biscuits(include free offer)">Biscuits(include free offer)</option>
              <option  value="Chips Package">Chips Package</option>
              <option  value="None">None</option>
            </select>
            </div>

      <br></br>
    
        <button  className="formbold-btn" type="submit">Submit Deatails</button>
        <br></br>
       <div>
        
                <a  className="button" href="/add"><span>Next </span></a> 
                </div>
    </form>
  </div>
</div>
<ToastContainer></ToastContainer>
</div>
    )
}
// --------------------------------------------------------------------------------------
export default Addticket;