const TASKS = [
    {
        id: 0,
        text: 'it is',
        isCompleted: false,
    }
]

const todos = (state = TASKS, {id, text, type}) => {
    switch (type) {
      case 'ADD_TODO':
        return [
          ...state,
          {
            id,
            text,
            completed: false
          }
        ]
      default:
        return state
    }
  }
  
  export default todos