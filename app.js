// ==========================================
// STUDENT RECORDS DATA PROCESSOR
// Pure JavaScript
// ==========================================

const students = [
    {
        id: 1,
        name: "Juan Dela Cruz",
        year: 1,
        course: "BSIT",
        grades: [85, 88, 90, 87],
        enrolled: true
    },
    {
        id: 2,
        name: "Maria Santos",
        year: 2,
        course: "BSCS",
        grades: [92, 95, 91, 94],
        enrolled: true
    },
    {
        id: 3,
        name: "Pedro Reyes",
        year: 3,
        course: "BSIT",
        grades: [78, 82, 80, 85],
        enrolled: true
    },
    {
        id: 4,
        name: "Ana Garcia",
        year: 4,
        course: "BSIS",
        grades: [90, 89, 93, 91],
        enrolled: true
    },
    {
        id: 5,
        name: "Carlos Mendoza",
        year: 1,
        course: "BSCS",
        grades: [75, 80, 78, 82],
        enrolled: false
    },
    {
        id: 6,
        name: "Sofia Lopez",
        year: 2,
        course: "BSIT",
        grades: [95, 94, 96, 93],
        enrolled: true
    },
    {
        id: 7,
        name: "Michael Tan",
        year: 3,
        course: "BSIS",
        grades: [88, 85, 87, 90],
        enrolled: true
    },
    {
        id: 8,
        name: "Angela Cruz",
        year: 4,
        course: "BSCS",
        grades: [91, 93, 90, 92],
        enrolled: true
    },
    {
        id: 9,
        name: "Daniel Flores",
        year: 1,
        course: "BSIT",
        grades: [83, 86, 84, 88],
        enrolled: false
    },
    {
        id: 10,
        name: "Jessica Ramos",
        year: 2,
        course: "BSIS",
        grades: [89, 91, 88, 90],
        enrolled: true
    },
    {
        id: 11,
        name: "Kevin Torres",
        year: 3,
        course: "BSCS",
        grades: [84, 87, 85, 89],
        enrolled: true
    },
    {
        id: 12,
        name: "Christine Aquino",
        year: 4,
        course: "BSIT",
        grades: [96, 95, 94, 97],
        enrolled: true
    },
    {
        id: 13,
        name: "Mark Villanueva",
        year: 1,
        course: "BSIS",
        grades: [80, 82, 79, 84],
        enrolled: true
    },
    {
        id: 14,
        name: "Patricia Lim",
        year: 2,
        course: "BSCS",
        grades: [93, 91, 95, 94],
        enrolled: false
    },
    {
        id: 15,
        name: "Joshua Navarro",
        year: 3,
        course: "BSIT",
        grades: [86, 88, 85, 87],
        enrolled: true
    },
    {
        id: 16,
        name: "Rachel Bautista",
        year: 4,
        course: "BSIS",
        grades: [94, 92, 93, 95],
        enrolled: true
    },
    {
        id: 17,
        name: "Stephen Garcia",
        year: 1,
        course: "BSCS",
        grades: [81, 83, 85, 82],
        enrolled: true
    },
    {
        id: 18,
        name: "Michelle Tan",
        year: 2,
        course: "BSIT",
        grades: [90, 92, 91, 89],
        enrolled: true
    },
    {
        id: 19,
        name: "Ryan Fernandez",
        year: 3,
        course: "BSIS",
        grades: [77, 81, 79, 83],
        enrolled: false
    },
    {
        id: 20,
        name: "Hannah Reyes",
        year: 4,
        course: "BSCS",
        grades: [95, 96, 94, 97],
        enrolled: true
    },
    {
        id: 21,
        name: "Gabriel Santos",
        year: 1,
        course: "BSIT",
        grades: [88, 86, 89, 87],
        enrolled: true
    },
    {
        id: 22,
        name: "Nicole Mendoza",
        year: 2,
        course: "BSIS",
        grades: [91, 90, 92, 89],
        enrolled: true
    },
    {
        id: 23,
        name: "Francis Dizon",
        year: 3,
        course: "BSCS",
        grades: [85, 84, 87, 86],
        enrolled: true
    },
    {
        
  id: 24,
  name: "Beatrice Flores",
  year: 4,
  course: "BSIT",
  grades: [92, 94, 93, 95],
  enrolled: false
},
{
  id: 25,
  name: "Anthony Ramos",
  year: 1,
  course: "BSIS",
  grades: [78, 80, 82, 79],
  enrolled: true
},
{
  id: 26,
  name: "Catherine Lopez",
  year: 2,
  course: "BSCS",
  grades: [89, 92, 90, 91],
  enrolled: true
    },
    {
        id: 27,
        name: "Benjamin Cruz",
        year: 3,
        course: "BSIT",
        grades: [87, 85, 88, 90],
        enrolled: true
    },
    {
        id: 28,
        name: "Isabella Garcia",
        year: 4,
        course: "BSIS",
        grades: [96, 94, 95, 97],
        enrolled: true
    },
    {
        id: 29,
        name: "Nathaniel Reyes",
        year: 1,
        course: "BSCS",
        grades: [82, 84, 81, 85],
        enrolled: false
    },
    {
        id: 30,
        name: "Grace Biaras",
        year: 3,
        course: "BSIT",
        grades: [95, 93, 96, 94],
        enrolled: true
    }
];


