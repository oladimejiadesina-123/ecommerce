import React from 'react';
import Collection from '../Collection/Collection';
import './Preview.scss';

const Preview = ({title, items}) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
        {items
          .filter((item, idx) => idx < 4)
          .map(({id, ...otherCollection}) => (
            <Collection key={id} {...otherCollection} />
          ))}
      </div>
    </div>
  );
};

export default Preview;
