 let grade = parseInt(prompt("Enter student marks (0 - 100):"));
const marks = (grade >= 0 && grade <= 100)
if (marks) {
    if (grade > 79) {
        alert("Your grade is A");
    } else if (grade >= 60) {
        alert("Your grade is B");
    } else if (grade >= 49) {
        alert("Your grade is C");
    } else if (grade >= 40) {
        alert("Your grade is D");
    } else {
        alert("Your grade is E");
    }
} else if (speed>=130 && speed <=135)
function checkSpeed(speed) {
    const speedLimit = 70;
    const demeritsPer5Kmh = 1;
  
    if (speed <= speedLimit) {
      console.log("OK");
    } else {
      const excessSpeed = speed - speedLimit;
      const demeritPoints = Math.floor(excessSpeed / 5) * demeritsPer5Kmh;
      console.log("Demerit points:", demeritPoints);
    }
  }
  
  const carSpeed = 80; 
  checkSpeed(carSpeed);