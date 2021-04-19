import React from 'react'
import './Table2.css';

export const Table2 = () => {
    return (
        <div style={{gridArea:'main'}} >
            <div style={{overflow:"auto"}}>
                
                <table className="ui compact celled definition table">
                {/* <table> */}
                    <caption>Statement Summary</caption>

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
                            <td data-label="No"> 3412</td>
                            <td data-label="Name">Boil Chamal</td>
                            <td data-label="Registration Date">03/31/2016</td>
                            <td data-label="E-mail address">abcd12456987@gmail.com</td>
                            <td data-label="Premium Plan">No</td>
                            <td data-label="NIC No:">12365478v</td>
                            <td data-label="Due Amount">$1,190</td>
                            <td data-label="Course Code">SE-123</td>
                            <td data-label="Course">Advanced Java Script</td>
                            <td data-label="Total">$2348</td>
                            <td data-label="Paid Amount">00000</td>
                            <td data-label="Remaining">00000</td>
                        </tr>
                        
                        <tr>
                            <td className="collapsing ui compact celled definition table">
                                <div className="ui fitted slider checkbox">
                                    <input type="checkbox"/> <label></label>
                                </div>
                            </td>
                            <td data-label="No"> 3412</td>
                            <td data-label="Name">Pak Chamal</td>
                            <td data-label="Registration Date">03/31/2016</td>
                            <td data-label="E-mail address">abcd12456987@gmail.com</td>
                            <td data-label="Premium Plan">No</td>
                            <td data-label="NIC No:">12365478v</td>
                            <td data-label="Due Amount">$1,190</td>
                            <td data-label="Course Code">SE-123</td>
                            <td data-label="Course">Advanced Java Script</td>
                            <td data-label="Total">$2348</td>
                            <td data-label="Paid Amount">00000</td>
                            <td data-label="Remaining">00000</td>
                        </tr>
                        
                    </tbody>              
                
                    <tfoot className="full-width ">
                        <tr>
                            <th></th>
                            <th colspan="12">
                                
                                 {/* <div style={{display:'block'}}>        */}
                                    <div className="ui small teal submit  labeled icon button" >
                                    {/* <i className="fa-check icon "></i>  */}
                                    <div  className="icon">
                                            <i className="material-icons  ">done</i>
                                        </div>
                                        Approve
                                        
                                    </div>

                                    <div className="ui small teal submit disabled labeled icon button ">
                                        <div  className="icon">
                                            <i className="material-icons  ">done_all</i>
                                        </div>
                                        {/* <span class="material-icons-outlined">done_all</span> */}
                                        Approve All
                                        {/* >> should let be visibled when selected the switch tick << */}
                                    </div>
                                {/* </div>  */}

                                <div className="ui small  primary labeled icon button loc " >    
                                <div  className="icon">
                                            <i className="material-icons  "> person_add_alt</i>
                                        </div>
                                        Add User                                
                                </div>

                            </th>
                        </tr>
                    </tfoot>
                    
                </table>
            </div>                    
        </div>
    )
}

export default Table2;