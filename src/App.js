import { useState, useEffect } from "react";
import Student from "./student";
import Teacher from "./teacher";
import "./App.css";
import { useNavigate } from "react-router-dom";
export default function App() {
  let nav = useNavigate();
  let [student_component, setStudent_component] = useState(false);
  let [teacher_component, setTeacher_component] = useState(false);
  return (
    <>
      <div className="main_container">
        <div className="header">
          <h1>Admin Page</h1>
        </div>
        <div className="body">
          {student_component ? (
            <>
              <Student />
            </>
          ) : student_component === false && teacher_component === false ? (
            <div className="container_btns">
              <button
                className="student_dt_btn"
                onClick={() => nav("/student")}
              >
                Student Details
              </button>
              <button
                className="teacher_dt_btn"
                onClick={() => nav("/teacher")}
              >
                Teacher Details
              </button>
            </div>
          ) : (
            <></>
          )}
          {teacher_component ? <Teacher /> : <></>}
        </div>
      </div>
    </>
  );
}
