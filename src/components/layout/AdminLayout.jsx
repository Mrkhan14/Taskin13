import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
   return (
      <Fragment>
         <aside></aside>
         <main>
            <Outlet></Outlet>
         </main>
      </Fragment>
   );
};

export default AdminLayout;
