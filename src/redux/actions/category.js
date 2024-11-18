import request from '../../services/request';
import { LIMIT } from '../../utils/constants';

import { CATEGORY_ACTIONS } from '../types/category';

const updateStateChange = payload => {
   return { type: CATEGORY_ACTIONS, payload };
};

// Category Lists
const getCategories =
   (page = 1, limit = LIMIT) =>
   async dispatch => {
      try {
         dispatch(changeLoading());
         const {
            data: {
               pagination: { total, page: activePage },
               data: categories,
            },
         } = await request.get(`post?page=${page}&limit=${limit}`);
         // dispatch({
         //    payload: { total, categories, activePage, pageSize: limit },
         //    type: 'getCategories',
         // });
         dispatch(
            updateStateChange({
               total,
               categories,
               activePage,
               pageSize: limit,
            })
         );
      } finally {
         dispatch(changeLoading());
      }
   };

const controlModal = payload => dispatch => {
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

const sendCategory =
   ({ values, selected, activePage, form }) =>
   async dispatch => {
      try {
         dispatch(updateStateChange({ isModalLoading: true }));
         selected === null
            ? await request.post('post', values)
            : await request.put(`post/${selected}`, values);
         dispatch(updateStateChange({ isModalOpen: false, imageData: null }));
         dispatch(getCategories(activePage));
         form.resetFields();
      } finally {
         dispatch(updateStateChange({ isModalLoading: false }));
      }
   };

const editCategory = (form, id) => async dispatch => {
   dispatch(updateStateChange({ selected: id, isModalOpen: true }));
   const { data } = await request.get(`post/${id}`);
   dispatch(updateStateChange({ imageData: data.photo }));
   form.setFieldsValue(data);
};

// Categories Delete
const deleteCategory = (id, activePage, pageSize) => async dispatch => {
   await request.delete(`post/${id}`);
   dispatch(getCategories(activePage, pageSize));
};

const showModal = form => async dispatch => {
   dispatch(
      updateStateChange({ selected: null, imageData: null, isModalOpen: true })
   );
   form.resetFields();
};

// Loading page
const changeLoading = () => dispatch => {
   dispatch({
      type: 'loading',
   });
};

export {
   controlModal,
   deleteCategory,
   editCategory,
   getCategories,
   sendCategory,
   showModal,
   uploadImage,
};
