const drinks = [
  {
    name: 'Cola (1,60€)',
    price: 1.6
  },
  {
    name: 'Beer (2,00€)',
    price: 2
  },
  {
    name: 'Getränk (1,40€)',
    price: 1.4
  },
  {
    name: 'Getränk (1,50€)',
    price: 1.5
  }

]



// Prices of the proven compounds (bewaehrte Verbindung)
const pricesCompounds = {
  0: 0,
  1: 1.7,
  2: 2.4,
  3: 2.5,
  4: 2.1,
  5: 2.9,
  6: 3.6,
  7: 1.6,
  8: 0.6 
};

interface NamesTypes {
  [k: number]: string
}
const typeNames:NamesTypes = {
  0: 'Base',
  1: '1',
  2: '2',
  3: '3',
  4: '4',
  5: '5',
  6: '6',
  7: 'Super Surprise',
  8: 'Schokopizza',
}
interface PricesTypes {
  [k: number]: number
}
const typePrices:PricesTypes = {
  0: 0,
  1: 1.7,
  2: 2.4,
  3: 2.5,
  4: 2.1,
  5: 2.9,
  6: 3.6,
  7: 1.6,
  8: 0.6 
}

// Ingrediends of proven compounds to check for missing ones
const ingredientsCompounds = {
  1: [1, 12, 8, 20],
  2: [16, 18, 23, 20],
  3: [25, 9, 4, 13, 14],
  4: [22, 15, 12, 7],
  5: [26, 5, 3, 28, 22],
  6: [32, 2, 14, 24]
};
// Prices for pizza variations
interface SizeNames {
  [k: string]: string
}
const sizeNames:SizeNames = {
  1: 'small',
  2: 'medium',
  3: 'large'
}
interface SizePrizes {
  [k: string]: number
}
const sizePrizes:SizePrizes = {
  1: 2.9,
  2: 4.9,
  3: 6.9
}

interface NamesDough {
  [k: string]: string
}
const doughNames:NamesDough = {
  1: 'wheat',
  2: 'glutenfree',
  3: 'spelt'
}
interface PricesDough {
  [k: string]: number
}
const doughPrices:PricesDough = {
  1: 0,
  2: 3,
  3: 0.5
}
const prices = {
  // base prices
  size_normal: 4.9,
  size_smaller: 2.9,
  size_larger: 6.9,
  // prices added to base
  dough_dinkel: 0.5,
  dough_glutenfree: 3.0,
  type_chocolate: 0.6,
  type_surprise: 1.6
};
interface NamesIngredients {
  [k: string]: string
}
const namesIngredients:NamesIngredients = {
  1: 'Garlic',
  2: 'Zucchini',
  3: 'Onion',
  4: 'Chickpeas',
  5: 'Sunflower Seeds',
  6: 'Mushroom',
  7: 'Bell Pepper',
  8: 'Spinach',
  9: 'Sesame Seeds',

  10: 'Pineapple',
  11: 'Broccoli',
  12: 'Cherry Tomatoes',
  13: 'Pumpkin Seeds',
  14: 'Caramelized Onions',
  15: 'Eggplant',
  16: 'Banana',
  17: 'Sweet Potato',
  
  18: 'Fresh Basil',
  19: 'Caper',
  20: 'Pepperoni',
  21: 'Tahini',
  
  22: 'Ruccola',
  23: 'Peanut Butter',
  24: 'Cashew',
  25: 'Avocado',
  26: 'Smoked Tofu',
  27: 'Chia Seeds',
  28: 'Dried Figs',
  29: 'Walnuts',

  30: 'Black Olives',
  31: 'Hemp Seeds',
  32: 'Green Olives',
  33: 'Vegan Salami',
  34: 'Artichoke',
  35: 'Dried Tomatoes',
  36: 'Tempeh',
  37: 'Pesto',
  38: 'Seitan Gyros',
};

interface Incredience {
  [k: string]: number
}
const pricesIngredients:Incredience = {
  1: 0.4,
  2: 0.4,
  3: 0.4,
  4: 0.4,
  5: 0.4,
  6: 0.4,
  7: 0.4,
  8: 0.4,
  9: 0.4,

  10: 0.5,
  11: 0.5,
  12: 0.5,
  13: 0.5,
  14: 0.5,
  15: 0.5,
  16: 0.5,
  17: 0.5,

  18: 0.6,
  19: 0.6,
  20: 0.6,
  21: 0.6,

  22: 0.7,
  23: 0.7,
  24: 0.7,
  25: 0.7,
  26: 0.7,
  27: 0.7,
  28: 0.7,
  29: 0.7,

  30: 1.0,
  31: 1.0,
  32: 1.0,
  33: 1.0,
  34: 1.5,
  35: 1.5,
  36: 1.5,
  37: 1.5,
  38: 1.5,
};
export {pricesIngredients,namesIngredients, doughPrices, doughNames, sizeNames,sizePrizes,typeNames,typePrices, drinks};