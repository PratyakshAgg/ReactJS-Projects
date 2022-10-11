import React from "react";

export default function Traveldata(props) {
    return (
        <div className="mainpage">
            <img className="imageUrl" src={props.item.imageUrl}/>
            <div className="maindiv">
                <div className="toplinediv" >
                    <img className="locicon" src="https://img.icons8.com/ios-filled/50/f55a5a/marker.png"/>
                    <h4 className="location">{props.item.location}</h4>
                    <a className="googleMapsUrl" href={props.item.googleMapsUrl} target="_blank">View on Google Maps</a>
                </div>
                <h1 className="title">{props.item.title}</h1>
                <h4 className="dates">{props.item.startDate} - {props.item.endDate}</h4>
                <p className="description">{props.item.description}</p>
            </div>  
        </div>
    )
}