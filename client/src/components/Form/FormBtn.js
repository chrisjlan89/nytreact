import React from "react";

export const FormBtn = props =>
<button {...props} className="btn btn-outline-success my-2 my-sm-0" type="submit">
   Search {props.children}
</button>;



