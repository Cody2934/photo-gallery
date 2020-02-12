import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return ( <li key= {this.props.image}>
            {/* this is the information */}
            <div className="info-container">
                <h2>{this.props.image.name}</h2>
                <p className="monster-type">{this.props.image.keyword}</p>
            </div>

            {/* this is the image */}
            <div className="image-container">
                <img
                    alt={this.props.image.url}
                    src={this.props.image.url} />
            </div>
            <p className="description">{this.props.image.description}</p>
        </li>
        )
    }
}