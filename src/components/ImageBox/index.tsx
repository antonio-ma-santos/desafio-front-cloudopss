import styles from "./styles.module.scss";

interface imgBoxProps {
  src: string;
  name:  string;
}

export function ImageBox({ src, name }: imgBoxProps) {
  return(
    <div className={styles.container}>
      <img src={src} alt={name} />
    </div>
  );
}