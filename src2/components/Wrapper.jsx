import React, { Component } from "react";
import Axios from "axios";
import SingleCard from "./SingleCard";

export default class Wrapper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      musiciansArray: [],
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/musicians/`).then((res) => {
      console.table(res.data);
      this.setState({
        musiciansArray: res.data,
      });
    });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.musiciansArray.map((item, index) => {
          return (
           
            <SingleCard
              key={index}
              name={item.name}
              album={item.album}
             id={item.id}
             filepath = {item.filepath}
            />
            
          );
        })}
      </React.Fragment>
    );
  }
}