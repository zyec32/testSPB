const BOARDS = [
  {
      id: 0,
      name: 'To Do',
      tasks: [
        {
          id: 0,
          name: 'Hello',
          text: 'World'
        }
      ],
      sortBy: 0 // 0 A-Z - 1 Z-A
  },
  {
      id: 1,
      name: 'In process',
      tasks: [],
      sortBy: 0
  },
  {
      id: 2,
      name: 'Done',
      tasks: [],
      sortBy: 0
  }
]

const sort = (a, b, sortBy) => (
  sortBy ? 
    (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0) : 
    (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0)
)

const boards = (state = BOARDS, {type, id, name, text, boardId}) => {
    switch (type) {
      case 'ADD_TODO':
        return (
          state.map(board => (
            board.id === boardId ? 
              {
                ...board,
                tasks: [
                  ...board.tasks,{
                    id,
                    name,
                    text
                  }
                ].sort((a, b) => sort(a,b, board.sortBy)) } :
              board
          ))
        )
      case 'DELETE_TODO':
        return (
          state.map(board => ({
            ...board,
            tasks: board.tasks.filter(task => (task.id !== id))
          }))
        )
      case 'SORT_TODO':
        return (
          state.map(board => (
            board.id === boardId ? 
              {
                ...board,
                sortBy: (board.sortBy+1)%2,
                tasks: board.tasks.sort((b, a) => sort(a,b, board.sortBy)) } :
              board
          ))
        )
      case 'EDIT_TODO_NAME':
        return (
          state.map(board => ({
            ...board,
            tasks: board.tasks.map(task => (task.id === id) ? {...task, name} : task)
          }))
        )
      case 'EDIT_TODO_TEXT':
        return (
          state.map(board => ({
            ...board,
            tasks: board.tasks.map(task => (task.id === id) ? {...task, text} : task)
          }))
        )
      case 'MOVE_TODO':
        var myTask;
        state.map(board => (board.tasks.map(task => {
          if (task.id === id) myTask = task;
        })));
        return (
          state.map(board => ({
            ...board,
            tasks: board.tasks.filter(task => (task.id !== id))
          })).map(board => (
            board.id === boardId ?
              {
                ...board,
                tasks: [...board.tasks, myTask].sort((a, b) => sort(a,b, board.sortBy))
              } :
              board
          ))
        )
      default:
        return state
    }
  }
  
  export default boards