import React, {Component} from "react";
import { Button, ButtonToolbar } from 'react-bootstrap';

//
// const buttonsInstance = (
//     <ButtonToolbar>
//         {/* Standard button */}
//         <Button>Default</Button>
//
//         {/* Provides extra visual weight and identifies the primary action in a set of buttons */}
//         <Button bsStyle="primary">Primary</Button>
//
//         {/* Indicates a successful or positive action */}
//         <Button bsStyle="success">Success</Button>
//
//         {/* Contextual button for informational alert messages */}
//         <Button bsStyle="info">Info</Button>
//
//         {/* Indicates caution should be taken with this action */}
//         <Button bsStyle="warning">Warning</Button>
//
//         {/* Indicates a dangerous or potentially negative action */}
//         <Button bsStyle="danger">Danger</Button>
//
//         {/* Deemphasize a button by making it look like a link while maintaining button behavior */}
//         <Button bsStyle="link">Link</Button>
//     </ButtonToolbar>
// );

class Employee extends Component {
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        alert('delete ' + this.props.employee._links.self.href);
        //this.props.onDelete(this.props.employee);   {this.props.employee._links.self.href}
    }
    render() {
        return (
            <tr>
                <td>{this.props.employee.firstName}</td>
                <td>{this.props.employee.lastName}</td>
                <td>{this.props.employee.description}</td>
                <td>
                    <ButtonToolbar>
                        <Button bsStyle="danger" onClick={this.handleDelete}>Delete</Button>
                    </ButtonToolbar>

                </td>
            </tr>
        )
    }
}

export default Employee;