# cookingStatus

## Input:

```javascript
console.log(cookingStatus(0));
console.log(cookingStatus(1));
console.log(cookingStatus());
```

## Output:

```shell
Lasagna is done.
Not done, please wait.
You forgot to set the timer.
```

# preparationTime

## Input:

```javascript
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

console.log(preparationTime(layers));
console.log(preparationTime(layers, 3));
```

## Output:

```shell
12
18
```

# quantities

```javascript
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

console.log(quantities(layers));
```

## Output:

```shell
{ sauce: 2, noodles: 2 }
```

# addSecretIngredient

```javascript
const friendsList = ["noodles", "sauce", "mozzarella", "kampot pepper"];
const myList = ["noodles", "meat", "sauce", "mozzarella"];

addSecretIngredient(friendsList, myList);
console.log(myList);
```

## Output:

```shell
[ 'noodles', 'meat', 'sauce', 'mozzarella', 'kampot pepper' ]
```

# scaleRecipe

```javascript
const recipe = {
  noodles: 200,
  sauce: 0.5,
  mozzarella: 1,
  meat: 100,
};

console.log(scaleRecipe(recipe, 4));
console.log(recipe);
```

## Output:

```shell
{ noodles: 400, sauce: 1, mozzarella: 2, meat: 200 }
{ noodles: 200, sauce: 0.5, mozzarella: 1, meat: 100 }
```
