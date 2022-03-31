import { useState } from "react";
export default function Student_Edit(props) {
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
            class:""
        })
    }
  return (
    <>
      <div>
        <h2>Student Details</h2>
        <form onSubmit={(e)=>Submit(e)}>
        <label>Name::</label>
        <input type="text" name="name" placeholder="Name" value={state.name} onChange={(e) =>handleChange(e)} />
        <br />
        <br />
        <label>Class::</label>
        <input type="text" name="class" placeholder="Class" value={state.class} onChange={(e) =>handleChange(e)} />
        <br />
        <br />
        <input type="submit" name="update" value="Update" />
        </form>
      </div>
    </>
  );
}
