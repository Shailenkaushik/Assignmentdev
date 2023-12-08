/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  const mapping=new Map();
  for(let i=0;i<transactions.length;i++){
            
       var cat=transactions[i].category;
       var pri=transactions[i].price;
       var a=mapping.get(cat);
       if(a){
          a=a+pri;
          mapping.set(cat,a)
       }
       else{
         mapping.set(cat,pri)
       }
       
        
        
  }
  var ans=[];
  
//   console.log(mapping)
mapping.forEach((values, keys) => {
   var cate=keys;
   var vale=values;
   // console.log(cate)
   var obj={
       category:cate,
       totalSpent:vale
   }
   // console.log(obj);
   ans.push(obj);
});
// console.log(ans);
  return ans;
}

module.exports = calculateTotalSpentByCategory;
