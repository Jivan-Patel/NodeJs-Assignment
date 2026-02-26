# Product API (Using In-Memory JSON Database)

## Objective

Build a REST API using Express.js that manages product records stored in an in-memory JSON array.

The application:

- Uses GET, POST, and PUT routes  
- Includes static and dynamic routes  
- Follows REST principles  
- Returns proper HTTP status codes  

---

## Product Record Structure

Each product contains:

```js
{
  id: 1,
  name: "Wireless Mouse",
  category: "Electronics",
  price: 799,
  stock: 25,
  rating: 4.3
}
```

The project contains 5 predefined products stored inside the `products` array in `index.js`.

---

# Implemented Routes

## 1. GET /

Checks if server is running.

Response:

```
Express server is running
```

Status Code: 200

---

## 2. GET /products

Returns all products.

- Status Code: 200  
- Returns full JSON array  

---

## 3. GET /products/:id

Returns product by ID.

Example:

```
GET /products/2
```

- If product exists → 200  
- If not found → 404  

Error Response:

```json
{
  "message": "product not found"
}
```

---

## 4. GET /products/category/:categoryName

Returns all products from a specific category (case-insensitive).

Example:

```
GET /products/category/Electronics
```

- Status Code: 200  
- Returns array of matching products  
- If no products found → returns empty array  

---

## 5. POST /products

Creates a new product.

Request Body:

```json
{
  "category": "Electronics",
  "price": 1500,
  "rating": 4.2
}
```

Response:

```json
{
  "message": "product created",
  "product": {
    "id": 6,
    "category": "Electronics",
    "price": 1500,
    "rating": 4.2
  }
}
```

- Status Code: 201  

---

## 6. PUT /product/:id

Replaces an entire product (except ID).

Example:

```
PUT /product/3
```

Request Body:

```json
{
  "category": "Accessories",
  "price": 1200,
  "rating": 4.5
}
```

- If product exists → 200  
- If not found → 404  

Success Response:

```json
{
  "message": "product replaced",
  "product": { ... }
}
```

---

## 7. PUT /product/:id/stock

Updates only the stock of a product.

Example:

```
PUT /product/2/stock
```

Request Body:

```json
{
  "stock": 100
}
```

- Status Code: 200  
- If not found → 404  

---

## 8. PUT /product/:id/price

Updates only the price of a product.

Example:

```
PUT /product/4/price
```

Request Body:

```json
{
  "price": 1999
}
```

- Status Code: 200  
- If not found → 404  

---

# Steps to Run Locally

1. Clone the repository  
2. Run `npm install`  
3. Install Express if not installed:

```
npm install express
```

4. Start server using:

```
node index.js
```

5. Server runs on:

```
http://localhost:3000
```

---

# Notes

- Data is stored in-memory (array), so restarting the server resets all changes  
- No database is connected  
- No validation is implemented  
- ID is generated using `products.length + 1`  

---

# Tools for Testing

- Postman  
- Thunder Client  
- cURL  
- Any REST client  

---