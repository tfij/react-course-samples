import React from "react";
import {StudentList} from "../StudentList";
import {AddStudent} from "../AddStudent";
import {Student} from "../AddStudent/interface";
import {StudentPanelProps, StudentPanelState} from "./interface";

export class StudentsPanel extends React.Component<StudentPanelProps, StudentPanelState> {


    constructor(props: StudentPanelProps) {
        super(props);
        this.state = {
            students: []
        }
    }

    handleAddStudent = (student: Student): boolean => {
        this.setState({
            students: [...this.state.students, student]
        })
        return true;
    }

    render() {
        const { students } = this.state
        return (
            <>
                <StudentList title={'Students'} students={students}/>
                <AddStudent onAddStudent={this.handleAddStudent}/>
                <StudentList title={'Over 90'} students={students.filter(student => student.grade > 90)}/>
                <StudentList title={'Les then 75'} students={students.filter(student => student.grade < 75)}/>
            </>
        );
    }
}