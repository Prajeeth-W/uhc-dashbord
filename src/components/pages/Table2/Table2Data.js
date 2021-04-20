import React from 'react'

 const Table2Data = (props) => {
    return (
        <div>
                
                <table className="ui compact celled definition table">
                    
                    <thead>
                        <tr>
                            <th></th>
                            <th scope="col">No:</th>
                            <th scope="col">Name</th>
                            <th scope="col">Registration Date</th>
                            <th scope="col">E-mail address</th>
                            <th scope="col">Premium Plan</th>
                            <th scope="col">NIC No: </th>
                            <th scope="col">Due Amount </th>
                            <th scope="col">Course Code </th>
                            <th scope="col">Course </th>
                            <th scope="col">Total </th>
                            <th scope="col">Paid Amount </th>
                            <th scope="col">Remaining </th>
                            
                        </tr>
                    </thead>

                    <tbody>
                        <tr>
                            <td className="collapsing ui compact celled definition table">
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox"/> <label></label>
                                </div>
                            </td>
                            <td data-label="No"> {props.no}</td>
                            <td data-label="Name">{props.name }</td>
                            <td data-label="Registration Date">{props.regDate }</td>
                            <td data-label="E-mail address">{props.email }</td>
                            <td data-label="Premium Plan">{props.premium }</td>
                            <td data-label="NIC No:">{props.nic }</td>
                            <td data-label="Due Amount">{props.due }</td>
                            <td data-label="Course Code">{props.courseCode }</td>
                            <td data-label="Course">{props.course }</td>
                            <td data-label="Total">{props.total }</td>
                            <td data-label="Paid Amount">{props.paid }</td>
                            <td data-label="Remaining">{props.remain }</td>
                        </tr>  
                    </tbody>              
                
                    <tfoot className="full-width ">
                        <tr>
                            <th></th>
                            <th colspan="12">
                              
                                

                            </th>
                        </tr>
                    </tfoot>
                    
                </table>
            </div>                    
        
    )
}
export default Table2Data;
