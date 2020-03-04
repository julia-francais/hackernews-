import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  //put the focus on the Search input while mounting
  // componentDidMount() {
  //   if (this.input) {
  //     this.input.focus();
  //   }
  // }
  render() {
    const { value, onChange, onSubmit, children } = this.props;
    return (
      <form onSubmit={onSubmit}>
        <input
          type="text"
          value={value}
          onChange={onChange}
          ref={el => (this.input = el)}
        />
        <button type="submit">{children}</button>
      </form>
    );
  }
}

Search.proptypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  children: PropTypes.node
};

export default Search;
