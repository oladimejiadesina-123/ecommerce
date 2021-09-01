import React from 'react';
import CollectionOverview from '../collection-overview/collection-overview';
import { Route } from 'react-router-dom'
import CollectionPage from '../Pages/collectionComp/collectionComp';


const ShopPage = ({ match }) => {   
     return (
       <div className="shop-page">
         < Route exact path={`${match.path}`} component= {CollectionOverview}/>
         <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
       </div>
     
    )};
        



export default ShopPage;
