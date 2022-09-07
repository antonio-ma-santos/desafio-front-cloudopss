import styles from "./styles.module.scss";

interface ButtonProps {
  title: string;
}

export function Button({ title }: ButtonProps) {
  return (
    <button
      type="button"
      className={styles.button}
      onClick={() => {}}
    >
      {title}
    </button>
  );
}