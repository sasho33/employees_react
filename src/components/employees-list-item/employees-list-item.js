import { Component } from 'react';

import './employees-list-item.css';

class EmployeesListItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bonus: false,
    };

    this.state = {
      star: false,
    };
  }
  render() {
    const { name, salary } = this.props;
    const { bonus } = this.state;
    const { star } = this.state;

    let employeeClass = 'list-group-item d-flex justify-content-between';
    const increaseSalary = () => {
      this.setState(({ bonus }) => ({ bonus: !bonus }));
    };
    if (bonus === true) {
      employeeClass += ' increase';
    }

    const starHandler = () => {
      this.setState(({ star }) => ({ star: !star }));
      console.log(star);
    };
    if (star === true) {
      employeeClass += ' like';
    }

    return (
      <li className={employeeClass}>
        <span onClick={starHandler} className="list-group-item-label">
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={increaseSalary} type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash"></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
