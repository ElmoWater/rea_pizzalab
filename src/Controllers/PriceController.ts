const formatPrice = (price:number):string=>{
  return price.toFixed(2)+' €';
}
const calculateOrderTotal = (orderHistory:OrderHistory):number=>{
  let total = 0;
  orderHistory.map((order, index) => {
    total += order.total;
  });
  return total;
}
export {formatPrice,calculateOrderTotal}