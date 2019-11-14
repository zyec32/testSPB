let nextTodoId = 1
export const addTodo = (name, text, boardId) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  text,
  boardId,
})

export const deleteTodo = (id) => ({
  type: 'DELETE_TODO',
  id,
})

export const sortTodo = (boardId) => ({
  type: 'SORT_TODO',
  boardId,
})
