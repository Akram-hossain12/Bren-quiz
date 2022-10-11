import React, { useState } from 'react';
import Option from '../option/Option';

const Start = ({q}) => {

   const {question,options,correctAnswer}= q;


   console.log(options.length)


       const findCorrectAns = options.map(op =>  console.log(op) );
      
     const handelAddToCart = (op) =>{
        const setScore = [];
        if( op === correctAnswer){
             alert('Right answer 1marks');
             const score = setScore.push(correctAnswer);
             const newScore = score+1;
             console.log(newScore)
          
        }
        else{
            alert('wrong answer')
            // console.log(options)
            // console.log(correctAnswer)
        }
      }
     
    return (

        <div className='border p-8 m-20 mt-10 bg-orange-200'>
             <div className='text-2xl'>{question}
               
                {
                   options.map(option => <Option
                    option={option}
                    handelAddToCart={handelAddToCart}
                    ></Option> )
                }
           </div>

           
        </div>
    )
};

export default Start;