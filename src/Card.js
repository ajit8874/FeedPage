import React from "react";
import "./Card.css";

export default function Card(props) {
  return (
    <div className="card-body">
      <div className="profileInfo">
        <span>{props.post.event_name}</span>
        <span>{convertDate(props.post.event_date)}</span>
      </div>
      <img src={props.post.thumbnail_image} alt={props.post.event_name} />
      <div className="info">
        <span>Views: {props.post.views}</span>
        <span>likes: {props.post.likes}</span>
        <span>shares: {props.post.shares}</span>
      </div>
    </div>
  );
}

function convertDate(date) {
  let cur = new Date(date);
  return cur.toLocaleDateString();
}
