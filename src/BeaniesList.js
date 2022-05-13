import BeanieBaby from './BeanieBaby.js';
import React from 'react';
//TODO add a load spinner
export default class BeaniesList extends React.Component {
  render(){
    return (
      <div className='beanies'>
        {
          this.props.beanieBabies.map(baby => <BeanieBaby key={baby.id} {...baby} />)
        }
        {/* render out the beanie babies as a list */}
      </div>);
  }
}
