import React from "react";
import {AddStudentProps, AddStudentState} from "./interface";
import {Input} from "../Input";

export class AddStudent extends React.Component<AddStudentProps, AddStudentState> {
    constructor(props: AddStudentProps) {
        super(props);
        this.state = {
            studentName: "",
            grade: null,
            studentNameError: null,
            gradeError: null,
        }
    }

    handleStudentNameChanged = (newValue: string) => {
        this.setState({
            studentName: newValue,
            studentNameError: null
        })
    }

    handleGradeChanged = (newValue: string) => {
        this.setState({
            grade: parseInt(newValue),
            gradeError: null,
        })
    }

    handleAddStudent = () => {
        const { studentName, grade } = this.state
        const studentAdded = this.validateInput() && this.props.onAddStudent({
            name: studentName,
            grade: grade || NaN,
        })
        if (studentAdded) {
            this.setState({
                studentName: "",
                grade: null,
            })
        }
    }

    validateInput = (): boolean => {
        const { studentName, grade } = this.state
        if (studentName.length === 0) {
            this.setState({
                studentNameError: 'Student name can\'t be empty'
            })
            return false;
        } else {
            this.setState({
                studentNameError: null
            })
        }
        if (grade === null ) {
            this.setState({
                gradeError: 'Grade can\'t be empty'
            })
            return false;
        } else if (isNaN(grade) ) {
            this.setState({
                gradeError: 'Grade has to be number'
            })
            return false;
        } else {
            this.setState({
                gradeError: null
            })
        }
        return true;
    }

    render() {
        const { studentName, grade, studentNameError, gradeError } = this.state
        return (
            <>
                <Input label={'Student name'} value={studentName} error={studentNameError} onValueChange={this.handleStudentNameChanged}/>
                <Input label={'Grade'} value={grade?.toString() || ""} error={gradeError} onValueChange={this.handleGradeChanged}/>
                <button onClick={this.handleAddStudent}>Add</button>
            </>
        )
    }
}