import React, {useState, useEffect} from "react";
import axios from "axios";
import "../css/Displayticket.css";
import "../css/Addticket.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Displayticket() {
  const [ticket, setTicket] = useState(null);
  const [id, setId] = useState("");
  const [rowData, setRowData] = useState([]);

  //setters
  const [name, setName] = useState();
    const [numberOfPassengers, setNumberOfPassengers] = useState();
    const [startStation, setStartStation] = useState();
    const [endStation, setEndStation] = useState();
    const [classno, setClassNo] = useState();
    const [date, setDate] = useState();
    const [food, setFood] = useState();
    const [price, setPrice] = useState(0);

  
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  const handleUpdateClick = () => {
    setShowUpdateForm(true);
  };
  const updatedData = {
    name,
    numberOfPassengers,
    startStation,
    endStation,
    classno,
    date,
    food
  }
  const updateTicket = (id)=>{
    axios.put(`http://localhost:8070/nomelticket/update/${id}`, updatedData)
    .then(
      ()=>{
        toast.success("Update successfully...!",{
          position:toast.POSITION.TOP_RIGHT,
        });
      }
    ).catch((err)=>{
      console.log(err.message);
    });
  };

  useEffect(() => {
    axios
      .get("http://localhost:8070/nomelticket/addticket", {
        params: {
          $limit: 1,
          $sort: {_id: -1},
        },
      })
      .then((res) => {
        if (res.data.length > 0) {
          setTicket(res.data[res.data.length - 1]);
          const { numberOfPassengers, classno,food } = res.data[res.data.length - 1];
          // calculate the price based on the number of passengers and class number
          let calculatedPrice;
          if (classno === 1 && food === "Single Package") {
            calculatedPrice = (numberOfPassengers * 500)+1500;
          }
          else if (classno === 1 && food === "COMBO Package") {
            calculatedPrice = (numberOfPassengers * 500)+1100;
          }
          else if (classno === 1 && food === "FIESTA Package") {
            calculatedPrice = (numberOfPassengers * 500)+1900;
          }
          else if (classno === 1 && food === "Large Burger with App Juice") {
            calculatedPrice = (numberOfPassengers * 500)+500;
          }
          else if (classno === 1 && food === "Biscuits(include free offer)") {
            calculatedPrice = (numberOfPassengers * 500)+1000;
          }
          else if (classno === 1 && food === "Chips Package") {
            calculatedPrice = (numberOfPassengers * 500)+400;
          }
          else if (classno === 1 && food === "None") {
            calculatedPrice = (numberOfPassengers * 500)+0;
          }


        
          else if (classno === 2 && food === "Single Package") {
            calculatedPrice = (numberOfPassengers * 250)+1500;
          }
          else if (classno === 2 && food === "COMBO Package") {
            calculatedPrice = (numberOfPassengers * 250)+1100;
          }
          else if (classno === 2 && food === "FIESTA Package") {
            calculatedPrice = (numberOfPassengers * 250)+1900;
          }
          else if (classno === 2 && food === "Large Burger with App Juice") {
            calculatedPrice = (numberOfPassengers * 250)+500;
          }
          else if (classno === 2 && food === "Biscuits(include free offer)") {
            calculatedPrice = (numberOfPassengers * 250)+1000;
          }
          else if (classno === 2 && food === "Chips Package") {
            calculatedPrice = (numberOfPassengers * 250)+400;
          }
          else if (classno === 2 && food === "None") {
            calculatedPrice = (numberOfPassengers * 250)+0;
          }



          else if (classno === 3 && food === "Single Package") {
            calculatedPrice = (numberOfPassengers * 100)+1500;
          }
          else if (classno === 3 && food === "COMBO Package") {
            calculatedPrice = (numberOfPassengers * 100)+1100;
          }
          else if (classno === 3 && food === "FIESTA Package") {
            calculatedPrice = (numberOfPassengers * 100)+1900;
          }
          else if (classno === 3 && food === "Large Burger with App Juice") {
            calculatedPrice = (numberOfPassengers * 100)+500;
          }
          else if (classno === 3 && food === "Biscuits(include free offer)") {
            calculatedPrice = (numberOfPassengers * 100)+1000;
          }
          else if (classno === 3 && food === "Chips Package") {
            calculatedPrice = (numberOfPassengers * 100)+400;
          }
          else if (classno === 3 && food === "None") {  
            calculatedPrice = (numberOfPassengers * 100)+0;
          }
          setPrice(calculatedPrice);
        }
      })
      
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const handleDelete = () => {
    let id = ticket._id;
    axios
      .delete(`http://localhost:8070/nomelticket/delete/${id}`)
      .then((res) => {
        setTicket(null);
        toast.success("Delete successfully...!",{
          position:toast.POSITION.TOP_RIGHT,
        });
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <div className="d">
        <ToastContainer/>
    <div className="background">
    
      <div className="container">
        <div className="panel pricing-table">
         
          <div className="pricing-plan">
            <img
              src="https://cdn.dribbble.com/users/230541/screenshots/3784161/media/d44f16d763920c176f3fc0d69fcbf1e9.jpg"
              alt=""
              className="pricing-img"
            />
            <h2 className="pricing-header">viwe Ticket</h2>
            {ticket ? (
            <ul className="pricing-features">
              <li className="pricing-features-item">Name :{ticket.name} </li>
              <li className="pricing-features-item">Number Of Passengers :{ticket.numberOfPassengers} </li>
              <li className="pricing-features-item">Start Station : {ticket.startStation}</li>
              <li className="pricing-features-item">End Station :{ticket.endStation}</li>
              <li className="pricing-features-item">Class : {ticket.classno}</li>
              <li className="pricing-features-item">Date :{new Date(ticket.date).toLocaleDateString()}</li>
              <li className="pricing-features-item">Food :{ticket.food}</li>
              <li className="pricing-features-item">Price : {price} </li>
            </ul>
            ) : (
              <p>No ticket found</p> // If there's no ticket data available
            )}
             {ticket && (
           <button  type="button" className="formbold-btn3" onClick={handleDelete}>
           Delete Details
         </button>
       )}
       <div>
        <br></br>
        <div>
          <button type="button" className="formbold-btn1" id="update" onClick={()=>{
            handleUpdateClick();
            setRowData(ticket);
            setId(ticket._id);
          }}>
            Update Details{" "}
          </button>
        </div>
         <br></br>
         <div>
         {ticket && (
        
         <a href="/all" className="buttonnext" ><span>Get the ticket </span></a> 
       )}
        
        </div>

       </div>
          </div>
        </div>
      </div>
      </div>

      

{/* update.......      */}
      
      {showUpdateForm && (
         <div onSubmit={updateTicket.bind(null, rowData._id)}>
        

        <div className="formbold-main-wrapper">

        <h1 className="h1">Fill in the ticket</h1>
        <br></br>
  <div className="formbold-form-wrapper">
  
                <form  >
      <div className="formbold-input-wrapp formbold-mb-3">

        <label for="name" class="formbold-form-label"> Name </label>
        <div>
          <input
            type="text"
            name="firstname"
            id="firstname"
            placeholder="Enter your name"
            class="formbold-form-input"
            defaultValue={rowData.name}
          onChange={(e)=>setName(e.target.value)}
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
          defaultValue={rowData.numberOfPassengers}
          onChange={(e)=>setNumberOfPassengers(e.target.value)}
        />
      </div>

      <div class="formbold-mb-3">
        <label for="dob" class="formbold-form-label"> Start Station </label>
        <input type="text" required
         id="startStation"
         defaultValue={rowData.startStation}
         onChange={(e)=>setStartStation(e.target.value)}
            class="formbold-form-input" />
      </div>

      <div class="formbold-mb-3">
        <label for="dob" class="formbold-form-label"> End Station </label>
        <input type="text" required id="endStation" 
        defaultValue={rowData.endStation}
        onChange={(e)=>setEndStation(e.target.value)}
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
          defaultValue={rowData.classno}
          onChange={(e)=>setClassNo(e.target.value)}
        />
      </div>

      <div class="formbold-mb-3">
        <label for="date" class="formbold-form-label"> Date : {new Date(rowData.date).toLocaleDateString()}  </label>
        <input
          type="date"
          name="date"
          id="date"
          class="formbold-form-input"
          
          onChange={(e)=>setDate(e.target.value)}
        />
      </div>

      <div class="formbold-mb-3" >
      <label class="formbold-form-label" htmlFor="food">Choose a Food:</label>
      
      <div>
            <a  className="menu-butt" href="/menu"><span>viwe Menu </span></a> 
       </div>

            <select  class="formbold-form-input" name="food" id="food" defaultValue={rowData.food}
          onChange={(e)=>setFood(e.target.value)}>
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
    
        <button type="submit" className="formbold-btn1" onClick={updateTicket}>
        Save Changes
      </button>
    </form>
    </div>
</div>

            </div>
            )}
            <br/>
      <br/>
      <br/>
      
    
    </div>
  );
}

export default Displayticket;
