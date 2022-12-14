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

Esta función debe estimar el tiempo de preparación de una lasaña dependiendo de la cantidad de ingredientes que se le pasen. Puede recibir como parámetros un _array_ con los ingredientes que se necesitan para la lasaña y el tiempo en promedio que se demora por ingrediente, en caso en que no se envíe el tiempo promedio este será de 2 minutos.

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

Esta función debe determinar cuánta salsa y fideos se deben utilizar dependiendo de la cantidad de veces que se nombran estos ingredientes en el _array_. Por cada ingrediente _noodles_ se deben utilizar 50 gramos de fideos y por cada ingrediente _sauce_ se deben utilizar 0.2 litros de salsa.

```javascript
const layers = ["sauce", "noodles", "sauce", "meat", "mozzarella", "noodles"];

console.log(quantities(layers));
```

## Output:

```shell
{ sauce: 0.4, noodles: 100 }
```

# addSecretIngredient

Tu amigo tiene su propia lista de ingredientes para preparar lasaña, pero tiene un ingrediente secreto. Ese ingrediente siempre estará al final de su _array_ y como el buen amigo que es quiere confiarte su secreto. Con la función `addSecretIngredient()`, se agrega el ingrediente secreto a tu propia lista.

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

Esta función debe ser capaz de poder escalar la receta para preparar dos lasañas a la cantidad que se pida en el parámetro. El primer parámetro de la función es el objeto recipiente que tienes las cantidades para realizar dos lasañas y el segundo parámetro es la cantidad de lasañas que se desean preparar. Esta función debe ser capaz de retornar un objeto con las cantidades de ingredientes para preparar la cantidad de lasañas que se pide.

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
