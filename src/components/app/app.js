import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';

import './app.css';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

const data = [
  { name: 'John Smith', salary: 1000, bonus: false, id: 1 },
  { name: 'Greg Connnor', salary: 800, bonus: true, id: 2 },
  { name: 'Mike Hearn', salary: 2000, bonus: false, id: 3 },
];

function App() {
  return (
    <div className="app">
      <AppInfo />
      <div className="search-panel">
        <SearchPanel />
        <AppFilter />
      </div>
      <EmployeesList data={data} />
      <EmployeesAddForm />
    </div>
  );
}

export default App;
