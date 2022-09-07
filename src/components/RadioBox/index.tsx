import styles from "./styles.module.scss";

interface RadioProps {
  name: string;
  label: string;
}

export function RadioBox({ name, label }: RadioProps) {
  return (
    <div className={styles.container}>
      <input type="radio" name={name} id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  ); 
}