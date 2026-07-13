import React from 'react'

function StudentCard(std) {
  return (
    <div style={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "30vh"
}}>
  <div style={{
    border: "1px solid black",
    borderRadius: "10px",
    padding: "15px",
    margin: "10px",
    width: "250px",
    backgroundColor: "#877878",
    color: "black"
  }}>
      <h2>{std.name}</h2>
      <p>Age: {std.age}</p>
      <p>Grade: {std.grade}</p>
      <p>Course: {std.course}</p>

  </div>
</div>

  );
}

export default StudentCard;















