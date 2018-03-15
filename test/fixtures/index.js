const table = { id: 1, name: 'Table One' }
const category = {
  item: {
    id: 1,
    name: "Drinks"
  }
}
const postCart = { "name": "Table Six", "table_id": 6, "orders": [{ "product_id": 50, "name": "Cucumber Cleanser Drink", "price": "70", "quantity": 1 }, { "product_id": 51, "name": "Orange Chocolate Breakfast Drink", "price": "70", "quantity": 1 }, { "product_id": 52, "name": "Refreshing Raspberry Drink", "price": "75", "quantity": 1 }, { "product_id": 53, "name": "Gold Tea (Alcoholic Drink)", "price": "60", "quantity": 3 }] }
const postOrders = { "orders": [{ "product_id": 20, "name": "Bunelos (Appetizer)", "price": "65", "quantity": 1 }, { "product_id": 21, "name": "BLT Appetizer", "price": "65", "quantity": 2 }], "cart_id": 1 }
const orders = [{ "product_id": 20, "name": "Bunelos (Appetizer)", "price": "65", "quantity": 1 }, { "product_id": 21, "name": "BLT Appetizer", "price": "65", "quantity": 2 }]
const transactions = [
  {
    id: 1,
    discount: "0",
    total_price: "480",
    total_amount_due: "480",
    notes: null,
    void: false,
    created_at: "2018-03-05T16:35:38.000Z",
    updated_at: "2018-03-05T16:35:38.000Z",
    user_id: 1,
    cart_id: 4
  },
  {
    id: 2,
    discount: "10",
    total_price: "2430",
    total_amount_due: "2420",
    notes: null,
    void: false,
    created_at: "2018-03-05T16:38:43.000Z",
    updated_at: "2018-03-05T16:38:43.000Z",
    user_id: 1,
    cart_id: 1
  },
  {
    id: 3,
    discount: "10",
    total_price: "2625",
    total_amount_due: "2615",
    notes: null,
    void: false,
    created_at: "2018-03-05T16:39:36.000Z",
    updated_at: "2018-03-05T16:39:36.000Z",
    user_id: 1,
    cart_id: 1
  }
]

module.exports = {
  table,
  category,
  postCart,
  postOrders,
  orders,
  transactions

}
