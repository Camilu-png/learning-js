# cookingStatus

Esta función debe determinar si la lasaña ya está lista dependiendo del tiempo que falte. Es decir, si a la función le decimos que quedan 0 tiempo, entonces debe retornar `"Lasagna is done."`, si queda cualquier otro valor entonces debe retornar `"Not done, please wait."` y en el caso en que no se envíe ningún parámetro debe retornar `"You forgot to set the timer."`.

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

Esta función debe estimar el tiempo de preparación de una lasaña dependiendo de la cantidad de ingredientes que se le pasen. Puede recibir como parámetros un array con los ingredientes que se necesitan para la lasaña y el tiempo en promedio que se demora por ingrediente, en caso en que no se envíe el tiempo promedio este será de 2 minutos.

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
