import { combineReducers } from 'redux'
import LoginReducer from '../login/reducers/LoginReducer'
import SaldoReducer from '../saldo/reducers/SaldoReducer'

const Reducers = combineReducers({
    LoginReducer,
    SaldoReducer
})

export default Reducers