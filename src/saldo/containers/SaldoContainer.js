import { connect } from 'react-redux'
import SaldoScreen from '../components/SaldoScreen'

const mapStateToProps = state => {
    return {
        teste: state.SaldoReducer.teste
    }
}

const SaldoContainer = connect(
    mapStateToProps,
    null
)(SaldoScreen)

export default SaldoContainer