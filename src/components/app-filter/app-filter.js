import './app-filter.css';

const AppFilter = (props) => {
  const buttonsData = [
    { data: 'all', label: 'All employees' },
    { data: 'promotion', label: 'On promotion' },
    { data: 'salary1000', label: 'Salary more than 1000$' },
  ];

  const filterHandler = (e) => {
    const filter = e.target.getAttribute('data-filter');
    props.onUpdateFilter(filter);
  };
  const buttons = buttonsData.map(({ data, label }) => {
    const active = props.filter === data;
    const clazz = active ? 'btn btn-light' : 'btn btn-outline-light';
    return (
      <button key={data} onClick={filterHandler} data-filter={data} className={clazz} type="button">
        {label}
      </button>
    );
  });

  return <div className="btn-group">{buttons}</div>;
};

export default AppFilter;
