# Create a shopping cart website.
# Objective => Implement `react-router-dom` so that you have at least 2 pages that the user can navigate between.
  • Website contains a 'home page' and 'shop page'.
  • User will be using a navbar to navigate between the 2 pages.
  • Shopping Cart will be a modal that user can access by clicking on the shopping cart image in the navbar section.
  • In the shopping cart, cart should display the number of items currently in the cart. The user can also increase/decrease the number of items directly in the shopping cart.
  • Shopping cart should contain: Item(s) that were 'added to cart'; display quantity of items; increment/decrement button for item quantity.
  • Build individual card items that contains: Title; image; price; 'add to cart' button;
  • User submitting order should adjust all the items in the cart including quantity of items. Every time an item is added, the shopping cart should be shown (like a pop up).

# Directory Setup:
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
        • ProductPage.js => Page that displays item in detail when clicked.
        • DataFetcher.js => Contains all data retrieved from the fetch API.
        • ShopNowButton.js => Main button for home page.
            - User gets sent to 'ShopPage.js' with all products shown (un-categorized).
        • ItemCategoryLink.js => Available categories listed on home page.
            - User gets sent to 'ShopPage.js' with specific clicked on category item shown.
        • ProductCard.js => Cards that display a single product.
            - Each product card contains: product image, title, price, add-to-cart button.
        • AddToCartButton.js => Button rendered in every 'ProductCard.js' component & in 'DetailedItemPage.js'.
        - Clicking on this component renders the specific item count in cart.
        • CartModal.js => Modal that appears when clicked on the shopping cart in NavBar.js.
        • ModalProductCard.js => Product cards displayed inside modal.

# Personal Notes:
  • When using React.useEffect, having a dependency can maintain the rerenders. However, if the dependency is defined outside of the React.useEffect component, this can cause constant rerenders to happen. To prevent const rerenders, use React.callBack with/without dependency.
  • When using ARIA attributes (i.e. 'role'), do not assign just any value to it. There are preset valid ARIA roles that must be followed for accessibility reasons.
  • when using the “AllBy” element selectors, you can target individual elements from the given array by using index positions ie: element[0]
  • Some testing will require the matchers/assertions to wait for specific data to be loaded first before being able to directly test the element. 
  • You can create functions for repetitive code inside the describe block and use it like a normal function with parameters passed in for all test blocks.


