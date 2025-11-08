import styles from './Block2.module.scss';

export const Block2 = () => {
  return (
    <section className={styles.block2} id="target">
      <h3>Для кого курс</h3>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для психологів, які стикаються з клієнтами із залежностями, але не
          знають, з чого почати
        </p>
      </div>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для супервізантів, які хочуть навчитися розпізнавати заперечення та
          маніпуляції
        </p>
      </div>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для фахівців, які хочуть структурувати роботу і втримати клієнта в
          ремісії
        </p>
      </div>

      <div className={styles.item_box}>
        <div className={styles.point} />
        <p className={styles.text}>
          Для тих, хто втомився від почуття провини і безсилля в роботі
        </p>
      </div>
    </section>
  );
};
