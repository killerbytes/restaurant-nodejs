const table = { id: 1, name: 'Table One' }
const category = {
            item: {
              id: 1,
              name: "Drinks"
            }
          }
const postCart = {"name":"Table Six","table_id":6,"orders":[{"product_id":50,"name":"Cucumber Cleanser Drink","price":"70","quantity":1},{"product_id":51,"name":"Orange Chocolate Breakfast Drink","price":"70","quantity":1},{"product_id":52,"name":"Refreshing Raspberry Drink","price":"75","quantity":1},{"product_id":53,"name":"Gold Tea (Alcoholic Drink)","price":"60","quantity":3}]}
const postOrders = {"orders":[{"product_id":20,"name":"Bunelos (Appetizer)","price":"65","quantity":1},{"product_id":21,"name":"BLT Appetizer","price":"65","quantity":2}],"cart_id":1}
const orders = [{"product_id":20,"name":"Bunelos (Appetizer)","price":"65","quantity":1},{"product_id":21,"name":"BLT Appetizer","price":"65","quantity":2}]

module.exports ={
  table,
  category,
  postCart,
  postOrders,
  orders

}
  