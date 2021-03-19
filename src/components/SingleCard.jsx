import React, { Component } from 'react'
import { navigate } from '@reach/router'
import SiteButton from "./SiteButton";
import Axios from "axios";
import Modal from "./Modal"

export default class SingleCard extends Component {

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

    goToDetails = e => {

        navigate(`/musician-info`, { state: { id: this.props.id } });
        console.log("go to single info")
    }

    goToUpdate = e => {
        navigate(`/update`, { state: { id: this.props.id } });
        console.log("go to update")
    }


    onDelete = e => {


        Axios.get(`http://localhost:4000/api/musicians/${this.props.id}`).then(
            (res) => {
                console.table(res);

                if (res.statusText === "OK") {
                    console.log("showmodal");
                    this.setState({ showmodal: true });
                }
            })
    }


    onConfirm = e => {

        console.log("clicked confirm")
        navigate(`/`);
        Axios.delete(`http://localhost:4000/api/musicians/${this.props.id}`).then(
            res => {
                console.log(res)


                if (res.data.deletedCount >= 1) {
                    this.setState({ showmodal: false });
                    this.props.onSuccessfulDeletion();
                    console.log(">>>>> successful deletion, reload data to see changes");
                }
                else {
                    console.log(">>>> nothing deleted");
                }
            }
        );

    }


    keepCard = e => {
        this.setState({ showmodal: false })
    }


    render() {
        return (

            <div className="single-card">
                <div className="album-img">
                    <img src={"./images/" + this.props.filepath} alt="musician image" /></div>
                <div className="info">
                    <span className="m-name">{this.props.name}</span>
                    <p className="m-album">{this.props.album}</p>

                    <div className="button-box">
                        <SiteButton action={this.goToDetails} message={"More Info"} />
                        <SiteButton action={this.goToUpdate} message={"Update"} />
                        <SiteButton action={this.onDelete} message={"Delete"} />

                    </div>

                </div>
                <Modal
                    showmodal={this.state.showmodal}
                    comment={`Are you sure to delete ${this.props.name} card?`}
                    action={this.onConfirm}
                    message={"Delete"}
                > 
                <SiteButton action={this.keepCard} message={"NOPE"} />

           


                </Modal>
            </div>



        )
    };
}
