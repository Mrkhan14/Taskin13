import request from '../../services/request';
import { LIMIT } from '../../utils/constants';

import { POSTS_ACTIONS } from '../types/post';

const updateStateChange = payload => {
   return { type: POSTS_ACTIONS, payload };
};

// Post List

const getPosts =
   (page = 1, limit = LIMIT) =>
   async dispatch => {
      try {
         dispatch(changeLoading());
         const {
            data: {
               pagination: { total, page: activePage },
               data: posts,
            },
         } = await request.get(`post?page=${page}&limit=${limit}`);
         dispatch(
            updateStateChange({
               total,
               posts,
               activePage,
               page: limit,
            })
         );
      } finally {
         dispatch(changeLoading());
      }
   };

// Delete
const deletePost = (id, activePage, pageSize) => async dispatch => {
   await request.delete(`post/${id}`);
   dispatch(getPosts(activePage, pageSize));
};

// Loading page
const changeLoading = () => dispatch => {
   dispatch({
      type: 'loading',
   });
};

// show Modal
const showModal = form => async dispatch => {
   dispatch(
      updateStateChange({ selected: null, imageData: null, isModalOpen: true })
   );
   form.resetFields();
};

// control Modal
const controlModal = () => dispatch => {
   dispatch(updateStateChange({ isModalOpen: payload }));
};

const uploadImage = file => async dispatch => {
   try {
      dispatch(updateStateChange({ imageLoading: true }));
      const formData = new FormData();
      formData.append('file', file);
      const { data } = await request.post('upload', formData);
      dispatch(updateStateChange({ imageData: data }));
   } finally {
      dispatch(updateStateChange({ imageLoading: false }));
   }
};

const sendPost =
   ({ values, selected, activePage, form }) =>
   async dispatch => {
      try {
         dispatch(updateStateChange({ isModalLoading: true }));
         // Ensure tags are in array format
         if (values.tags && typeof values.tags === 'string') {
            values.tags = values.tags.split(',').map(tag => tag.trim());
         }
         selected === null
            ? await request.post('post', values)
            : await request.put(`post/${selected}`, values);
         dispatch(updateStateChange({ isModalOpen: false, imageData: null }));
         dispatch(getPosts(activePage)); // Ensure it is `getPosts` here
         form.resetFields();
      } finally {
         dispatch(updateStateChange({ isModalLoading: false }));
      }
   };

const editPost = (form, id) => async dispatch => {
   dispatch(updateStateChange({ selected: id, isModalOpen: true }));
   const { data } = await request.get(`post/${id}`);
   dispatch(updateStateChange({ imageData: data.photo }));
   // Ensure tags are in array format
   if (data.tags && typeof data.tags === 'string') {
      data.tags = data.tags.split(',').map(tag => tag.trim());
   }
   form.setFieldsValue(data);
};

export {
   controlModal,
   deletePost,
   editPost,
   getPosts,
   sendPost,
   showModal,
   uploadImage,
};
