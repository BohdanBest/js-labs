function convertScoreToGrade(score) {
  if (score < 0 || score > 100) return "INVALID SCORE";
  if (score >= 90) return "A";
  if (score >= 82) return "B";
  if (score >= 74) return "C";
  if (score >= 65) return "D";
  if (score >= 60) return "E";
  return "F";
}

var output = convertScoreToGrade(91);
console.log(output);