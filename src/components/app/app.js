import { Component } from 'react';
// import nextId from 'react-id-generator';
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
        { name: 'John Smith', salary: 1000, bonus: false, rise: true, id: 1 },
        { name: 'Greg Connnor', salary: 800, bonus: true, rise: false, id: 2 },
        { name: 'Mike Hearn', salary: 2000, bonus: false, rise: false, id: 3 },
      ],
      term: '',
      filter: 'all',
    };
    this.maxId = 4;
  }

  deleteItem = (id) => {
    this.setState(({ data }) => ({ data: data.filter((item) => item.id !== id) }));
  };

  addItem = (name, salary) => {
    const newId = this.maxId++;
    const newItem = { name, salary, bonus: false, rise: false, id: newId };
    this.setState(({ data }) => ({
      data: [...this.state.data, newItem],
    }));
    // console.log(this.state.data);
  };

  onToggleProp = (id, prop) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, [prop]: !item[prop] };
        }
        return item;
      }),
    }));
  };

  searchEmp = (items, term) => {
    if (term.length === 0) {
      return items;
    }
    return items.filter((item) => {
      return item.name.indexOf(term) > -1;
    });
  };

  onUpdateSearch = (term) => {
    this.setState({ term });
  };

  onFilter = (condition, items) => {
    // if (condition === 'all') {
    //   return items;
    // }
    // if (condition === 'promotion') {
    //   return items.filter((item) => {
    //     return item.bonus;
    //   });
    // }
    // if (condition === 'salary1000') {
    //   return items.filter((item) => {
    //     return item.salary >= 1000;
    //   });
    // }
    switch (condition) {
      case 'promotion':
        return items.filter((item) => {
          return item.bonus;
        });
      case 'salary1000':
        return items.filter((item) => {
          return item.salary >= 1000;
        });
      default:
        return items;
    }
  };

  onUpdateFilter = (filter) => {
    this.setState({ filter });
  };

  onManualyUpdateSalary = (id, salary) => {
    this.setState(({ data }) => ({
      data: data.map((item) => {
        if (item.id === id) {
          return { ...item, salary };
        }
        return item;
      }),
    }));
  };

  render() {
    const { data, term, filter } = this.state;
    const employees = data.length;
    const increased = data.filter((item) => item.bonus).length;
    const filteredData = this.onFilter(filter, data);
    const visibleData = this.searchEmp(filteredData, term);

    return (
      <div className="app">
        <AppInfo employees={employees} increased={increased} />
        <div className="search-panel">
          <SearchPanel onUpdateSearch={this.onUpdateSearch} />
          <AppFilter onUpdateFilter={this.onUpdateFilter} filter={filter} />
        </div>
        <EmployeesList
          data={visibleData}
          onDelete={this.deleteItem}
          onToggleProp={this.onToggleProp}
          onManualyUpdateSalary={this.onManualyUpdateSalary}
        />
        <EmployeesAddForm onAdd={this.addItem} />
      </div>
    );
  }
}

export default App;
