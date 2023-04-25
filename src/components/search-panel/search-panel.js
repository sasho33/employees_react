import './search-panel.css';

const SearchPanel = () => {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control search-input mw-100%"
        placeholder="Find employee"
      />
      {/* <button className="btn btn-danger">Hello</button> */}
    </div>
  );
};

export default SearchPanel;
