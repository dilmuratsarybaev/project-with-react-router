import React from "react";
import { StudentItem } from "./StudentItem";
const students = [
  {
    title: "Student Name 1",
    id: 1,
  },
  {
    title: "Student Name 2",
    id: 2,
  },
];
export const Student = () => {
  return (
    <div>
      {students.map((student) => (
        <StudentItem student={student} />
      ))}
    </div>
  );
};
