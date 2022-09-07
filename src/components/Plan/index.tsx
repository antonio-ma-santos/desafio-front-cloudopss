import styles from "./styles.module.scss";

import { Button } from "../Button";

interface planProps {
  title: string;
  subTitle?: string;
  price: string;
  description: string;
}

export function Plan({ title, price, description, subTitle }: planProps) {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      {subTitle ? <span>{subTitle}</span> : <></>}
      <div>
        <p>R$</p>
        <span>{price}</span>
      </div>
      <p>{description}</p>
      <Button title="Começar agora"/>
    </div>
  );
}