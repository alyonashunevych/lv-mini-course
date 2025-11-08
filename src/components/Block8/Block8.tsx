import styles from './Block8.module.scss';

export const Block8 = () => {
  return (
    <section className={styles.block8} id="prices">
      <p className={styles.title}>
        Отримай лекцію і PDF-гайд для роботи з клієнтами із залежністю за ціною
        599 грн
      </p>

      <p className={styles.text}>
        Це може стати твоєю точкою професійної опори
      </p>

      <a href="https://lilaskandanatkh.sendpulse.online/mini-course">
        <button>Придбати</button>
      </a>
    </section>
  );
};
