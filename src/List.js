import React from "react";
import "./App.css";
import { sortBy } from "lodash";

const SORTS = {
  NONE: (list) => list,
  TITLE: (list) => sortBy(list, "title"),
  AUTHOR: (list) => sortBy(list, "author"),
  COMMENT: (list) => sortBy(list, "num_comments").reverse(),
  POINT: (list) => sortBy(list, "points").reverse(),
};

const List = ({ list, onRemoveItem }) => {
  const [sort, setSort] = React.useState("NONE");

  const handleSort = (sortKey) => {
    setSort(sortKey);
  };

  const sortFunction = SORTS[sort];
  const sortedList = sortFunction(list);

  return (
    <div>
      <div style={{ display: "flex" }}>
        <span className="row1">
          <button
            className="button button_small"
            type="button"
            onClick={() => handleSort("TITLE")}
          >
            Title
          </button>
        </span>
        <span className="row2">
          <button
            className="button button_small"
            type="button"
            onClick={() => handleSort("AUTHOR")}
          >
            Author
          </button>
        </span>
        <span className="row3">
          <button
            className="button button_small"
            type="button"
            onClick={() => handleSort("COMMENT")}
          >
            Comments
          </button>
        </span>
        <span className="row4">
          <button
            className="button button_small"
            type="button"
            onClick={() => handleSort("POINTS")}
          >
            Points
          </button>
        </span>
        <span className="row5">Actions</span>
      </div>
      {sortedList.map((item) => (
        <Item key={item.objectID} item={item} onRemoveItem={onRemoveItem} />
      ))}
    </div>
  );
};

const Item = ({ item, onRemoveItem }) => (
  <div className="item">
    <span className="row1">
      <a href={item.url}>{item.title}</a>
    </span>
    <span className="row2">{item.author}</span>
    <span className="row3">{item.num_comments}</span>
    <span className="row4">{item.points}</span>
    <span className="row5">
      <button type="button" onClick={() => onRemoveItem(item)}>
        Dismiss
      </button>
    </span>
  </div>
);

export default List;
