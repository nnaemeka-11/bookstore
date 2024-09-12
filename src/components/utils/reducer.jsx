const initialState = { 
    fullname: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
    response: '',
    errors:{
        fullname: '',
        username: '',
        email: '',
        password: '',
        confirm_password: '',
    }
 };

 const InitialLogin = { 
    user_id: '',
    password: '',
    errors:{
        user_id: '',
        password: '',
    },
    response:''
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
    case 'SET_RESPONSE': {
      return {
          ...state,
      response: {
        ...state.response,
        [action.field]: action.response, 
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
      case 'user_id': {
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
      case 'SET_RESPONSE': {
        return {
            ...state,
        response: {
          ...state.response,
          [action.field]: action.response, 
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