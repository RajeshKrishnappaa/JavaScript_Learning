/**
 * JavaScript Function Types & Examples
 * Demonstrates different function patterns in JavaScript
 */

// ===== TYPE 1: No Input, No Output =====
// Function that uses global variables and prints directly

const GLOBAL_A = 10;
const GLOBAL_B = 20;

function add() {
    const sum = GLOBAL_A + GLOBAL_B;
    console.log("Type 1 (No Input, No Output):", sum);
}
add();

// ===== TYPE 2: No Input, But Has Output =====
// Function that returns a value without parameters

function add1() {
    const x = 10;
    const y = 20;
    const sum = x + y;
    return sum;
}

const res = add1();
console.log("Type 2 (No Input, Has Output):", res);

// ===== TYPE 3: Has Input, No Output =====
// Function accepts parameters and prints directly

function add2(x, y) {
    const sum = x + y;
    console.log("Type 3 (Has Input, No Output):", sum);
}

const p = 10;
const q = 10;
add2(p, q);

// ===== TYPE 4: Has Input, Has Output =====
// Function accepts parameters and returns a value

function add3(x, y) {
    const sum = x + y;
    return sum;
}

const m = 10;
const n = 20;
const result = add3(m, n);
console.log("Type 4 (Has Input, Has Output):", result);

// ===== PRACTICAL EXAMPLE: Student Grading System =====
// Function with input validation and comprehensive grade logic

function grade(percentage) {
    // Input validation
    if (typeof percentage !== 'number' || percentage < 0 || percentage > 100) {
        return "Invalid percentage. Please enter a value between 0 and 100.";
    }

    // Grade assignment based on percentage
    if (percentage >= 90) {
        return "A+";
    } else if (percentage >= 80) {
        return "A";
    } else if (percentage >= 70) {
        return "B+";
    } else if (percentage >= 60) {
        return "B";
    } else if (percentage >= 50) {
        return "C";
    } else if (percentage >= 40) {
        return "D";
    } else {
        return "F";
    }
}

// Test the grade function with a sample percentage
const studentPercentage = 85;
const studentGrade = grade(studentPercentage);
console.log(`\nGrade Function Test: For ${studentPercentage}% score, Grade = ${studentGrade}`);

