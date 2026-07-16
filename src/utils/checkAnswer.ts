
export function normalizeAnswer(value:string){

return value
.toLowerCase()
.trim()
.normalize("NFD")
.replace(/[\\u0300-\\u036f]/g,"")

}


export function checkAnswer(
user:string,
accepted:string[]
){

const cleanUser = normalizeAnswer(user)

return accepted.some(
(answer)=>
normalizeAnswer(answer) === cleanUser
)

}

