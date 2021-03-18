import React, { Component } from 'react'
import { Link } from '@reach/router'

export default class Footer extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li><Link to ="/">HOME</Link></li>
                    <li><Link to ="/add-musician">ADD your Musician </Link></li>
                </ul>
            </div>
        )
    }
}
