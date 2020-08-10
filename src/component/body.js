import React, {Component} from 'react';


    

const Body = ({stuff}) => 
        <div>
            <center>Flight List</center>
            {stuff.map((flight) => (
              <div>
                <div className="tableSpacing">
                  <table> 
                    <th>Flight Number: {flight.flightNumber}</th>
                    <tr>
                        <td>Flight origin: {flight.origin}</td>
                    </tr>
                    <tr>
                        <td>Flight destination: {flight.destination}</td>
                    </tr>
                    <tr>
                        <td>Departing: {flight.depart}</td>
                    </tr>
                    <tr>
                        <td>Arriving: {flight.arrive}</td>
                    </tr>
                    <tr>
                        <td>Nonstop: {flight.nonstop.toString()}</td>
                    </tr> 
                  </table>
                  
                </div>
              </div>
            ))}
            </div>
        
          
    
    

       

export default Body;
