export const getYearsOld = () => {
  const birthDate = new Date(1997, 11, 2)
  const birthDay = birthDate.getDate()
  const birthMonth = birthDate.getMonth() + 1

  const currentDate = new Date()
  const currentDay = currentDate.getDate()
  const currentMonth = currentDate.getMonth() + 1

  let currentAge = currentDate.getFullYear() - birthDate.getFullYear()

  if (
    currentMonth < birthMonth ||
    (currentMonth === birthMonth && currentDay < birthDay)
  ) {
    currentAge--
  }

  return currentAge
}
