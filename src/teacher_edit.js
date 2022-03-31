import { useState } from "react";
export default function Editing_form(props) {
    let [state, setState] = useState(props.data);
    const handleChange = (e)=> {
    setState({...state,[e.target.name] : e.target.value})
    }
    const Submit = (e)=>{
        e.preventDefault()
        props.func(state)
        setState({...state,
            id:"",
            name:"",
            class:"",
            subject:""
        })
    }
  return (
    <>
      <div>
        <h2>Teacher Details</h2>
        <form onSubmit={(e)=>Submit(e)}>
        <label>Name::</label>
        <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) =>handleChange(e)} />
        <br />
        <br />
        <label>Class::</label>
        <input type="text" name="class" placeholder="Class" value={state.class} onChange={(e) =>handleChange(e)} />
        <br />
        <br />
        <label>Subject::</label>
        <input type="text" name="subject" placeholder="subject" value={state.subject} onChange={(e) =>handleChange(e)} />
        <br />
        <br />
        <input type="submit" name="update" value="Update" />
        </form>
      </div>
    </>
  );
}
