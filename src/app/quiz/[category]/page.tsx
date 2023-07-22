'use client'
import { useQuizLogic } from '@/components/quiz/QuizLogic';
import * as Q from '@/components/quiz/style';
import { QuizProps } from '@/components/quiz/type';

export default function QuizPage({ params }: QuizProps) {
    const {
        selectedCategory,
        currentQuestionId,
        isCorrect,
        isWrong,
        answered,
        handleNextQuestion,
        handleOptionClick,
        textStyle,
        hoverDisabled,
    } = useQuizLogic({ params });

    return (
        <>
            {selectedCategory ? (
                <>
                    {isCorrect && <Q.isCorrect>Parabéns! Você acertou!</Q.isCorrect>}
                    {isWrong && <Q.isWrong>Ops! Você errou!</Q.isWrong>}
                    <Q.Container style={textStyle}>
                        {selectedCategory.map((question) => (
                            <div key={question.id} style={{ display: question.id === currentQuestionId ? 'block' : 'none' }}>
                                <Q.QuestionContainer>
                                    <Q.QuestionText>{`${question.id}. ${question.question}`}</Q.QuestionText>
                                </Q.QuestionContainer>
                                <Q.OptionList>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick("a", question.correct)}
                                        isDisabled={hoverDisabled}
                                    >
                                        <Q.Option>a</Q.Option>
                                        <Q.OptionItem>{question.option.a}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('b', question.correct)}
                                        isDisabled={hoverDisabled}>
                                        <Q.Option>b</Q.Option>
                                        <Q.OptionItem>{question.option.b}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('c', question.correct)}
                                        isDisabled={hoverDisabled}>
                                        <Q.Option>c</Q.Option>
                                        <Q.OptionItem>{question.option.c}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('d', question.correct)}
                                        isDisabled={hoverDisabled}>
                                        <Q.Option>d</Q.Option>
                                        <Q.OptionItem>{question.option.d}</Q.OptionItem>
                                    </Q.OptionContainer>
                                </Q.OptionList>
                            </div>
                        ))}
                    </Q.Container>
                    {answered && (
                        <Q.NextQuestion onClick={handleNextQuestion}><Q.div1><Q.div2></Q.div2><Q.div3></Q.div3></Q.div1></Q.NextQuestion>
                    )}
                </>
            ) : (
                <p>Carregando...</p>
            )}
        </>
    );
};