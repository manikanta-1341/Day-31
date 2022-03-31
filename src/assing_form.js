import React, { useState } from "react";

export default function Assign(props) {
  const [state, setState] = useState(props.data);
  const Submit = (e) => {
    e.preventDefault();
    props.func(state);
    setState("");
  };
  const handleChange = (e) =>{
    setState({...state,[e.target.name]:e.target.value})
  }
  return (
    <>
      <div className="assign_container">
        <div className="header">
          <h2>Teacher Assignment</h2>
        </div>
        <div className="body_area">
          <form onSubmit={(e) => Submit(e)}>
            <label>Name::</label>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={state.name}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label>Class::</label>
            <input
              type="text"
              name="class"
              placeholder="Class"
              value={state.class}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <label>Teacher Name::</label>
            <input
              type="text"
              name="teacher"
              placeholder=" Teacher Name"
              value={state.teacher}
              onChange={(e) => handleChange(e)}
            />
            <br />
            <br />
            <input type="submit" value="Update" />
          </form>
        </div>
      </div>
    </>
  );
}
