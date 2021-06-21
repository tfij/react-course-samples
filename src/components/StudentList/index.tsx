import React from "react";
import {StudentListProps, StudentListState} from "./interface";

export class StudentList extends React.Component<StudentListProps, StudentListState> {
    render() {
        const { title, students } = this.props
        return (
            <>
                <h2>{title}</h2>
                {students.map(student => <div key={student.name}>{student.name} {student.grade}</div>)}
            </>
        )
    }
}