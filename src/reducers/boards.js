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
      ]
  },
  {
      id: 1,
      name: 'In process',
      tasks: []
  },
  {
      id: 2,
      name: 'Done',
      tasks: []
  }
]

const boards = (state = BOARDS, {type, id, name, text, boardId}) => {
    switch (type) {
      case 'ADD_TODO':
        return (
          state.map(board => (
            board.id == boardId ? 
              {...board,
                tasks: [
                  ...board.tasks,{
                    id,
                    name,
                    text
                  }
                ] } :
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
      default:
        return state
    }
  }
  
  export default boards