const BOARDS = [
  {
      id: 0,
      name: 'first',
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
      name: '2',
      tasks: []
  },
  {
      id: 2,
      name: '3',
      tasks: []
  }
]

const boards = (state = BOARDS, {type, id, name, text, boardId}) => {
    switch (type) {
      case 'ADD_TODO':
        return (
          state.map(board => (
            board.id == boardId ? 
              [...board, {
                id,
                name,
                text
              }] :
              board
          ))
        )
      default:
        return state
    }
  }
  
  export default boards