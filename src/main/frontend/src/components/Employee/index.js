import React, {Component} from "react";

class Employee extends Component {
    render() {
        return (
            <tr>
                <td><a href={this.props.employee._links.self.href}>detail</a></td>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
            </tr>
        )
    }
}

export default Employee;