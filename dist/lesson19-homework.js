"use strict";
class Pizza {
    getIngredients() {
        return "Dough, cheese, tomato sauce, toppings";
    }
}
class Salad {
    getIngredients() {
        return "Lettuce, tomatoes, cucumbers, dressing";
    }
}
class PizzaRecipe {
    prepare() {
        return "Prepare pizza dough, add sauce, cheese, and toppings, bake in the oven.";
    }
}
class SaladRecipe {
    prepare() {
        return "Chop lettuce, slice tomatoes and cucumbers, drizzle with dressing.";
    }
}
class ItalianRestaurantFactory {
    createFoodProduct() {
        return new Pizza();
    }
    createRecipe() {
        return new PizzaRecipe();
    }
}
class HealthyRestaurantFactory {
    createFoodProduct() {
        return new Salad();
    }
    createRecipe() {
        return new SaladRecipe();
    }
}
function serveMeal(factory) {
    const food = factory.createFoodProduct();
    const recipe = factory.createRecipe();
    console.log("Food Ingredients: " + food.getIngredients());
    console.log("Recipe: " + recipe.prepare());
}
const italianRestaurant = new ItalianRestaurantFactory();
serveMeal(italianRestaurant);
const healthyRestaurant = new HealthyRestaurantFactory();
serveMeal(healthyRestaurant);
