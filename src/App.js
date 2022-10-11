
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componnents/Blog/Blog';
import Contact from './componnents/contact/Contact';
import Main from './componnents/Main/Main';
import Quizes from './componnents/Quzes/Quizes';
import Statics from './componnents/Statics/Statics';

function App() {
   const router= createBrowserRouter([
        {path:'/',element:<Main></Main>,
             children:[
            
               { path:'/', element:<Quizes></Quizes> },
               {path:'/statics',element:<Statics></Statics>},
               {path:'/blog',element:<Blog></Blog>},
               {path:'/contact',element:<Contact></Contact>}
             ]
      }
   ])
  return (
    <div>
     

     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
