import { useState } from "react"
import { useNavigate } from "react-router-dom";
import Register from './teacher_registration';
import Editing_form from './teacher_edit'
export default function Teacher(){
    let nav = useNavigate();
    const [state, setState] = useState(
        [
            {
             "name": "Miss Simon Wuckert",
             "subject": "subject 1",
             "class": "class 1",
             "id": "1"
            },
            {
             "name": "Wesley Christiansen",
             "subject": "subject 2",
             "class": "class 2",
             "id": "2"
            },
            {
             "name": "Darlene McDermott",
             "subject": "subject 3",
             "class": "class 3",
             "id": "3"
            },
            {
             "name": "Alex Rath",
             "subject": "subject 4",
             "class": "class 4",
             "id": "4"
            },
            {
             "name": "Sylvester O'Reilly",
             "subject": "subject 5",
             "class": "class 5",
             "id": "5"
            },
            {
             "name": "Opal Waelchi",
             "subject": "subject 6",
             "class": "class 6",
             "id": "6"
            },
            {
             "name": "Wendell Leannon",
             "subject": "subject 7",
             "class": "class 7",
             "id": "7"
            },
            {
             "name": "Lawrence O'Hara",
             "subject": "subject 8",
             "class": "class 8",
             "id": "8"
            },
            {
             "name": "Dr. Matt Stiedemann",
             "subject": "subject 9",
             "class": "class 9",
             "id": "9"
            },
            {
             "name": "Cathy Hermann",
             "subject": "subject 10",
             "class": "class 10",
             "id": "10"
            }
           ]
    )
    let [form_display,setForm_display] = useState(false)
    let [data_from_child,setData_from_child] = useState({})
    let [data_update,setData_update] = useState({})
    let [edit_form_display,setEdit_form_display] = useState(false)
    function Delete(e){
        let index = state.findIndex((data) => data.id==e.id)
        let new_state={...state}
        delete new_state[index]
        let new_arr=Object.values(new_state)
        setState(new_arr)
        alert("Deleted Successfully!")

    }
    function Edit(e){
        setEdit_form_display(!edit_form_display)
        setData_update(e)        
    }
    function Update(data){
        setEdit_form_display(!edit_form_display)
        let index = state.findIndex((e)=> e.id==data.id)
        let new_state = {...state}
        new_state[index].name=data.name
        new_state[index].class=data.class
        alert("Updated Successfully ✔ ")

    }
    function Data_fromchild(data){
        let new_data={...state}
        let new_id=parseInt(state[state.length-1].id)+1
        data.id=String(new_id)
        new_data[parseInt(state.length)]=data
        let new_arr=Object.values(new_data)
        setState(new_arr)
        Registration()
    }
    function Registration (){
        setForm_display(!form_display)
    }
    return(
        <>
             <div className="teacher_container">
                <div className="header">
                <button className="back_btn" onClick={() => nav(-1)}>
                    Go Back
                </button>
                <h2> Teacher Details</h2>
                </div>
                <div className="body_area">
                    <div className="data_area">
                        <table border={2} cellPadding={4} cellSpacing={4}>
                    <thead>
                        <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Class</th>
                        <th>Subject</th>
                        <th>Actions</th>
                        </tr>
                    </thead>
                    {state.map((e)=>(
                        <tbody key={e.id}>
                            <tr>
                                <td>{e.id}</td>
                                <td>{e.name}</td>
                                <td>{e.class}</td>
                                <td>{e.subject}</td>
                                <td>
                                    <button onClick={() =>Edit(e)}>Edit</button>&nbsp;&nbsp;
                                    <button onClick={() => Delete(e)}>Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
                        </table>
                    </div>
                    <div className="editing_area">
                        <button  className="register_btn" onClick={() => Registration()}>Register Teacher</button>
                        {form_display?<Register func={(data) =>Data_fromchild(data)}/>:<></>}
                        {edit_form_display?<Editing_form data={data_update} func={(data)=>Update(data)} />:<></>}
                    </div>
                </div>
                
            </div>
        </>
    );
}