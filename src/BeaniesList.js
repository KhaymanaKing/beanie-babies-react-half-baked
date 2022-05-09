import BeanieBaby from './BeanieBaby.js';

//TODO add a load spinner
export default function BeaniesList({ beanieBabies }) {
  console.log(beanieBabies);
  return (
    <div className='beanies'>
      {
        beanieBabies.map(baby => <BeanieBaby key={baby.id} {...baby} />)
      }
      {/* render out the beanie babies as a list */}
    </div>);
}