// ==========================================
// 1. GET AVERAGE GRADE
// ==========================================

function getAverageGrade(student) {

    if (!student || !Array.isArray(student.grades)) {
        return 0;
    }

    if (student.grades.length === 0) {
        return 0;
    }

    const total = student.grades.reduce(
        (sum, grade) => sum + grade,
        0
    );

    return total / student.grades.length;
}


// ==========================================
// 2. GET TOP STUDENTS
// ==========================================

function getTopStudents(students, n) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (n < 0) {
        throw new Error("Number of students cannot be negative.");
    }

    if (n === 0 || students.length === 0) {
        return [];
    }

    return students
        .map(student => ({
            ...student,
            average: getAverageGrade(student)
        }))
        .sort((a, b) => b.average - a.average)
        .slice(0, n);
}


// ==========================================
// 3. GROUP BY COURSE
// ==========================================

function groupByCourse(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students.reduce((groups, student) => {

        if (!groups[student.course]) {
            groups[student.course] = [];
        }

        groups[student.course].push(student);

        return groups;

    }, {});
}


// ==========================================
// 4. GET ENROLLED COUNT
// ==========================================

function getEnrolledCount(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const enrolled = students.filter(
        student => student.enrolled === true
    ).length;

    const notEnrolled = students.filter(
        student => student.enrolled === false
    ).length;

    return {
        enrolled: enrolled,
        notEnrolled: notEnrolled
    };
}


// ==========================================
// 5. FIND STUDENT
// ==========================================

function findStudent(students, name) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (typeof name !== "string") {
        return null;
    }

    const searchName = name.toLowerCase().trim();

    const student = students.find(
        student => student.name.toLowerCase() === searchName
    );

    return student || null;
}


// ==========================================
// 6. GET COURSE AVERAGES
// ==========================================

function getCourseAverages(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    const grouped = groupByCourse(students);

    return Object.keys(grouped)
        .map(course => {

            const courseStudents = grouped[course];

            const averages = courseStudents.map(
                student => getAverageGrade(student)
            );

            const total = averages.reduce(
                (sum, average) => sum + average,
                0
            );

            const average = averages.length > 0
                ? total / averages.length
                : 0;

            return {
                course: course,
                average: average
            };
        })
        .sort((a, b) => b.average - a.average);
}


// ==========================================
// 7. EXPORT SUMMARY
// ==========================================

