
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './componnents/Blog/Blog';
import Contact from './componnents/contact/Contact';
import Main from './componnents/Main/Main';
import QuizStart from './componnents/QuizStart/QuizStart';
import Quizes from './componnents/Quzes/Quizes';
import Statics from './componnents/Statics/Statics';

function App() {
   const router= createBrowserRouter([
        {path:'/',element:<Main></Main>,
             children:[
            
               { path:'/',
               loader: ()=>fetch('https://openapi.programming-hero.com/api/quiz'),
               element:<Quizes></Quizes> },
               {path:'/quiz/:quizId',
                loader: ({params})=>{
                  console.log(params)
                  return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizId}`)
                },
               element:<QuizStart></QuizStart>},
               {path:'/statics',element:<Statics></Statics>},
               {path:'/blog',element:<Blog></Blog>},
               {path:'/contact',element:<Contact></Contact>}
             ]
      },
      
      {path:'/*', element: <h2 className='text-4xl text-center flex justify-center items-center h-100'> Erorr , <br /> wrong path trying . 404 not found</h2>}
   ])
  return (
    <div>
     

     <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
