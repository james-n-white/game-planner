import moment from 'moment'

const todo = (state = {}, action) => {
  switch (action.type) {
    case 'LOAD_TO_PLAY':
      return {
        toPlayData: [
            {
                name: "The Longest Journey",
                type: "Game",
                dateStarted: moment.utc()
            },
            {
                name: "Dreamfall",
                type: "Game",
                dateStarted: null
            }
        ]
      }
    default:
      return state
  }
}

const toPlay = (state = [], action) => {
  switch (action.type) {
    case 'LOAD_TO_PLAY':
      return [
        ...state,
        todo(undefined, action)
      ]
    default:
      return state
  }
}

export default toPlay