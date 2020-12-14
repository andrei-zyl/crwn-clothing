import React, {useEffect, lazy, Suspense} from 'react';
import Spinner from '../../components/spinner/spinner.component';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchCollectionsStart} from '../../redux/shop/shop.actions';

const CollectionPageContainer = lazy(() => import('../collection/collection.container'));
const CollectionsOverviewContainer = lazy(() => import('../../components/collections-overview/collections-overview.container'));

const ShopPage = ({match, fetchCollectionsStart}) => {
    
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart])
    
    return(
        <Suspense fallback={<Spinner/>}>
            <div className='shop-page'>
                <Route exact path={`${match.path}`}  component={CollectionsOverviewContainer}/>
                <Route exact path={`${match.path}/:collectionId`} component = {CollectionPageContainer}/>
            </div>
        </Suspense>
    )
} 

const mapDispatchToProps = dispatch => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
  })

export default connect(null, mapDispatchToProps)(ShopPage);