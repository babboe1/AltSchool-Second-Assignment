import { QueryClientProvider, QueryClient } from 'react-query';
import { Pages } from './Layout';
import { BrowserRouter } from 'react-router-dom';
import './Components/styles/App.css';

function App() {
   const queryClient = new QueryClient();

   return (
      <>
         <QueryClientProvider client={queryClient}>
            <BrowserRouter>
               <Pages />
            </BrowserRouter>
         </QueryClientProvider>
      </>
   );
}

export default App;
