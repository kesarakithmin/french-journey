export function normalizeAnswer(value: string) {
  return value
    .toLowerCase()
    .trim()
    .normalize("NFD")
    .replace(/[\\u0300-\\u036f]/g, "")
}


export function checkAnswer(
  user: string,
  accepted: string[],
  type?: "exact" | "personal" | "translation"
) {

  const cleanUser = normalizeAnswer(user)

  // Personal answers:
  // Example: My name, city, country
  if (type === "personal") {
    return cleanUser.length > 1
  }


  return accepted.some(
    (answer) =>
      normalizeAnswer(answer) === cleanUser
  )
}
