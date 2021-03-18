import React, { Component } from "react";
import Axios from "axios";
// import Modal from "./Modal"

export default class UpdateCard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      album: "",
      debut: "",
      members: "",
      id: this.props.location.state.id,
      
    };
  }

  componentDidMount() {
    Axios.get(`http://localhost:4000/api/musicians/${this.state.id}`).then(
      res => {
        console.table(res.data);
        this.setState({
            filepath: res.data.filepath,
          name: res.data.name,
          album: res.data.album,
          debut: res.data.debut,
          members: res.data.members,
          id: res.data.id,
         
        });
      }
    );
  }

  updateMusician = e => {
    e.preventDefault();

    Axios.put(
      `http://localhost:4000/api/musicians/${this.state.id}`,
      this.state
    ).then(res => {
      console.log(res);
      if (res.statusText === "OK") {
       alert("Success - this needs a pretty modal")
      } else {
        alert("Fail - this needs a pretty modal")
      }
    });
  };

  handleFilepath = e => {
    this.setState({ filepath: e.target.value });
  }

  handleName = (e) => {
    this.setState({ name: e.target.value });
  };

  handleAlbum = (e) => {
    this.setState({ album: e.target.value });
  };
  handleDebut = (e) => {
    this.setState({ debut: e.target.value });
  };

  onClose = e => {
    console.log("123");
    // this.props.showmodal = false;
    this.setState({ showmodal: false });
  };

  render() {

    return (
         <div className="form-wrapper">
        <h1>Update Musician:</h1>
        <form className="special" onSubmit={this.updateMusician}>

        <div>
            <label>Image file path</label>
            <input
              type="text"
              name="filepath"
              placeholder=".jpg, .png, .gif etc"
              value={this.state.filepath}
              onChange={this.handleFilepath}
            />
          </div>
        <div>
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="artist name"
              value={this.state.name}
              onChange={this.handleName}
            />
          </div>

          <div>
            <label>Album</label>
            <input
              type="text"
              name="album"
              placeholder="your favorite album"
              value={this.state.album}
              onChange={this.handleAlbum}
            />
          </div>
          <div>
            <label>Debut</label>
            <input
              type="text"
              name="debut"
              placeholder="debut year"
              value={this.state.Debut}
              onChange={this.handleDebut}
            />
          </div>
          <br />
          <button type="submit">Update details</button>
        </form>

      </div>
    );
  }
}
