
import './employees-list-item.css';

const EmployeesListItem = (props) {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     bonus: false,
  //   };

  //   this.state = {
  //     star: false,
  //   };
  // }
  render() {
    const { name, salary, onDelete, onToggleIncrease, onToggleBonus } = this.props;
    // const { bonus, star } = this.state;

    let employeeClass = 'list-group-item d-flex justify-content-between';
    // const increaseSalary = () => {
    //   this.setState(({ bonus }) => ({ bonus: !bonus }));
    // };
    // if (bonus === true) {
    //   employeeClass += ' increase';
    // }

    // const starHandler = () => {
    //   this.setState(({ star }) => ({ star: !star }));
    // };
    // if (star === true) {
    //   employeeClass += ' like';
    // }

    return (
      <li className={employeeClass}>
        <span onClick={onToggleBonus} className="list-group-item-label">
          {name}
        </span>
        <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
        <div className="d-flex justify-content-center align-items-center">
          <button onClick={onToggleIncrease} type="button" className="btn-cookie btn-sm ">
            <i className="fas fa-cookie"></i>
          </button>
          <button type="button" className="btn-trash btn-sm ">
            <i className="fas fa-trash" onClick={onDelete}></i>
          </button>
          <i className="fas fa-star"></i>
        </div>
      </li>
    );
  }
}

export default EmployeesListItem;
