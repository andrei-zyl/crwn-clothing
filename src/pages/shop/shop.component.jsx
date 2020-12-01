import React from 'react';
import {Route} from 'react-router-dom';
import CollectionPageContainer from '../collection/collection.container';
import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import WithSpinner from '../../components/with-spinner/with-spinner.component';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {fetchCollectionsStartAsync} from '../../redux/shop/shop.actions';
import {selectIsCollectionFetching, selectIsCollectionsLoaded} from '../../redux/shop/shop.selectors';

class ShopPage extends React.Component{
    
    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
    
        fetchCollectionsStartAsync();
      }
    
    render(){
        const {match} = this.props;
        return(
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  component={CollectionsOverviewContainer}/>
                <Route exact path={`${match.path}/:collectionId`} component = {CollectionPageContainer}/>
            </div>
        )
    }
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
  })

export default connect(null, mapDispatchToProps)(ShopPage);