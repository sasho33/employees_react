import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term });
    this.props.onUpdateSearch(term);
  };

  render() {
    return (
      <div className="input-group">
        <input
          onChange={this.onUpdateSearch}
          type="text"
          className="form-control search-input mw-100%"
          placeholder="Find employee"
          value={this.state.term}
        />
        {/* <button className="btn btn-danger">Hello</button> */}
      </div>
    );
  }
}

export default SearchPanel;
