//use arrays when need ordered data structure
//can hurt performance due to order, especially around insertion and removal


let names = ['Sam', 'Katie', 'Layla'];
//Accessing data in arrays is FAST - 0(1)
//number of index does not matter, always O(1)


//Insertion:
//pushing to the end of array is still O(1) / simple, constant operation / same with pop
// names.push('Raj');
// console.log(names);
//names.push('Raj');

//However, problem when we insert at the beginning of array because ALL indexes need to be updated 
//because we have added one element to the beginiing of array. Everthing gets re-indexed
//Therefore, it's O(N) for adding to the beginning. 'unshift' adds to beginning and 'shift' removes from beginning
// names.unshift('Raj');
// console.log(names);
// names.shift('Raj');
// console.log(names);

//CONCAT(MULTIPLE ARRAYS AND MERGES TOGETHER), SLICE (Copy of part an array) AND SPLICE(remove and add new elements) - O(N)


//SORT (time takes to sort array is alrger than O(N), it's more complicated) - O(N * log N)

//farEach/map/filter/reduceetc. - O(N)




