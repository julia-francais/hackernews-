import React from "react";
import "../../App.css";
import Button from "../Button";
import PropTypes from "prop-types";
import { SORTS } from "../../App";

const Sort = ({ sortKey, onSort, children }) => (
  <Button onClick={() => onSort(sortKey)} className="button-inline">
    {children}
  </Button>
);

const Table = ({ list, sortKey, onSort, onDismiss }) => (
  <div className="table">
    <div className="table-header">
      <span style={largeColumn}>
        <Sort sortKey={"TITLE"} onSort={onSort}>
          Title
        </Sort>
      </span>
      <span style={midColumn}>
        <Sort sortKey={"AUTHOR"} onSort={onSort}>
          Author
        </Sort>
      </span>
      <span style={smallColumn}>
        <Sort sortKey={"COMMENTS"} onSort={onSort}>
          Comments
        </Sort>
      </span>
      <span style={smallColumn}>
        <Sort sortKey={"POINTS"} onSort={onSort}>
          Points
        </Sort>
      </span>
      <span style={smallColumn}>Archive</span>
    </div>
    {SORTS[sortKey](list).map(item => (
      <div key={item.objectID} className="table-row">
        <span style={largeColumn}>
          <a href={item.url}>{item.title}</a>
          <p>hello iustin</p>
        </span>

        <span style={midColumn}>{item.author}</span>

        <span style={smallColumn}>{item.num_comments}</span>

        <span style={smallColumn}>{item.points}</span>

        <span style={smallColumn}>
          <Button
            onClick={() => onDismiss(item.objectID)}
            className="button-inline"
          >
            Dismiss
          </Button>
        </span>
      </div>
    ))}
  </div>
);

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number
    })
  ).isRequired,
  onDismiss: PropTypes.func.isRequired
};

const largeColumn = {
  width: "40%"
};

const midColumn = {
  width: "30%"
};

const smallColumn = {
  width: "10%"
};

export default Table;
