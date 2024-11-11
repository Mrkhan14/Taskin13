import { UPLOAD_URL } from "./constants";

const getPhotoUrl = (obj) => UPLOAD_URL + obj._id + '.' + obj.name.split('.')[1];

export default getPhotoUrl