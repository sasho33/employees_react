import EmployeesListItem from '../employees-list-item/employees-list-item';

import './employees-list.css';

const EmployeesList = ({ data, onDelete, onToggleIncrease, onToggleBonus }) => {
  const elements = data.map((item, i) => {
    const { id, ...itemProps } = item;
    return (
      <EmployeesListItem
        key={id}
        {...itemProps}
        onDelete={() => onDelete(id)}
        onToggleBonus={() => onToggleBonus(id)}
        onToggleIncrease={() => onToggleIncrease(id)}
      />
    );
  });

  return <ul className="app-list list-group">{elements}</ul>;
};

export default EmployeesList;
