import { Link } from 'react-router-dom';

export default function BeanieBaby({ beanieBaby, id, image, name }) {
  console.log('sing', beanieBaby);
  return (
    <Link to={`/beanies/${id}`}>
      <div className='beanie-baby'>
        <p>{name}</p>
        <img src={image}/>
      </div>
    </Link>

    // this should contain a react-router-dom Link to the detail page for this particular beanie baby.
    // it should also render the beanie baby's image and show the beanie baby's name
    
  );
}
