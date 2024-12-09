Shopping List Application Overview: 
This is a basic web-based shopping list application that allows users to: 
(a) Add Items: Input a product name and price, and add it to a list.
(b) Remove Items: Remove individual items from the list.
(c)Clear List: Remove all items from the list.
(d) Calculate Total: Calculate the total price of all items in the list, including VAT. 

*How it Works:

# User Interface: 
(1)The user interacts with the application through a simple HTML interface.
(2) Input fields are provided for entering product names and prices.
(3) Buttons are used to add items, remove items, and clear the list. 
(4)The list of items and the total cost are displayed on the screen. 


#JavaScript Logic: 
(a) Adding Items: 
   * The addItem() function takes the product name and price from the input fields.
   * It creates a new list item and appends it to the list.
   * The total cost and VAT are recalculated.
   * Removing Items:
   * JavaScript Logic:
    
 (b) Removing Items:
    * The removeItem() function removes the specified item from the list.
    * The total cost and VAT are recalculated.
    
 (c) Clearing the List:
   * The clearCart() function removes all items from the list and resets the total cost and VAT.
   * Calculating Total and VAT:
   * The calculateTotal() function iterates over the list items, calculates the total price, adds VAT, and updates the display.
     
# Technical Implementation:

  (I)HTML:
   * Provides the basic structure of the web page.
   * Defines input fields, buttons, and display elements.
     
 (II) CSS:
   * Styles the layout and appearance of the web page.
    
 (III) JavaScript:
   * Handles user interactions, item manipulation, and calculations.
   * Uses DOM manipulation to add, remove, and update list items.
   * Calculates the total cost and VAT.
