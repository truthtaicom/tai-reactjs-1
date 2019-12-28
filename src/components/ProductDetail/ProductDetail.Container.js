import { connect } from 'react-redux'
import ProductDetail from './ProductDetail'
import { getProductDetailById } from './ProductDetail.action'

const mapStateToProps = (state) => ({
  loading: state.productDetailReducer.loading,
  data: state.productDetailReducer.data
})

const mapDispatchToProps = {
  getProductDetailById
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)