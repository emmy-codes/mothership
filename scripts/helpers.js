/*
This function returns today's date in 'YY-MM-DD' formatted as a string.
*/

function getToday(offset = 0) {
  const today = new Date()
  const day = new Date(today)
  day.setDate(today.getDate() + offset)
  return day.toISOString().slice(2, 10)
}

/*
This function takes 2 arguments, a date in the past (which must
  be formatted as 'YY-MM-DD', and today's date). It then returns
  the number of days that have passed since the first date,
  until today.
*/

function getDaysElapsedFromToday(date, today) {
  let counter = 0
  while (date !== today) {
    today = getToday(-counter - 1)
    counter++
  }
  return counter
}

/*
  This function takes an array as an argument and returns
  a random element from that array
*/

function getRandom(array) {
  return array[Math.floor(Math.random() * array.length)]
}