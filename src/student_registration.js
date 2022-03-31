import React, {useState} from "react";
import "./App.css";
import Student from './student'
export default function Student_Register(props) {
    const [state,setState] = useState(
        {
            id:"",
            name:"",
            class:""
        }
    )
    function Submit(e){
        e.preventDefault()
        let new_state=state
        setState({...state,
            id:"",
            name:"",
            class:""
        })
        props.func(new_state)
    }
    const handleChange = (e)=> {
        setState({...state,[e.target.name] : e.target.value})
    }
  return (
    <>
      <div className="registration">
        <h2>Student Registration Form</h2>
        <form onSubmit={(e) => Submit(e)}>
          <label>FullName:</label>&nbsp;
          <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e)=>handleChange(e)} required/>
          <br />
          <br />
          <label>Class:</label>&nbsp;
          <input
            type="text"
            name="class"
            placeholder="Class"
            value={state.class}
            onChange={(e)=>handleChange(e)}
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
