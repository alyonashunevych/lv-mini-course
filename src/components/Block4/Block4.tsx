import styles from './Block4.module.scss';

export const Block4 = () => {
  return (
    <section className={styles.block4}>
      <p className={styles.title}>
        Цей курс створений для психологів, які хочуть допомагати — але не хочуть втрачати себе у процесі
      </p>

      <a href="#prices"><button>Придбати</button></a>
    </section>
  );
};
