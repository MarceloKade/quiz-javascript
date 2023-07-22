'use client'
import { useQuizLogic } from '@/components/quiz/QuizLogic';
import * as Q from '@/components/quiz/style';
import { QuizProps } from '@/components/quiz/type';

export default function QuizPage({ params }: QuizProps) {
    const {
        handleNextQuestion,
        handleOptionClick,
        handleRestart,
        selectedCategory,
        currentQuestionId,
        isCorrect,
        isWrong,
        answered,
        textStyle,
        hoverDisabled,
        score,
        scoreMessage,
        selectedOption,
        timeRemaining,
        showTimeRemaining,
        timeIsUp,
        showScorePoints
    } = useQuizLogic({ params });

    return (
        <>
            {selectedCategory && (
                <>
                    {showTimeRemaining && (
                        <Q.TimeExpired>
                            {answered || timeRemaining === 0
                                ? "Tempo esgotado."
                                : `${timeRemaining}`}
                        </Q.TimeExpired>
                    )}
                    {isCorrect && <Q.isCorrect>Parabéns! Você acertou!</Q.isCorrect>}
                    {isWrong && <Q.isWrong>Ops! Você errou!</Q.isWrong>}
                    <Q.ScoreContainer>
                        <Q.ScoreTotal>{score}</Q.ScoreTotal>
                        <Q.ScorePoints
                            isAnsweredCorrectly={isCorrect}
                            isAnsweredWrong={isWrong}
                            timeIsUp={timeIsUp}
                            opacity={showScorePoints ? 1 : 0} // Defina a opacidade com base no estado showScorePoints
                        >
                            {scoreMessage || (timeIsUp && "-5")}
                        </Q.ScorePoints>
                    </Q.ScoreContainer>

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
                                        isAnsweredCorrectly={isCorrect && question.correct === "a"}
                                        isAnsweredWrong={isWrong && selectedOption === "a"}
                                    >
                                        <Q.Option>a</Q.Option>
                                        <Q.OptionItem>{question.option.a}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('b', question.correct)}
                                        isDisabled={hoverDisabled}
                                        isAnsweredCorrectly={isCorrect && question.correct === "b"}
                                        isAnsweredWrong={isWrong && selectedOption === "b"}
                                    >
                                        <Q.Option>b</Q.Option>
                                        <Q.OptionItem>{question.option.b}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('c', question.correct)}
                                        isDisabled={hoverDisabled}
                                        isAnsweredCorrectly={isCorrect && question.correct === "c"}
                                        isAnsweredWrong={isWrong && selectedOption === "c"}
                                    >
                                        <Q.Option>c</Q.Option>
                                        <Q.OptionItem>{question.option.c}</Q.OptionItem>
                                    </Q.OptionContainer>
                                    <Q.OptionContainer
                                        onClick={() => handleOptionClick('d', question.correct)}
                                        isDisabled={hoverDisabled}
                                        isAnsweredCorrectly={isCorrect && question.correct === "d"}
                                        isAnsweredWrong={isWrong && selectedOption === "d"}
                                    >
                                        <Q.Option>d</Q.Option>
                                        <Q.OptionItem>{question.option.d}</Q.OptionItem>
                                    </Q.OptionContainer>
                                </Q.OptionList>
                            </div>
                        ))}
                    </Q.Container>
                    {currentQuestionId === selectedCategory.length ? (
                        answered && score >= 50 ? (
                            <Q.Index title="Categorias" href="/">
                                <Q.IndexIconOne></Q.IndexIconOne>
                                <Q.IndexIconTwo></Q.IndexIconTwo>
                            </Q.Index>
                        ) : answered && score < 50 ? (
                            <Q.Restart title="Reiniciar" onClick={handleRestart}><Q.RestartIconOne></Q.RestartIconOne><Q.RestartIconTwo></Q.RestartIconTwo></Q.Restart>
                        ) : null
                    ) : (
                        answered && (
                            <Q.NextQuestionContainer title="Próxima pergunta" onClick={handleNextQuestion}>
                                <Q.NextIconOne></Q.NextIconOne>
                                <Q.NextIconTwo></Q.NextIconTwo>
                            </Q.NextQuestionContainer>
                        )
                    )}
                </>
            )}
        </>
    );
}