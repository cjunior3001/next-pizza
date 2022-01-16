import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
      <p className={styles.description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto harum
        iste neque magni doloribus expedita optio eveniet quidem exercitationem!
        Nostrum exercitationem quibusdam officiis beatae illum inventore,
        repudiandae laboriosam architecto totam.
      </p>
      <div className={styles.wrapper}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaList;
