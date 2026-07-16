
export function useXP(){

const getXP = () => {
 return Number(localStorage.getItem("frenchXP") || 0)
}

const addXP = (amount:number)=>{
 const current = getXP()

 localStorage.setItem(
  "frenchXP",
  String(current + amount)
 )
}

return {
 getXP,
 addXP
}

}
