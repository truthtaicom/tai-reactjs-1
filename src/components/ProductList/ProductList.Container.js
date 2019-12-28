import { connect } from 'react-redux'
import ProductList from './ProductList'
import { getProducts } from './ProductList.action'

const mapStateToProps = (state) => ({
  loading: state.productListReducer.loading,
  data: state.productListReducer.data
})

const mapDispatchToProps = {
  getProducts
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList)