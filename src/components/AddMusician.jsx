import React, { Component } from "react";
import Axios from "axios";
import Modal from "./Modal";


export default class AddWriter extends Component {
  constructor(props) {
    super(props);
    //state matches express model - the model is case-sensitive
    this.state = {
      name: "",
      album: "",
      filepath: "",
      debut: "",
      members: "",
      id: Date.now(),
      showmodal: false,

    };
  }

  handleSubmit = (event) => {
    console.log("new musician - check MongoDB");
    Axios.post("http://localhost:4000/api/musicians", this.state).then((res) => {
      console.table(res);

      if (res.statusText === "OK") {
        this.setState({ showmodal: true });
      }
    });
    event.preventDefault();
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
    this.setState({ showmodal: false });
  }

  render() {
    return (
      <div className="form-wrapper">
        <form onSubmit={this.handleSubmit}>
          <h2>Add your favorite Musician</h2>
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

          <input type="hidden" name="id" value={this.state.id} />

          <button type="submit">Submit</button>

        </form>
       

       
        <Modal showmodal={this.state.showmodal}
          comment={"Success to add"}
      onClick={this.onClose} message={"OK"}/>

      </div>
      
    );
  }
}
