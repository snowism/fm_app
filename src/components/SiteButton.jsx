

import React, { Component } from 'react'
import { navigate } from "@reach/router";

export default class SiteButton extends Component {
    render() {
        return (
            <div>
                  <button onClick={this.props.action}>
          {/* || is a javascript OR */}
          {this.props.message || "set text via props"}
        </button>
            </div>
        )
    }
}
