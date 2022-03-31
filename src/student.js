import React, { useState } from "react";
import Student_Register from "./student_registration";
import "./App.css";
import { useNavigate } from "react-router-dom";
import Assign from "./assing_form";
import Student_Edit from "./student_edit_form";
export default function Student() {
  let nav = useNavigate();
  let [state, setState] = useState([
    {
      name: "Seth Roob",
      class: "class 1",
      teacher: "",
      id: "1",
    },
    {
      name: "Ethel Wunsch",
      class: "class 2",
      teacher: "",
      id: "2",
    },
    {
      name: "Kyle Hilpert",
      class: "class 3",
      teacher: "",
      id: "3",
    },
    {
      name: "Dan Wehner",
      class: "class 4",
      teacher: "",
      id: "4",
    },
    {
      name: "Kendra Cremin",
      class: "class 5",
      teacher: "",
      id: "5",
    },
    {
      name: "Ada Dickens",
      class: "class 6",
      teacher: "",
      id: "6",
    },
    {
      name: "Miss Erica Johnson",
      class: "class 7",
      teacher: "",
      id: "7",
    },
    {
      name: "Kayla Parisian",
      class: "class 8",
      teacher: "",
      id: "8",
    },
    {
      name: "Corey O'Reilly Jr.",
      class: "class 9",
      teacher: "",
      id: "9",
    },
    {
      name: "Danielle Powlowski",
      class: "class 10",
      teacher: "",
      id: "10",
    },
  ]);
  let [form_display, setForm_display] = useState(false);
  let [data_update, setData_update] = useState({});
  let [edit_form_display, setEdit_form_display] = useState(false);
  let [assign_form, setAssign_form] = useState(false);
  let [assign_data, setAssign_data] = useState("");
  function Delete(e) {
    let index = state.findIndex((data) => data.id == e.id);
    let new_state = { ...state };
    delete new_state[index];
    let new_arr = Object.values(new_state);
    setState(new_arr);
    alert("Deleted Successfully!");
  }
  function Edit(e) {
    setEdit_form_display(!edit_form_display);
    setData_update(e);
  }
  function Update(data) {
    setEdit_form_display(!edit_form_display);
    let index = state.findIndex((e) => e.id == data.id);
    let new_state = { ...state };
    new_state[index].name = data.name;
    new_state[index].class = data.class;
    alert("Updated Successfully ✔ ");
  }
  function Data_fromchild(data) {
    let new_data = { ...state };
    let new_id = parseInt(state[state.length - 1].id) + 1;
    data.id = String(new_id);
    new_data[parseInt(state.length)] = data;
    let new_arr = Object.values(new_data);
    setState(new_arr);
    Registration();
  }
  function Registration() {
    setForm_display(!form_display);
  }
  function Assignment(e) {
    setAssign_data(e);
    setAssign_form(!assign_form);
  }
  function Assignment_data(data) {
    let new_state = { ...state };
    let index = state.findIndex((e) => e.id == data.id);
    new_state[index]= data;
    let new_arr = Object.values(new_state);
    setState(new_arr);
    setAssign_form(!assign_form);
  }
  return (
    <>
      <div className="student_container">
        <div className="header">
          <button className="back_btn" onClick={() => nav(-1)}>
            Go Back
          </button>
          <h2> Student Details</h2>
        </div>
        <div className="body_area">
          <div className="data_area">
            <table border={2} cellPadding={4} cellSpacing={4}>
              <thead>
                <tr>
                  <th>Id</th>
                  <th>Name</th>
                  <th>Class</th>
                  <th>Teacher</th>
                  <th>Actions</th>
                </tr>
              </thead>
              {state.map((e) => (
                <tbody key={e.id}>
                  <tr>
                    <td>{e.id}</td>
                    <td>{e.name}</td>
                    <td>{e.class}</td>
                    <td>{e.teacher}</td>
                    <td>
                      <button onClick={() => Edit(e)}>Edit</button>&nbsp;&nbsp;
                      <button onClick={() => Delete(e)}>Delete</button>
                      &nbsp;&nbsp;
                      <button onClick={() => Assignment(e)}>Assign</button>
                    </td>
                  </tr>
                </tbody>
              ))}
            </table>
          </div>
          <div className="editing_area">
            <button className="register_btn" onClick={() => Registration()}>
              Register Student
            </button>
            
            {form_display ? (
              <Student_Register func={(data) => Data_fromchild(data)} />
            ) : (
                <></>
            )}
            {edit_form_display ? (
              <Student_Edit data={data_update} func={(data) => Update(data)} />
            ) : (
              <></>
            )}
            {assign_form ? (
              <Assign
                data={assign_data}
                func={(data) => Assignment_data(data)}
              />
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
