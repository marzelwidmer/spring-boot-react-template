import React, {Component} from "react";
import Employee from '../Employee';
import './style.css'
import { Table } from 'react-bootstrap';


class EmployeeList extends Component {
    render() {
        var employees = this.props.employees.map(employee =>
            <Employee key={employee._links.self.href} employee={employee}/>
        );
        return (
            <Table striped bordered condensed hover>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th colSpan='2'>Description</th>
                </tr>
                </thead>
                <tbody>
                {employees}
                </tbody>
            </Table>
        )
    }
}
export default EmployeeList;

