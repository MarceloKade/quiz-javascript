'use client'
'use client'
import { useQuizLogic } from '@/components/quiz/QuizLogic';
import { QuizProps } from '@/components/quiz/type';
import React from 'react';

const QuizPage: React.FC<QuizProps> = ({ params }) => {
    const {
        selectedCategory,
        currentQuestionId,
        isCorrect,
        isWrong,
        answered,
        handleNextQuestion,
        handleOptionClick,
    } = useQuizLogic({ params });

    return (
        <div>
            {selectedCategory ? (
                <>
                    <ul>
                        {selectedCategory.map((question) => (
                            <li key={question.id} style={{ display: question.id === currentQuestionId ? 'block' : 'none' }}>
                                <div>
                                    <p>{question.id}</p> <p>{question.question}</p>
                                </div>
                                <ul>
                                    <li onClick={() => handleOptionClick('a', question.correct)}>{`a) ${question.option.a}`}</li>
                                    <li onClick={() => handleOptionClick('b', question.correct)}>{`b) ${question.option.b}`}</li>
                                    <li onClick={() => handleOptionClick('c', question.correct)}>{`c) ${question.option.c}`}</li>
                                    <li onClick={() => handleOptionClick('d', question.correct)}>{`d) ${question.option.d}`}</li>
                                </ul>
                            </li>
                        ))}
                    </ul>
                    {isCorrect && <p>Parabéns! Você acertou!</p>}
                    {isWrong && <p>Ops! Você errou! Tente novamente.</p>}
                    {answered && (
                        <button onClick={handleNextQuestion}>Next Question</button>
                    )}
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </div>
    );
};

export default QuizPage;
