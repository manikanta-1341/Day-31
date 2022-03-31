import { useState } from "react";

export default function Register(props) {
  const [state, setState] = useState({
    id: "",
    name: "",
    class: "",
    subject: "",
  });
  function Submit(e) {
    e.preventDefault();
    let new_state = state;
    setState({ ...state, id: "", name: "", class: "", subject: "" });
    props.func(new_state);
  }
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="registration">
        <h2>Teacher Registration</h2>
        <form onSubmit={(e) => Submit(e)}>
          <label>FullName:</label>&nbsp;
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={state.name}
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />
          <label>Class:</label>&nbsp;
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={state.class}
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />
          <label>Subject::</label>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={state.subject}
            onChange={(e) => handleChange(e)}
            required
          />
          <br />
          <br />
          <input type="submit" name="submit" />
        </form>
      </div>
    </>
  );
}
