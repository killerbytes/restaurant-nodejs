$(function(){
  $('.quantity').click(function(){
    const order_id = this.dataset.id
    const cart_id = this.dataset.cart_id
    $.ajax({
      url: `http://localhost:8000/api/orders/${order_id}/void`,
      method: 'patch',
      data: {
        cart_id,
        quantity: 1
      }
    })
  })
})