'use client'
import { useQuizLogic } from '@/app/components/quiz/QuizLogic';
import * as Q from '@/app/components/quiz/style';
import { QuizProps } from '@/app/components/quiz/type';

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
                                    {Object.entries(question.option).map(([optionKey, optionText]) => (
                                        <Q.OptionContainer
                                            key={optionKey}
                                            onClick={() => handleOptionClick(optionKey, question.correct)}
                                            isDisabled={hoverDisabled}
                                            isAnsweredCorrectly={isCorrect && question.correct === optionKey}
                                            isAnsweredWrong={isWrong && selectedOption === optionKey}
                                        >
                                            <Q.Option>{optionKey}</Q.Option>
                                            <Q.OptionItem>{optionText}</Q.OptionItem>
                                        </Q.OptionContainer>
                                    ))}
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