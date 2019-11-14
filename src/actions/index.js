let nextTodoId = 1
export const addTodo = (name, text, boardId) => ({
  type: 'ADD_TODO',
  id: nextTodoId++,
  name,
  text,
  boardId,
})
