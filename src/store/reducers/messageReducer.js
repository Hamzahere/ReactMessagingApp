const initState = {
  messages: [
    {id: '1', title: 'First Task', content: 'blah blah blah'},
    {id: '2', title: 'Thanking You for the Gift', content: 'blah blah blah'},
    {id: '3', title: 'Weekend trip with family', content: 'blah blah blah'}
  ]
}

const messageReducer = (state = initState, action) => {
  switch(action.type){
    case 'CREATE_MESSAGE':
      console.log('created message',action.message);
      return state;
      case 'CREATE_MESSAGE_ERROR':
      console.log('created message error',action.err);
      return state;
      default:
        return state;
  }
};

export default messageReducer;