import React, { Component } from 'react'
import { navigate } from '@reach/router'
import SiteButton from "./SiteButton";
import Axios from "axios";


export default class SingleCard extends Component {

    goToDetails = e => {
        
            navigate (`/musician-info`, {state: {id:this.props.id}});
            console.log("go to single info")
    }

    goToUpdate = e => {
        navigate (`/update`, {state: {id:this.props.id}});
            console.log("go to update")
    }
// deleting cards = ok

    onDelete = e => {
        console.log("deleting", this.props.id);
        
        Axios.delete(`http://localhost:4000/api/musicians/${this.props.id}`).then(
            res => {
                console.log(res)
                if (res.data.deletedCount >= 1){
                    console.log (">>>>> successful deletion, reload writers to see changes");
                }
                    else {
                        console.log (">>>> nothing deleted");
                    }
                }
        );
            }

    render() {
        return (
            <div className="single-card">
                <div className="album-img">
                <img src={"./images/" + this.props.filepath} alt="musician image"/></div>
                <div className="info">
                <span className="m-name">{this.props.name}</span>
                <p className="m-album">{this.props.album}</p>

                <div className="button-box">
                <SiteButton action={this.goToDetails} message={"More Info"}/>
                <SiteButton action={this.goToUpdate} message={"Update"}/>
                <SiteButton action={this.onDelete} message={"Delete"}/>
                </div>
                </div>
                
            </div>
        )
    }
}
