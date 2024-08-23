export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('loggedUser');
    if (serializedState === null) {
      return undefined; // Let reducers initialize the state.
    }
    return JSON.parse(serializedState);
  } catch (err) {
    console.error('Could not load state from localStorage', err);
    return undefined;
  }
};
