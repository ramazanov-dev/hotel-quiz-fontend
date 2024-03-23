import { FC, useState } from "react";
import styles from "./index.module.css";
import { useNavigate } from "react-router-dom";
import { MainButton } from "../../components/MainButton";
import { PageLayout } from "../../Layouts/PageLayout";
import { QuizContainer } from "../../Layouts/QuizContaier";
export const PreparationPage: FC = () => {

  const navigate = useNavigate();
  const [step, setStep] = useState(0)

  const controlQuestions = [
    { question: "Вы уже проходили опрос?" },
    { question: "Хотите пройти еще раз?" }
  ]

  const clickHandler = (_choice: boolean) => {
    setStep(step + 1)


    if (!step && !_choice) {
      return navigate("/quiz")
    }
    else if (step === 1 && !_choice ) {
      navigate("/short-end")
    }
    else if (step === 1 && _choice ) {
      navigate("/quiz")
    }
  };


  return <PageLayout >
    <QuizContainer>
      <div className={styles.container}>
        <h3 className={styles.title}>{controlQuestions[step].question}</h3>
      </div>
      <div className={styles.footer}>
        <MainButton title="Да" onClick={() => {
          clickHandler(true)
        }} />

        <MainButton title="Нет" onClick={() => {
          clickHandler(false)
        }} />
      </div>
    </QuizContainer>
  </PageLayout>;

};
