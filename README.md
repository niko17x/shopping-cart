# Create a shopping cart website.
# Objective => Implement `react-router-dom` so that you have at least 2 pages that the user can navigate between.
  • Website contains a 'home page' and 'shop page'.
  • User will be using a navbar to navigate between the 2 pages.
  • Shopping Cart will be a modal that user can access by clicking on the shopping cart image in the navbar section.
  • In the shopping cart, cart should display the number of items currently in the cart. The user can also increase/decrease the number of items directly in the shopping cart.
  • Shopping cart should contain: Item(s) that were 'added to cart'; display quantity of items; increment/decrement button for item quantity.
  • Build individual card items that contains: Title; image; price; 'add to cart' button;
  • User submitting order should adjust all the items in the cart including quantity of items. Every time an item is added, the shopping cart should be shown (like a pop up).

# Component setup:
    High level view:
    •• # public directory:
      • mainLogo.svg => Main logo for navbar.
      • cartImage.svg => Cart image for navbar.
    •• # src directory:
      • App.js
      • Main.js
      • # component directory:
        • HomePage.js => Main landing page.
        • NavBar.js => Contains: main logo image, home page, shop page, cart.
        • ShopPage.js => Page listing all product items for sale.
        • DetailedItemPage.js => Page that displays item in detail when clicked.
        • DataFetcher.js => Contains all data retrieved from the fetch API.
        • ShopNowButton.js => Main button for home page.
            - User gets sent to 'ShopPage.js' with all products shown (un-categorized).
        • ItemCategoryLink.js => Available categories listed on home page.
            - User gets sent to 'ShopPage.js' with specific clicked on category item shown.
        • ProductCard.js => Cards that display a single product.
            - Each product card contains: product image, title, price, add-to-cart button.
        • AddToCartButton.js => Button rendered in every 'ProductCard.js' component & in 'DetailedItemPage.js'.
        - Clicking on this component renders the specific item count in cart.
    
# Logic:
*** Note: Primary objective for this project => React testing and routing!!!

# Todo's:
  •• ShoppingPage.js :
    • Clicking on Add to Cart button:
      [] Adds the product to the cart.
      [] Add a 'red dot' design on the cart to indicate item being added to cart.
    • Clicking on the shopping cart in the navbar:
      [] Opens modal on the right side.
    • What happens inside the 'cart modal':
      [] Displays all items that have been added to cart.
      [] Each item can be edited by:
        - Removing/deleting items.
        - Incrementing/decrementing item quantity.
      [] 'X' to close the modal.