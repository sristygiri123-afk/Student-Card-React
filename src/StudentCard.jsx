import React from 'react'

function StudentCard(std) {
  return (
    <div>
      <h2>{std.name}</h2>
      <p>Age: {std.age}</p>
      <p>Grade: {std.grade}</p>
      <p>Course: {std.course}</p>
    </div>
  );
}

export default StudentCard;
















