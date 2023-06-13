/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
    
    var newCategory = []
    var categoryUpdated = false;
    for(let i = 0; i < transactions.length; i++) {
        categoryUpdated = false;
        if (newCategory.length > 0) {
            for(let j = 0; j < newCategory.length; j++) {
                if (newCategory[j].category === transactions[i].category) {
                    categoryUpdated = true;
                    newCategory[j].totalSpent += transactions[i].price;
                }
            }

            if (!categoryUpdated) {
                newCategory.push({category: transactions[i].category, totalSpent: transactions[i].price});
            }
        } else {
            newCategory.push({category: transactions[i].category, totalSpent: transactions[i].price});
        }
    }
    
    return newCategory;
}



const transactions = [{ id: 1, timestamp: 1656076800000, price: 40, category: 'Food', itemName: 'Pasta'}, { id: 2, timestamp: 1656259600000, price: 40, category: 'Food', itemName: 'Burger' }, { id: 3, timestamp: 1656019200000, price: 10, category: 'Clothing', itemName: 'T-Shirt'},{id: 4,timestamp: 1656364800000,price: 300,category: 'Electronics',itemName: 'Laptop'},{id: 5,timestamp: 1656105600000,price: 250,category: 'Clothing',itemName: 'Jeans'}];

var finalresult = calculateTotalSpentByCategory(transactions);

console.log(finalresult);




module.exports = calculateTotalSpentByCategory;
