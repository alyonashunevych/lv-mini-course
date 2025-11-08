import styles from './Block7.module.scss';
import video from '/img/video.svg';
import books from '/img/books.svg';
import money from '/img/money.svg';

export const Block7 = () => {
  return (
    <section className={styles.block7} id="format">
      <h3 className={styles.title}>Формат</h3>

      <div className={styles.items_box}>
        <div className={styles.item}>
          <img src={video} className={styles.icon} alt="video icon" />

          <p className={styles.text}>
            12-хвилинна відеолекція <br/>+ PDF-гайд
          </p>
        </div>

        <div className={styles.item}>
          <img src={books} className={styles.icon} alt="books icon" />

          <p className={styles.text}>Доступ одразу після оплати</p>
        </div>

        <div className={styles.item}>
          <img src={money} className={styles.icon} alt="money icon" />

          <p className={styles.text}>Вартість: 599 грн</p>
        </div>
      </div>
    </section>
  );
};
