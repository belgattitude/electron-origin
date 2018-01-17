import React from "react";
import { connect } from "react-redux";

const mapStateToProps = (state: any) => {
  return { medias: state.medias };
};

export interface SFCListProps {
    medias: any[];
}

const ConnectedList: React.SFC<SFCListProps> = ({ medias }) => (
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