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

export const checkAccess = () => {
  try {
    const data = sessionStorage.getItem(btoa('fullAccess'));
    let fullAccess = false;
    if (atob(data) === 'true') {
      fullAccess = true;
    }
    return fullAccess;
  } catch (err) {
    console.error('Could not load state from localStorage', err);
    return undefined;
  }
};

export const checkAccessSent = () => {
  try {
    const data = localStorage.getItem(btoa('accessSent'));
    let accessSent = false;
    if (atob(data) === 'true') {
      accessSent = true;
    }
    return accessSent;
  } catch (err) {
    console.error('Could not load state from localStorage', err);
    return undefined;
  }
};
