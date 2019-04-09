// export const UPDATE_TODO = 'UPDATE_TODO';
// export function updateTodo(newTodo) {
//     return {
//         type: UPDATE_TODO,
//         payload: newTodo
//     }
// }

export const ADD_TODO = "ADD_TODO";

export const addTodo = task => {
    console.log(task)
  return {
    type: ADD_TODO,
    payload: task
  };
};
