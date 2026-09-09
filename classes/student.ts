class Student
{
    name: string;
    grade: number;
    gpa: number;
/**
 * basic constructor all class var
 */
    constructor( name: string, grade: number, gpa: number ) {
        this.name = name;
        this.grade = grade;
        this.gpa = gpa;
    }
        student_info_internal(): void {
            console.log(this.name+ " is student of grade" +this.grade+" and has a gpa of " +this.gpa+".")
        }
   get_gpa(): number {
    return this.gpa;
   }
   set_gpa(newGpa: number): void {
    this.gpa = newGpa
   }
}
function student_info(thisStudent: Student): void {
        console.log(thisStudent.name+ " is student of grade" +thisStudent.grade+" and has a gpa of " +thisStudent.gpa+".")
    }
let person1 = new Student("Madis", 12, 3.5)
let person2 = new Student("Marko", 4, 1.2)
let person3 = new Student("DeMarcus LaShawn Donda", 6, 3.2)

person1.student_info_internal();
student_info(person2)
console.log(person3)

console.log(person2.get_gpa());
person2.set_gpa(3.1);
person2.student_info_internal();