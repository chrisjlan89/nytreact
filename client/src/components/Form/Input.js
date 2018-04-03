import React from "react";

export const Input = props =>
  <div className="form-group">
    <input onChange={props.onStateChange} className="form-control pull-right" {...props} />
  </div>;
