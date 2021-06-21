export interface AddStudentProps {
    onAddStudent: (student: Student) => boolean
}

export interface AddStudentState {
    studentName: string
    grade: number | null
    studentNameError: string | null
    gradeError: string | null
}

export interface Student {
    name: string
    grade: number
}