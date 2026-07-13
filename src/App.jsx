import StudentCard from "./StudentCard"
import Header from "./component/Header";
import Footer from "./component/Footer";
import {useState} from "react";

function App() {
     const[show, setShow]= useState(true);

  const studentdata = [{
    name: "Riya",
    age: 20,
    grade: "A",
    course: "Computer Science"
  }, {
    name: "Siya",
    age: 22,
    grade: "B",
    course: "Mathematics"

    }, {
    name: "Mani",
    age: 21,
    grade: "C",
    course: "Physics"
  }]
  return (
    <>
    <Header/>
    <button onClick= {() => setShow(!show)}>Show/Hide</button>
    
      {
        show &&(
          <div className= "container">
            {
        studentdata.map((student, index)=>(
          <StudentCard 
               key={index}
               name={student.name}
               age={student.age}
               grade={student.grade}
               course= {student.course}

            />
        ))}
   
     </div>
  )
}
</>
);
}
export default App
