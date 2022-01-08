# Focalworks-Assesment
Write a function to calculate a score for a candidate’s response for an essay type question based on how closely it matches the correct answer.
Assume that the function takes two string arguments:

Candidate’s response (Response)
Correct Answer (CorrectAnswer)
The function needs to identify each word in the Candidate’s response that matches with a word in the Correct Answer and assign points based on the following rule:

Numbers - 4 points
Words with more than 7 characters - 3 points
Words with less than 5 characters - 0 points
All other words - 1 point
Calculate “Maximum Possible Score” as Sum of points for each word in the Correct Response String
Calculate “Points Scored” as Sum of points for each word in the “Candidate Response” that has a match with a word in the Correct Answer string.
After calculating both “Maximum Possible Score” and “Points Scored”, the function should return the percentage ratio of the “Points Score” and the “Maximum Possible Score”
