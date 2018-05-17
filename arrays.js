var grilledCheeseIngredients = [
  'bread',
  'mild cheese',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
]

var tomatoSauceIngredients = [
  'tomato',
  'garlic',
  'olive oil',
  'basil',
  'oregano'
]

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
]

function addElementToBeginningOfArray(array, element) {
  array = [element, ...array]
  return array
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  return array.unshift(element)
}

function addElementToEndOfArray(array, element) {
  array = [...array, element]
  return array
}

function destructivelyAddElementToEndOfArray(array, element) {
  return array.push(element)
}

function accessElementInArray(array, index) {
  array = array[index]
  return array
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  return array.shift()
}

function removeElementFromBeginningOfArray(array) {
  array = array.slice(1)
  return array
}

function destructivelyRemoveElementFromEndOfArray(array) {
  return array.pop()
}

function removeElementFromEndOfArray(array) {
  array = array.slice(0, array.length - 1)
  return array
}
