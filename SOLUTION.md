# Solution

The project setup remained the same, I've only modified the script to start the project

### Install dependencies

```sh
cd client && yarn
```

### Start the app

```sh
yarn dev
```

## Octopus store

This demo includes a preview of the product details page. For which I’ve added on top of the project setup:

1. Upgraded some packages: jest and typescript
2. Apollo client to consume data from the graphql server
3. sass, sass-mq, and stylelint for styles
4. @graphql-codegen to generate types based on graphql schema

I have created a context for the shopping cart in which we have the products added to the cart and the amount.

The graphql server had only one product, so I focused on creating a product details page with this product. For future development in which we will have more than one product, the context update function needs to be refactored to handle this scenario.

Regarding UX/UI I was provided with a mobile design for the layout, so I’ve decided to implement a simple version for tablet and desktop. Leaving space on the left in case there are more pictures of the product that we need to show on the page (like a carousel).

For the other elements added to the page, I took inspiration from the Coral component library (except for animations and transitions). I’ve decided to use the drawer component to give the client a preview where he can see how many products are currently in the cart and details for the price and total. In a future version, we can add the possibility to modify the quantity or remove products from the cart from this component. From here, the client can eventually go to the checkout page to pay.

For testing I've added a MockedProvider from Apollo to mock the query and the data of the Product page. Future tests will cover the modification of the cart from the drawer component.
