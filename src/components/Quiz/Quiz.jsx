import { useLoaderData, useNavigate } from "react-router";
import { useState, useEffect } from "react";

const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

export default function Quiz() {
    const quizData = useLoaderData().data;
    const { title, questions } = quizData;

    const [shuffledQuestions, setShuffledQuestions] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [quizFinished, setQuizFinished] = useState(false);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [answers, setAnswers] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const shuffled = questions.map((question) => ({
            ...question,
            options: shuffleArray(question.options),
        }));
        setShuffledQuestions(shuffleArray(shuffled));
    }, [questions]);

    const nextQuestion = () => {
        if (currentQuestionIndex < shuffledQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setQuizFinished(true);
        }
    };

    const exitQuiz = () => {
        const unansweredQuestions = shuffledQuestions.length - answers.length;
        setIncorrectAnswers(incorrectAnswers + unansweredQuestions);
        setQuizFinished(true);
    };

    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    const answer = currentQuestion?.answer;

    const handleOptionClick = (option) => {
        if (!isAnswered) {
            setSelectedOption(option);
            setIsAnswered(true);
            setAnswers([...answers, option]);

            if (option === answer) {
                setCorrectAnswers(correctAnswers + 1);
            } else {
                setIncorrectAnswers(incorrectAnswers + 1);
            }
        }
    };

    const getOptionClass = (option) => {
        if (!isAnswered) return "";
        if (option === selectedOption && option === answer) return "bg-green-500 text-white";
        if (option === selectedOption && option !== answer) return "bg-red-500 text-white";
        if (option === answer) return "bg-green-500 text-white";
        return "";
    };

    const handleBack = () => {
        navigate(-1);
    };

    const handleRetake = () => {
        window.location.reload(false);
    };

    return (
        <div className="h-[calc(80vh)]">
            <h1 className="text-3xl font-bold text-center mt-5">{title}</h1>
            <div className="h-full flex justify-center items-center ">
                {quizFinished ? (
                    <div className="card bg-gray-100 w-[700px] shadow-2xl">
                        <div className="card-body text-center">
                            <h2 className="text-xl font-semibold">Congratulations!</h2>
                            <p>You have completed the quiz.</p>
                            <p>Your results:</p>
                            <p>Correct Answers: {correctAnswers}</p>
                            <p>Incorrect Answers: {incorrectAnswers}</p>
                            <p>Total Questions: {shuffledQuestions.length}</p>
                            <div className="card-actions justify-center gap-5 mt-5">
                                <button
                                    onClick={handleBack}
                                    className="py-2 px-7 bg-red-500 rounded-md text-base-100"
                                >
                                    Go Back
                                </button>
                                <button
                                    onClick={handleRetake}
                                    className="py-2 px-7 bg-primary rounded-md text-base-100"
                                >
                                    Retake
                                </button>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="card bg-gray-100 w-[700px] shadow-xl">
                        <div className="card-body">
                            <div className="text-right text-sm text-gray-500">
                                {currentQuestionIndex + 1} <span className="font-bold">/ {shuffledQuestions.length}</span>
                            </div>
                            <h2 className="card-title">Q{currentQuestionIndex + 1}. {currentQuestion?.question}</h2>
                            <ul className="grid grid-cols-2 gap-5 my-5">
                                {currentQuestion?.options.map((option, i) => (
                                    <li key={i}>
                                        <button
                                            onClick={() => handleOptionClick(option)}
                                            className={`py-2 px-4 rounded-md text-left w-full bg-slate-50 shadow-md ${getOptionClass(option)}`}
                                        >
                                            <span className="font-semibold">{String.fromCharCode(65 + i)}.</span> {option}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                            <div className="card-actions justify-between">
                                <button
                                    onClick={exitQuiz}
                                    className="py-2 px-7 ml-3 bg-red-500 rounded-md text-base-100"
                                >
                                    Exit
                                </button>
                                {currentQuestionIndex === shuffledQuestions.length - 1 ? (
                                    <button
                                        onClick={nextQuestion}
                                        className="py-2 px-7 bg-primary rounded-md text-base-100"
                                    >
                                        Finish
                                    </button>
                                ) : (
                                    <button
                                        onClick={nextQuestion}
                                        disabled={!isAnswered}
                                        className="py-2 px-7 bg-primary rounded-md text-base-100"
                                    >
                                        Next
                                    </button>
                                )}
                                
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
