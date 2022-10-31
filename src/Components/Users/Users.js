import React, { useState } from 'react';
import { Wrapper } from '../../Components/styles/Wrapper.style';
import { User } from '../../Components/User/User';
import { Text } from '../../Components/styles/Text';
import { Nav, NavContainer } from './style';
import { getUsers } from '../../services/apis';
import { useQuery } from 'react-query';
import { useEffect } from 'react';
import { Skeleton } from '../WithSuspense';
import { Error } from '../ErrorMessage/Error';

const PageButton = ({ pg, setPage }) => {
   return <button onClick={() => setPage(pg)}>{pg}</button>;
};

export const Users = ({ setUsers }) => {
   const [page, setPage] = useState(1);
   const [screenSize, setScreenSize] = useState(undefined);
   const {
      isLoading,
      isError,
      data: users,
      isPreviousData,
   } = useQuery(['users', page], () => getUsers(page), {
      keepPreviousData: true,
   });

   useEffect(() => {
      setUsers(users);
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [users]);

   useEffect(() => {
      const handleResize = () => setScreenSize(window.innerWidth);
      window.addEventListener('resize', handleResize);
      handleResize();
      return () => window.removeEventListener('resize', handleResize);
   }, []);

   const prevPage = () => setPage((prev) => prev - 1);
   const nextPage = () => setPage((prev) => prev + 1);
   const pagesArray = Array(5)
      .fill()
      .map((_, index) => index + 1);

   if (isLoading) {
      return <Skeleton />;
   }

   if (isError) {
      return <Error />;
   }
   const style = {
      textAlign: 'center',
      fontSize: '1.5rem',
      fontWeight: 'bold',
   }

   return (
      <>
         <div style={style}>
            USER PROFILES
         </div>
         <Wrapper flow="row wrap" align="stretch" justfy="flex-start">
            {users?.results?.length > 1 &&
               users?.results?.map((user) => {
                  return <User user={user} />;
               })}
         </Wrapper>
         <NavContainer>
            <Nav>
               <button
                  onClick={prevPage}
                  disabled={isPreviousData || page === 1}
               >
                  Prev
               </button>
               {screenSize > 768 &&
                  pagesArray.map((pg) => (
                     <PageButton key={pg} pg={pg} setPage={setPage} />
                  ))}
               <Text ws="nowrap" padding="0 0.5em">
                  Page {users?.info?.page}
               </Text>
               <button onClick={nextPage} disabled={isPreviousData}>
                  Next
               </button>
            </Nav>
         </NavContainer>
      </>
   );
};
