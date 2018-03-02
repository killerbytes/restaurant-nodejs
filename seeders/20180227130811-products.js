'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('products', [{
      name: "Homemade Chicken Nuggets ",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/602473.jpg"
      },
      {
      name: "Chicken Fingers ",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/603792.jpg"
      },
      {
      name: "Roast Chicken ",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/632814.jpg"
      },
      {
      name: "Charcoal Grilled Chicken Breast",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/286695.jpg"
      },
      {
      name: "Cheesy Tomato Basil Chicken Breasts",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/290542.jpg"
      },
      {
      name: "Chicken Supreme Kiev-Style",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/299077.jpg"
      },
      {
      name: "Chicken Thighs in a Mango Curry Marinade",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/299300.jpg"
      },
      {
      name: "Chicken Thighs in Asian Tangerine Marinade",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/299358.jpg"
      },
      {
      name: "Chicken Tikka Masala",
      price: 100,
      quantity: 30,
      category_id: 4,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/299449.jpg"
      },{
      name: "Vegetable Stock",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/35728.jpg"
      },
      {
      name: "Beefy Vegetable Soup",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Warm Roasted Vegetable Salad",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "10 Minute Vegetable Pasta Sauce",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Fried Vegetable And Garlic Dressing Recipe",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/86537.jpg"
      },
      {
      name: "Autumn Romance Vegetable Stew Provencale",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/92192.jpg"
      },
      {
      name: "Bulgur Wheat and Roasted Vegetable Salad",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Herb Vegetable Dip",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/209196.jpg"
      },
      {
      name: "Grilled Vegetable Sandwiches Recipe",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/342231.jpg"
      },
      {
      name: "Dad's Secret Ingredient Vegetable Soup",
      price: 80,
      quantity: 30,
      category_id: 6,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },{
      name: "Bunelos (Appetizer)",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "BLT Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Baked Cream Cheese Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Baked Brie and Mushroom Sourdough Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Easy Ham and Cheese Appetizer Sandwiches",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/6204.jpg"
      },
      {
      name: "Best Zucchini Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/9110.jpg"
      },
      {
      name: "Shrimp Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "Asian Sugar Snap Pea Appetizer",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: ""
      },
      {
      name: "KELLOGG'S* RICE KRISPIES* Crab and Shrimp Appetizer Balls",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/15655.jpg"
      },
      {
      name: "Southwest Appetizer Cheesecake",
      price: 65,
      quantity: 20,
      category_id: 2,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/20469.jpg"
      },
      {
        name: "Crostini with Beef Tartare and White Truffle Oil",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },
        {
        name: "Beef Slices With Mushroom Sour Cream Paprika Sauce",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },
        {
        name: "Favorite Ground Beef",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },
        {
        name: "Delicious Scalloped Potato and Ground Beef Casserole",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: "http://img.recipepuppy.com/40358.jpg"
        },
        {
        name: "Steamed Beef With Rice-flour Noodles Recipe",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },
        {
        name: "Curry Beef Short Ribs With Horseradish Sauce",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: "http://img.recipepuppy.com/344678.jpg"
        },
        {
        name: "Creamed Ground Beef Sos",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: "http://img.recipepuppy.com/35208.jpg"
        },
        {
        name: "Award Winning Beef Stew",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },
        {
        name: "Beef Braised in Barolo",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: "http://img.recipepuppy.com/99863.jpg"
        },
        {
        name: "Beef and Mushrooms in Sour Cream Sauce",
        price: 140,
        quantity: 35,
        created_at: "2017-11-14 06:06:01",
        updated_at: "2017-09-14 14:36:16",
        category_id: 3,
        photo: ""
        },{
      name: "Pork Adobo Recipe",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/345672.jpg"
      },
      {
      name: " Barbecued Pork Strips Recipe ",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/708578.jpg"
      },
      {
      name: " Meat Olive Mushroom Gravy Dish Recipe ",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/722889.jpg"
      },
      {
      name: "Fall Apart Tender Pork Spare Ribs Recipe",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/227008.jpg"
      },
      {
      name: "Fresh Side Pork Bacon Recipe",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/362037.jpg"
      },
      {
      name: "Bake Pork Rib",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/512587.jpg"
      },
      {
      name: "Green Chile Chicken Sausage - Culinary Communion",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/703344.jpg"
      },
      {
      name: " Pork Adobo (Filipino Banbeave) Recipe ",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/751352.jpg"
      },
      {
      name: " Holiday Meat Pie Recipe ",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/905134.jpg"
      },
      {
      name: "Southern style Pinto beans",
      price: 110,
      quantity: 20,
      category_id: 5,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      photo: "http://img.recipepuppy.com/45381.jpg"
      },{
      name: "Cucumber Cleanser Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/342808.jpg"
      },
      {
      name: "Orange Chocolate Breakfast Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: ""
      },
      {
      name: "Refreshing Raspberry Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: ""
      },
      {
      name: "Gold Tea (Alcoholic Drink)",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: ""
      },
      {
      name: "Frosty Orange Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/3089.jpg"
      },
      {
      name: "Drink Mix Jelly",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: ""
      },
      {
      name: "Berry Fiesta Milk Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/9587.jpg"
      },
      {
      name: "Watermelon Ginger Frosted Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/35392.jpg"
      },
      {
      name: "Patriotic Drink (For Kids)",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/47617.jpg"
      },
      {
      name: "Rice Atole, Hot Rice Drink",
      price: 70,
      quantity: 20,
      category_id: 1,
      created_at: "2017-11-14 06:06:01",
      updated_at: "2017-09-14 14:36:16",
      
      photo: "http://img.recipepuppy.com/102548.jpg"
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
