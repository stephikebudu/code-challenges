/*
PSEUDOCODE
separate cent amount from dollar amount by rounding down price to get dollar amount. subtract dollar amount from price and round down difference to 1 decimal place to get cent amount
check if cent amount is less than 0.3
  then round price down
else if cent amount is greater than 2 AND less than 8
  then update cent amount to 0.5
  then add whole num to cent amount
else
  round price up
*/

function pricify(price){
  const dollarAmount = Math.floor(price);
  let centAmount = (price - dollarAmount).toFixed(1);
  let newPrice;

  if (centAmount < 0.3){
    newPrice = dollarAmount;
  } else if (centAmount > 0.2 && centAmount < 0.8) {
    newPrice = dollarAmount + 0.5;
  } else {
    newPrice = Math.ceil(price)
  }

  return newPrice;
}