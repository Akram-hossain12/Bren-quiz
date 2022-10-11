import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Start from '../start/Start';

const QuizStart = ({params}) => {
    const reciveData = useLoaderData();
    const {questions}=reciveData.data;
    // console.log(questions)
    return (
        <div>
           {
            questions.map(q => <Start
            key={q.id}
             q ={q}
            ></Start>)
           }
        </div>
    );
};

export default QuizStart;