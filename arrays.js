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

function addElementToBeginningOfArray(array, string) {
  [string, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, string) {
  array.unshift(string)
}

function addElementToEndOfArray(array, string) {
  [...array, string]
}

function destructivelyAddElementToEndOfArray(array, string) {
  array.push(string)
}

function accessElementInArray(array, index) {
  array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}
