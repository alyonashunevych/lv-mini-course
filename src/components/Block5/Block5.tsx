import styles from './Block5.module.scss';
import lv_background from '/img/lv.webp';
import img from '/img/bonus.webp';

export const Block5 = () => {
  return (
    <section className={styles.block5} id="bonus">
      <div className={styles.text_box}>
        <h3>Бонус</h3>
        <p className={styles.name}>
          PDF-гайд: 5 фатальних помилок і як їх уникнути
        </p>

        <p className={styles.text}>
          — короткі алгоритми дій для кожної ситуації <br/>+ чек-лист для
          саморефлексії терапевта
        </p>
      </div>

      <img src={img} className={styles.img} alt="Lila Vysotska" />

      <img
        src={lv_background}
        className={styles.lv_background}
        alt="LV background"
      />
    </section>
  );
};
