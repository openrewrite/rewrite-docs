# How to customize recipes to meet your needs

OpenRewrite recipes are **opinionated** – meaning that they encourage certain conventions, patterns, or practices. The idea behind this is to provide sensible defaults that work for _most_ people _most_ of the time without requiring any fiddling. 

However, what if you run into a situation where you would like recipes to behave differently? Your first instinct might be that you need to copy the existing recipe and modify it to meet your needs.

Fortunately, in many cases, recipes can be easily modified or combined without needing to write any code.

In this guide, we'll walk you through how to do this.

## Customizing a recipe

For the sake of this guide, let's assume that you took a look at the [Common static analysis issues recipe](../recipes/staticanalysis/commonstaticanalysis.md) and decided that you don't like the fact that it [disallows multiple variables from being declared on the same line](../recipes/staticanalysis/multiplevariabledeclarations.md). You want to remove that recipe from the list of recipes being executed – but you still want to run all of the other ones.

To edit this recipe, we'll take advantage of the [Moderne recipe builder](https://docs.moderne.io/user-documentation/moderne-platform/how-to-guides/new-recipe-builder/).

### Step 1: Navigate to the Moderne Recipe Builder

Open up the [Moderne Platform](https://app.moderne.io/marketplace), sign in, and navigate to the [Modere Recipe Builder](https://app.moderne.io/builder).

### Step 2: Create a new recipe

On the right side of the page, you should see a `Recipe` dropdown button. Click it and then select `New`:

<figure>
  ![](./assets/create-new-recipe.gif)
</figure>

A modal will pop up where you can enter a name, Id, and a description for the recipe. Name it something intuitive such as:

<figure>
  ![](./assets/recipe-options.png)
  <figcaption>_New recipe modal_</figcaption>
</figure>

Once you've filled out the modal, press `Save` in the bottom right corner.

### Step 3: Add the recipe to modify

So far, we've created a root node for the recipe. The next thing we want to do is add the recipe we want to modify to this node. To do so, mouse over the root node in the recipe list and press the `+` button to add a recipe:

<figure>
  ![](./assets/AddRecipe.gif)
  <figcaption>_Adding a new recipe_</figcaption>
</figure>

In the modal that pops up, search for `Common static` and add the `Common static analysis issues` recipe by selecting it and then pressing `Select recipe`:

<figure>
  ![](./assets/recipe-search-modal.png)
  <figcaption>_Recipe search modal_</figcaption>
</figure>

You should then see that all of the recipes that make up the common static analysis recipe are added to your recipe list:

<figure>
  ![](./assets/common-stat-recipes.png)
  <figcaption>_Common static analysis recipes_</figcaption>
</figure>

### Step 4: Modify the recipes to meet your needs

With all of those recipes in the builder, we can now go ahead and change it to match our needs. As we said earlier, let's pretend that we want to remove the recipe that doesn't allow us to define multiple variables on one line.

To do so, let's search for a recipe with that name and then press the trash can icon to remove it from the recipe list:

<figure>
  ![](./assets/RemoveRecipe.gif)
  <figcaption>_Removing a recipe_</figcaption>
</figure>

### Step 5: Download the modified recipe and run it

Once you have the recipe to where you want it, you can download it as a YAML file so that you can use OpenRewrite to run it. To do so, click on the `Download YAML` button in the Recipe drop-down menu:

<figure>
  ![](./assets/download-recipe.png)
  <figcaption>_Download recipe_</figcaption>
</figure>

You can then run it as you would any other OpenRewrite recipe.

:::tip
The recipe builder can also be useful if you want to combine multiple recipes together. For instance, let's say that you wanted to make your own best practices recipe. You could search for any add many recipes together and then save it as a new, larger recipe:

<figure>
  ![](./assets/combined-recipes.png)
  <figcaption>_Combining many recipes_</figcaption>
</figure>
:::