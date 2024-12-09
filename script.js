// add item function
function addItem() {
    const product = document.getElementById("product").value;
    const price = parseFloat(document.getElementById("price").value);
  //product validation
    if (!product || isNaNprice) {
        alert("please enter a valid product name and price.");
        }
     
      const itemList = document.getElementById("items-list");
      const item = document.createElement("li");
      item.textContent = `${product}: $${price.toFixed(2)}`;
      itemList.appendChild(item);
  
      calculateTotal();
  
      // Clear input fields
      document.getElementById("product").value = "";
      document.getElementById("price").value = "";
    
  }
  //remove item function
  function removeItem(button){
    const item = button.paremtNode;
    const itemList = document.getElementById("items-list");
    itemList.removeChild(item);

  calculateTotal();
  }
  // clear cart function
  function ClearCart(){
    const itemList = document.getElementById("items-list")
    itemList.innerHTML="";
    calculateTotal();
  }

  function calculateTotal() {
    const items = document.querySelectorAll("#items-list li");
    let total = 0;

  //iterate through items and calculate total
    items.forEach(item => {
      const price = parseFloat(item.textContent.split("$")[1]);
      total += price;
    });
  
    // Calculate VAT (16%)
    const vat = total * 0.16;
    const netTotal = total + vat;

  //update total and VAT
    document.getElementById("total").textContent = `Total: $${netTotal.toFixed(2)}`;
    document.getElementById("vat").textContent = `VAT (${vatRate * 100}%): $${vat.toFixed(2)}`;
  }
  