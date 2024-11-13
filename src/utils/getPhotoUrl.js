// import { UPLOAD_URL } from "./constants";

// const getPhotoUrl = (obj) => UPLOAD_URL + obj._id + '.' + obj.name.split('.')[1];

// export default getPhotoUrl

import { UPLOAD_URL } from './constants';

const getUserImage = photo => {
   return `${UPLOAD_URL}/${photo}`;
};

const getImage = photo => {
   return `${UPLOAD_URL}/${photo?._id}.${photo?.name.split('.')[1]}`;
};

export { getImage, getUserImage };
