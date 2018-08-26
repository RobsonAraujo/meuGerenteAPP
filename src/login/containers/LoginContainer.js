import { connect } from 'react-redux'
import LoginScreen from '../components/LoginScreen'

const mapStateToProps = state => {
    return {
        teste: state.LoginReducer.teste
    }
}

const LoginContainer = connect(
    mapStateToProps,
    null
)(LoginScreen)

export default LoginContainer