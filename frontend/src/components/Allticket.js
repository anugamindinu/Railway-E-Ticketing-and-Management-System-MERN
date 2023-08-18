import React, {useState, useEffect, useRef} from "react";
import axios from "axios";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "../css/Displayticket.css";
import "../css/Allticket.css";

function Displayticket() {
  const [tickets, setTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const tableRef = useRef(null);

  useEffect(() => {
    axios
      .get("http://localhost:8070/nomelticket/addticket")
      .then((res) => {
        if (res.data.length > 0) {
          setTickets(res.data);
        }
      })
      .catch((err) => {
        alert(err.message);
      });
  }, []);

  const filteredTickets = tickets.filter((ticket) => {
    return (
      ticket.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.startStation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.endStation.toLowerCase().includes(searchTerm.toLowerCase())||
      ticket.date.toLowerCase().includes(searchTerm.toLowerCase())
      
    );
  });

  const handleDownload = () => {
    // Create a new PDF instance
    const pdf = new jsPDF();

    // Add the table to the PDF
    pdf.autoTable({
      html: tableRef.current,
      startY: 20,
      margin: {horizontal: 10},
    });

    // Save the PDF
    pdf.save("All_tickets.pdf");
  };

  return (
    <div className="background">
      <div className="container">
        <div className="panel pricing-table">
          <div className="pricing-plan">
            <img
              src="https://img.freepik.com/premium-vector/train-logo_10250-3372.jpg?w=740"
              alt=""
              className="pricing-img"
            />
            <h2 className="pricing-header">View all Tickets</h2>
            <br></br>

            

            <div className="search-container">
              <input 
                type="text" 
                placeholder="Search Tickets" 
                value={searchTerm} 
                onChange={(event) => setSearchTerm(event.target.value)}
              />
            </div>
            
            <table className="pricing-features" ref={tableRef}>
              <thead className="pricing">
                <tr>
                  <th> Name</th>
                  <th> Number Of Seats</th>
                  <th> Start Station</th>
                  <th> End Station</th>
                  <th> Class</th>
                  <th> Date</th>
                  <th> Food</th>
                </tr>
              </thead>
              <br></br>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket._id}>
                    <td>{ticket.name}</td>
                    <td>{ticket.numberOfPassengers}</td>
                    <td>{ticket.startStation}</td>
                    <td>{ticket.endStation}</td>
                    <td>{ticket.classno}</td>
                    <td>{new Date(ticket.date).toLocaleDateString()}</td>
                    <td>{ticket.food}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button className="formbold-btn1" onClick={handleDownload}>Download All Details PDF</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Displayticket;
