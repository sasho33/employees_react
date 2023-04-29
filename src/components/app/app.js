import { Component } from 'react';
import nextId from 'react-id-generator';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../emloyees-list/employees-list';

import './app.css';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        { name: 'John Smith', salary: 1000, bonus: false, rise: false, id: 1 },
        { name: 'Greg Connnor', salary: 800, bonus: true, rise: false, id: 2 },
        { name: 'Mike Hearn', salary: 2000, bonus: false, rise: false, id: 3 },
      ],
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id) }));
  };

  addItem = (name, salary) => {
    const newId = nextId();
    const newItem = { name, salary, bonus: false, id: newId };
    this.setState(({ data }) => ({
      data: [...this.state.data, newItem],
    }));
    console.log(this.state.data);
  };

  onToggleIncrease = (id) => {
    console.log(`increase this ${id}`);
  };
  onToggleBonus = (id) => {
    console.log(`rise this ${id}`);
  };

  render() {
    return (
      <div className="app">
        <AppInfo />
        <div className="search-panel">
          <SearchPanel />
          <AppFilter />
        </div>
        <EmployeesList
          data={this.state.data}
          onDelete={this.deleteItem}
          onToggleIncrease={this.onToggleIncrease}
          onToggleBonus={this.onToggleBonus}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
