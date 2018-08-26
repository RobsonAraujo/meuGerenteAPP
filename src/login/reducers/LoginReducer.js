

const initialState = {
    teste: `Reducer Login`
}

const LoginReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return Object.assign({}, state, {
                teste: 'muda ai'
            })
        default:
            return state
    }
}


export default LoginReducer