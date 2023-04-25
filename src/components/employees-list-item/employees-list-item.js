import './employees-list-item.css';

const EmployeesListItem = ({ name, salary, bonus }) => {
  let employeeClass = 'list-group-item d-flex justify-content-between';
  if (bonus === true) {
    employeeClass += ' increase';
  }

  return (
    <li className={employeeClass}>
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={salary + '$'} />
      <div className="d-flex justify-content-center align-items-center">
        <button type="button" className="btn-cookie btn-sm ">
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm ">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
