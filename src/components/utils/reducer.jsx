const initialState = { 
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    errors:{
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    }
 };

 const InitialLogin = { 
    username: '',
    email: '',
    password: '',
    errors:{
        username: '',
        email: '',
        password: '',
    }
 };

function RegisterReducer(state, action) {
  switch (action.type) {
    case 'fullname': {
        return {
            ...state,
            [action.field]: action.value,
             errors: {
          ...state.errors,
          [action.field]: '', 
        },
          };
    }
    case 'username': {
        return {
            ...state,
            [action.field]: action.value,
             errors: {
          ...state.errors,
          [action.field]: '',
        },
          };
    }
    case 'email': {
        return {
            ...state,
            [action.field]: action.value,
             errors: {
          ...state.errors,
          [action.field]: '', 
        },
          };
    }
    case 'password': {
        return {
            ...state,
            [action.field]: action.value,
             errors: {
          ...state.errors,
          [action.field]: '', 
        },
          };
    }
    case 'confirm_password': {
        return {
            ...state,
            [action.field]: action.value,
             errors: {
          ...state.errors,
          [action.field]: '', 
        },
          };
    }
    case 'SET_ERROR':
    return {
      ...state,
      errors: {
        ...state.errors,
        [action.field]: action.error,
      },
    };
  }
  throw Error('Unknown action: ' + action.type);
}

function LoginReducer(state, action) {
    switch (action.type) {
      case 'username': {
          return {
              ...state,
              [action.field]: action.value,
               errors: {
            ...state.errors,
            [action.field]: '',
          },
            };
      }
      case 'email': {
          return {
              ...state,
              [action.field]: action.value,
               errors: {
            ...state.errors,
            [action.field]: '', 
          },
            };
      }
      case 'password': {
          return {
              ...state,
              [action.field]: action.value,
               errors: {
            ...state.errors,
            [action.field]: '', 
          },
            };
      }
      case 'SET_ERROR':
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.field]: action.error,
        },
      };
    }
    throw Error('Unknown action: ' + action.type);
  }


export { initialState, RegisterReducer, InitialLogin, LoginReducer }