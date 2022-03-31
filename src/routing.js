import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Student from './student'
import Teacher from './teacher'
import App from './App.js'
export default function Routing(){
  
 return(<>
 <BrowserRouter>
 <Routes>
     <Route path="/" element={<App/>}></Route>
     <Route path="/student" element={<Student/>}>
     </Route>
     <Route path="/teacher" element={<Teacher/>}></Route>
 </Routes>
 </BrowserRouter>  
 </>);
}