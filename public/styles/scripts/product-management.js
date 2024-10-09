const deleteProductButtonElements = document.querySelectorAll('.product-item button');

async function deleteProduct(event) {
 const buttonElement = event.target;
 const productId = buttonElement.dataset.productid;
 const csrfToken = buttonElement.dataset.csrfToken;

 const response = await fetch('/admin/products/' + productId + '?_csrf' + csrfToken ,{
  method: 'DELETE'
 });

 if(!response.ok){
  alert('Something went wrong!');
  return;
 }

 buttonElement.parentElement.parentElement.parentElement.parentElement.remove();

}

for(const deleteproductButtonElement of deleteProductButtonElements){
  deleteProductButtonElements.addEventListener('click', deleteProduct);
}