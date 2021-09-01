import React from 'react';
import { connect } from 'react-redux';

import { selectCollection } from '../../../redux/shop/shop.selector';
import './collectionComp.scss';
import Collection from '../../Collection/Collection';


const CollectionPage = ({collection}) => {
    const { title, items } = collection
    return (
        <div className="collection-page">
            <h1 className="title">{title}</h1>
            <div className="items">
                {
                    items.map(item => (
                        <Collection key={item.id} item={item}/>
                    ))
                }
            </div>
        </div>
    )
}


const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})
export default connect(mapStateToProps)(CollectionPage);