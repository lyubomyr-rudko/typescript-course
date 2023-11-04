interface FoodProduct {
  getIngredients(): string;
}

interface Recipe {
  prepare(): string;
}

class Pizza implements FoodProduct {
  getIngredients(): string {
    return "Dough, cheese, tomato sauce, toppings";
  }
}

class Salad implements FoodProduct {
  getIngredients(): string {
    return "Lettuce, tomatoes, cucumbers, dressing";
  }
}

class PizzaRecipe implements Recipe {
  prepare(): string {
    return "Prepare pizza dough, add sauce, cheese, and toppings, bake in the oven.";
  }
}

class SaladRecipe implements Recipe {
  prepare(): string {
    return "Chop lettuce, slice tomatoes and cucumbers, drizzle with dressing.";
  }
}

interface RestaurantFactory {
  createFoodProduct(): FoodProduct;
  createRecipe(): Recipe;
}

class ItalianRestaurantFactory implements RestaurantFactory {
  createFoodProduct(): FoodProduct {
    return new Pizza();
  }

  createRecipe(): Recipe {
    return new PizzaRecipe();
  }
}

class HealthyRestaurantFactory implements RestaurantFactory {
  createFoodProduct(): FoodProduct {
    return new Salad();
  }

  createRecipe(): Recipe {
    return new SaladRecipe();
  }
}

function serveMeal(factory: RestaurantFactory) {
  const food = factory.createFoodProduct();
  const recipe = factory.createRecipe();

  console.log("Food Ingredients: " + food.getIngredients());
  console.log("Recipe: " + recipe.prepare());
}

const italianRestaurant = new ItalianRestaurantFactory();
serveMeal(italianRestaurant);

const healthyRestaurant = new HealthyRestaurantFactory();
serveMeal(healthyRestaurant);