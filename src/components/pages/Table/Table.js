import React from 'react'

export default function Table() {
    return (
        <div style={{gridArea:'main'}}>
            <table class="ui compact celled definition table">
                <thead>
                    <tr>
                        <th></th>
                        <th>No:</th>
                        <th>Name</th>
                        <th>Registration Date</th>
                        <th>E-mail address</th>
                        <th>Premium Plan</th>
                        <th>NIC No: </th>
                        <th>Due Amount </th>
                        <th>Course Code </th>
                        <th>Course </th>
                        <th>Total </th>
                        <th>Paid Amount </th>
                        <th>Remaining </th>
                        
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox"/> <label></label>
                            </div>
                        </td>
                        <td>01</td>
                        <td>Dhanushka H</td>
                        <td>September 14, 2013</td>
                        <td>dhanushsaklpsdarf_abili@gmail.com</td>
                        <td>Yes</td>
                        <td>6</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>12</td>
                    </tr>

                    <tr>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                            <input type="checkbox"/> <label></label>
                            </div>
                        </td>
                        <td>02</td>
                        <td>Chamal M</td>
                        <td>January 11, 2014</td>
                        <td>w_chamal@yahoo.com</td>
                        <td>No</td>
                    </tr>

                    <tr>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                            <input type="checkbox"/> <label></label>
                            </div>
                        </td>
                        <td>03</td>
                        <td>Isuru Sam</td>
                        <td>May 11, 2014</td>
                        <td>jil_isuru22@yahoo.com</td>
                    <td>Yes</td>
                    </tr>

                    <tr>
                        <td class="collapsing">
                            <div class="ui fitted slider checkbox">
                                <input type="checkbox"/> <label></label>
                            </div>
                        </td>
                        <td>04</td>
                        <td>Kasun V</td>
                        <td>September 14, 2021</td>
                        <td>siri_cmc@gmail.com</td>
                        <td>No</td>
                        <td>6</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>No</td>
                        <td>12</td>
                    </tr>

                </tbody>

                <tfoot class="full-width">
                    <tr>
                        <th></th>
                        <th colspan="12">
                            <div class="ui right floated small  primary labeled icon button">                               
                                    <i class="user icon"></i> Add User                                
                            </div>
                                
                            <div class="ui small teal submit button">
                                Approve
                            </div>

                            <div class="ui small teal submit disabled button">
                                Approve All
                            </div>
                        </th>
                    </tr>
                </tfoot>

            </table>

        </div>
    )
}
