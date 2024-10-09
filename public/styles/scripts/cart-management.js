const addToCartButtonElement = document.querySelector('#product-details button' );

const cartBadgeElements = document.querySelectorAll('/nav-items .badge');

  async function addToCart(){
  const productId = addToCartButtonElement.dataset.productid;

  const csrfToken = addToCartButtonElement.dataset.csrf;


  let response;
  try{
    const response = await fetch('/cart/items', {
      method: 'POST',
      body: JSON.stringify({
        productId: productId,
        _csrf
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

  }catch(error){
    alert('Somethinf went wrong!');
    return;
  }
  
  if(!response.ok){
    alert('Somethiing went wrong!');
    return;
  }

  const responseData = await respomse.json();

  const newTotalQuantity = responseData.newTotalItems;

  cartBadgeElement.textContent = newTotalQuantity;


for (const cartBadgeElement of cartBadgeElements){
  cartBadgeElement.textContent = newTotalQuantity;
}
}

addToCartButtonElement.addEventListener('click' , addToCart);