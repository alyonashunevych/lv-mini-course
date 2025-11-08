import styles from './Block3.module.scss';

export const Block3 = () => {
  return (
    <section className={styles.block3}>
      <h3>У мінікурсі ти дізнаєшся:</h3>
      <div className={styles.items_box}>
        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>I</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Чому не працює «сила волі» — <br/>і як працює мозок залежного
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>II</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Як не ламати заперечення, <br/>а використовувати його у терапії
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>III</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text} >
            Як створити чітку структуру <br/>і план консультування
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>IV</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Як не потрапити у <br/>співзалежність із клієнтом
          </p>
        </div>

        <div className={styles.item}>
          <div className={styles.item_num_box}>
            <div className={styles.line_mobile} />
            <p className={styles.number}>V</p>
            <div className={styles.line} />
          </div>
          <p className={styles.item_text}>
            Як розпізнати маніпуляції <br/>і зберегти професійні межі
          </p>
        </div>
      </div>
    </section>
  );
};
