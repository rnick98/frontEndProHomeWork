const students = [
    {
        name: 'John Smith',
        marks: [10, 8, 6, 9, 8, 7]
    },
    {
        name: 'John Doe',
        marks: [9, 8, 7, 6, 7]
    },
    {
        name: 'Thomas Anderson',
        marks: [6, 7, 10, 8]
    },
    {
        name: 'Jean-Baptiste Emanuel Zorg',
        marks: [10, 9, 8, 9]
    }
]

console.log('=========== Task 1 ===========');

const totalMarks = [];

students.forEach((student) => {
    const marksLength = student.marks.length;
    const sum = student.marks.reduce((a, b) => a + b, 0);
    const avrMark = sum / marksLength;
    console.log('Name: ' + student.name + ' Average mark: ' + avrMark)
    totalMarks.push(avrMark)
});

console.log('=========== Task 2 ===========');

function arraySum(totalMarks) {
    let sum = 0;
    for (var i = 0; i < totalMarks.length; i++) {
        sum += totalMarks[i];
    }
    let a = sum / totalMarks.length;
    console.log(`Average mark of all students - ${a}`);
}
arraySum(totalMarks);