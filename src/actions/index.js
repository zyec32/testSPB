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

export const editTodoName = (id, name) => ({
  type: 'EDIT_TODO_NAME',
  id,
  name,
})

export const editTodoText = (id, text) => ({
  type: 'EDIT_TODO_TEXT',
  id,
  text,
})
