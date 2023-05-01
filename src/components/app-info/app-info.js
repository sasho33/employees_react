import './app-info.css';

const AppInfo = (props) => {
  return (
    <div className="app-info">
      <h1>Employees schedule in company "Umbrella"</h1>
      <h2>Total number of employee: {props.employees}</h2>
      <h2>Bonuses will get: {props.increased}</h2>
    </div>
  );
};

export default AppInfo;
