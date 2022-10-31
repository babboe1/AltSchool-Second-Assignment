import React, { lazy, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import { Header } from './Header/Header';
import { Home } from '../Pages/Home/Home';
import { UsersList } from '../Pages/Users/Users';
import { SingleUser } from '../Pages/SingleUser/SingleUser';
import { WithSuspense } from '../Components/WithSuspense';
import { About } from '../Pages/About/About';
const NotFound = WithSuspense(
   lazy(() => import('../Components/ErrorMessage/NotFound')),
);

export const Pages = () => {
   const [users, setUsers] = useState(undefined);
   return (
      <>
         <Header />
         <Routes>
            <Route path="/" element={<Home setUsers={setUsers} />} />
            <Route path="home" element={<Home setUsers={setUsers} />} />
            <Route path="about" element={<About />} />
            <Route path="users" element={<UsersList setUsers={setUsers} />}>
               <Route path=":userId" element={<SingleUser users={users} />} />
            </Route>
            <Route path="*" element={<NotFound />} />
         </Routes>
      </>
   );
};
