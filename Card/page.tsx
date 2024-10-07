import React from "react";

interface props {
  name: string;
  rollNo: number;
  age: number;
  day: string;
  class: number;
}

export default function Card(props: props) {
  return (
    <div>
      <h2>
        <b>Student Id Card</b>
      </h2>
      <br />
      <h1>Name:{props.name}</h1>
      <h1>RollNo:{props.rollNo}</h1>
      <h1>Age: {props.age}</h1>
      <h1>Day:{props.day}</h1>
      <h1>Class:{props.class}</h1>
    </div>
  );
}

