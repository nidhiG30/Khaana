import { IMG_CDN_URL } from '../config';
// import { useContext } from 'react';
// import UserContext from '../utils/UserContext';

const RestaurantCard = ({
  name,
  cuisines,
  avgRating,
  cloudinaryImageId,
  costForTwo,
  deliveryTime,
}) => {
  // const {user} = useContext(UserContext)
  return (
    <div className='w-56 p-2 m-2 shadow-lg bg-purple-200'>
      <div>
        <img src={IMG_CDN_URL + cloudinaryImageId} alt={name} />
      </div>
      <div>
        <h2 className='font-bold text-md'>{name}</h2>
        <h3 className='text-xs'>{cuisines.join(', ')}</h3>
      </div>
      <div className='flex items-end gap-4'>
        <div className='text-sm'>
          <span className='text-xs'>⭐</span>
          <span className='text-xs'>{avgRating}</span>
        </div>
        <div>.</div>
        <div className='text-xs'>{deliveryTime} MINS</div>
        <div>.</div>
        <div className='text-xs'>Avg ₹{costForTwo * 0.01}</div>
        
      </div>
      {/* <h5 className='font-bold'>{user.name} - {user.email}</h5> 'user' object present in context of UserContext file has name property */}
    </div>
  );
};

export default RestaurantCard;
