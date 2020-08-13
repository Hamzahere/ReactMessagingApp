export const createMessage = (message) => {
  return (dispatch, getState, {getFirestore}) => {
    // make async call to database
    const firestore = getFirestore();
    const profile = getState().firebase.profile;
    firestore.collection('messages').add({
      ...message,
      authorFirstName: profile.firstName,
      authorLastName: profile.lastName,
      createdAt: new Date()
    }).then(() => {
      dispatch({ type: 'CREATE_MESSAGE_SUCCESS' });
    }).catch(err => {
      dispatch({ type: 'CREATE_MESSAGE_ERROR' }, err);
    });
  }
};