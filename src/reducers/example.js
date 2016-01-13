import Immutable from 'immutable'

export default (state = Immutable.List(['stuff']), action) => {
  switch(action.type){
    case 'delFile':
      return state.splice(action.file)
    case 'addFile':
      return state.unshift(action.todo)
    default:
      return state
  }
}

