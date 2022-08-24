import {useState, useEffect} from "react";
import styles from "./Timer.module.css";

const Timer = ({name, duration}) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    if (timeLeft === 0 ){
      clearInterval(intervalId);
    }
  },[timeLeft, intervalId]);

  const handleStartClick = () => {
    const id = setInterval(() => {
      setTimeLeft((seconds) => seconds - 1);
    }, 1000);

    setIntervalId(id);
  };

  return (
    <section className={styles.timer}>
      <header className={styles.header}>
        <h2>
          {name} <span className={styles.initialDuration}>({duration}s)</span>
        </h2>
      </header>

      <div className={styles.details}>
        <div className={styles.timeLeft}>
          <span>{timeLeft !== 0 ? timeLeft : "Finalizado!"}</span>
        </div>

        <button className={`${styles.button} ${styles.start}`} onClick={handleStartClick}>Iniciar</button>
      </div>
    </section>
  )
};

export default Timer;