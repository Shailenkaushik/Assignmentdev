/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
       
  constructor() {
   // Initialize an empty array for tasks in the constructor
   this.tasks = [];
 }
 add(str){
   this.tasks.push(str);
 }
  remove(index){
   this.tasks.splice(index,1);
  }
  update(index,updatedTodo){
    if(index>=0 && index<this.tasks.length){

    
   this.tasks[index]=updatedTodo;
    }
  }
  getAll(){
   return this.tasks;
  }
  get(index){
    if(index>=0 && index<this.tasks.length){
      return this.tasks[index];
    }
    return null;
  }
  clear(){
   this.tasks=[];
  }

}

module.exports = Todo;
