
export function savePracticeScore(
 lessonId:number,
 score:number
){

const scores = JSON.parse(
 localStorage.getItem("practiceScores") || "{}"
)

scores[lessonId] = score

localStorage.setItem(
 "practiceScores",
 JSON.stringify(scores)
)

}
