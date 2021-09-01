import React from 'react';
import { connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections} from '../../redux/shop/shop.selector';
import Preview from '../Preview-Collection/Preview';
import './collection-overview.scss';

const CollectionOverview = ({collections}) => { 
    return (
        <div className="collection-overview">
          {
          collections.map(({id, ...otherCollectionProps}) => (
            <Preview key={id} {...otherCollectionProps} />
          ))
          }
        </div>
      )};




const mapStateToProps = createStructuredSelector({
    collections: selectCollections
  
  })
export default connect(mapStateToProps)(CollectionOverview);