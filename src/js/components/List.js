import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { medias: state.medias };
};

const ConnectedList = ({ medias }) => (
  <ul className="list-group list-group-flush">
    {medias.map(el => (
      <li className="list-group-item" key={el.id}>
        {el.title}
      </li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;