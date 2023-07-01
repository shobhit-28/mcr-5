const existingData = [
    {
      id: '44af6af0-ce6c-414c-8f85-b5e9d9bdcc9c',
      recipeName: "Spaghetti Bolognese",
      image: "https://thecleaneatingcouple.com/wp-content/uploads/2022/05/turkey-bolognese-1-scaled.jpg",
      country: "Italy",
      ingredients: [
        "400g spaghetti",
        "400g ground mutton",
        "1 onion, chopped",
        "2 cloves garlic, minced",
        "400g canned tomatoes",
        "2 tablespoons tomato paste",
        "1 teaspoon dried oregano",
        "1 teaspoon dried basil",
        "Salt and pepper to taste",
        "Grated Parmesan cheese for garnish"
      ],
      instructions: [
        "In a large pot of boiling salted water, cook the spaghetti until al dente. Drain and set aside.",
        "In a separate pan, brown the ground mutton over medium heat. Add the chopped onion and minced garlic, and cook until the onion is translucent.",
        "Add the canned tomatoes, tomato paste, dried oregano, dried basil, salt, and pepper. Simmer for 20 minutes.",
        "Serve the spaghetti topped with the meat sauce and garnish with grated Parmesan cheese."
      ]
    },
    {
      id: '1c14a8df-bc82-4d54-bbde-3ae98dc8167d',
      recipeName: "Chicken Tikka Masala",
      image: "https://bellyfull.net/wp-content/uploads/2021/05/Chicken-Tikka-Masala-blog.jpg",
      country: "India",
      ingredients: [
        "500g boneless chicken, cut into pieces",
        "1 cup plain yogurt",
        "2 tablespoons lemon juice",
        "2 tablespoons garam masala",
        "1 tablespoon ground cumin",
        "1 tablespoon ground coriander",
        "1 teaspoon turmeric",
        "1 teaspoon chili powder",
        "2 cloves garlic, minced",
        "1-inch piece of ginger, grated",
        "1 cup tomato puree",
        "1 cup heavy cream",
        "Fresh cilantro for garnish",
        "Cooked basmati rice for serving"
      ],
      instructions: [
        "In a bowl, combine the yogurt, lemon juice, garam masala, cumin, coriander, turmeric, chili powder, minced garlic, and grated ginger. Add the chicken pieces and marinate for at least 1 hour.",
        "Heat a grill or grill pan over medium-high heat. Cook the marinated chicken pieces until browned and cooked through, about 5 minutes per side. Set aside.",
        "In a separate pan, heat some oil and sauté the minced garlic for a minute. Add the tomato puree and simmer for 5 minutes.",
        "Add the grilled chicken pieces to the tomato sauce and simmer for another 10 minutes. Stir in the heavy cream and cook for an additional 2 minutes.",
        "Garnish with fresh cilantro and serve with cooked basmati rice."
      ]
    },
  ];


export const recipes = localStorage.getItem('recipes') ? JSON.parse(localStorage.getItem('recipes')) : existingData
  