function exportSummary(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    if (students.length === 0) {
        return {
            totalStudents: 0,
            overallAverage: 0,
            topPerformingStudent: null,
            breakdownByCourse: {}
        };
    }

    const averages = students.map(
        student => getAverageGrade(student)
    );

    const totalGrades = averages.reduce(
        (sum, average) => sum + average,
        0
    );

    const overallAverage =
        totalGrades / averages.length;

    const topStudent = getTopStudents(students, 1)[0];

    const courseAverages = getCourseAverages(students);

    return {
        totalStudents: students.length,
        overallAverage: overallAverage,
        topPerformingStudent: topStudent,
        breakdownByCourse: courseAverages
    };
}


// ==========================================
// OPTIONAL: FILTER BY YEAR
// ==========================================

function filterByYear(students, year) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return students.filter(
        student => student.year === year
    );
}


// ==========================================
// OPTIONAL: SORT BY NAME
// ==========================================

function sortByName(students) {

    if (!Array.isArray(students)) {
        throw new Error("Students must be an array.");
    }

    return [...students].sort(
        (a, b) => a.name.localeCompare(b.name)
    );
}


// ==========================================
// MAIN FUNCTION
// ==========================================

function main() {

    console.log("==========================================");
    console.log("       STUDENT RECORDS DATA REPORT");
    console.log("==========================================");


    // TOTAL STUDENTS

    console.log("\n--- TOTAL STUDENTS ---");

    console.log(
        "Total Number of Students:",
        students.length
    );


    // OVERALL AVERAGE

    console.log("\n--- OVERALL AVERAGE GRADE ---");

    const summary = exportSummary(students);

    console.log(
        "Overall Average:",
        summary.overallAverage.toFixed(2)
    );


    // ENROLLED COUNT

    console.log("\n--- ENROLLMENT STATUS ---");

    const enrollment = getEnrolledCount(students);

    console.log(
        "Enrolled:",
        enrollment.enrolled
    );

    console.log(
        "Not Enrolled:",
        enrollment.notEnrolled
    );


    // TOP STUDENTS

    console.log("\n--- TOP 5 STUDENTS ---");

    const topStudents = getTopStudents(students, 5);

    topStudents.forEach((student, index) => {

        console.log(
            `${index + 1}. ${student.name} - ${student.average.toFixed(2)}`
        );

    });


    // COURSE AVERAGES

    console.log("\n--- AVERAGE GRADE BY COURSE ---");

    const courseAverages = getCourseAverages(students);

    courseAverages.forEach(course => {

        console.log(
            `${course.course}: ${course.average.toFixed(2)}`
        );

    });


    // GROUP BY COURSE

    console.log("\n--- STUDENTS BY COURSE ---");

    const groups = groupByCourse(students);

    Object.keys(groups).forEach(course => {

        console.log(
            `${course}: ${groups[course].length} students`
        );

    });


    // FIND STUDENT

    console.log("\n--- FIND STUDENT ---");

    const searchResult = findStudent(
        students,
        "Grace Biaras"
    );

    if (searchResult) {

        console.log(
            "Student Found:",
            searchResult.name
        );

        console.log(
            "Course:",
            searchResult.course
        );

        console.log(
            "Average:",
            getAverageGrade(searchResult).toFixed(2)
        );

    } else {

        console.log("Student not found.");

    }


    // SEARCH FOR NON-EXISTING STUDENT

    console.log("\n--- SEARCH FOR UNKNOWN STUDENT ---");

    const unknownStudent = findStudent(
        students,
        "Unknown Student"
    );

    console.log(
        "Search Result:",
        unknownStudent
    );


    // FINAL SUMMARY

    console.log("\n--- SUMMARY OBJECT ---");

    console.log(summary);

    console.log("\n==========================================");
    console.log("              REPORT COMPLETE");
    console.log("==========================================");
}


// ==========================================
// RUN PROGRAM
// ==========================================

main();