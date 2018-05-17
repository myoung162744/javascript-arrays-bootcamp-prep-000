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
  var array1 = [string, ...array]
}

function destructivelyAddElementToBeginningOfArray(array, string) {
  var array.unshift(string)
}

function addElementToEndOfArray(array, string) {
  var array1 = [...array, string]
}

function destructivelyAddElementToEndOfArray(array, string) {
  array.push(string)
}

function accessElementInArray(array, index) {
  var array1 = array[index]
}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift()
}
