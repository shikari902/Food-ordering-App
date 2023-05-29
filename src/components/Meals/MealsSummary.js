import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Yummy Food Delivered to You</h2>
      <p>
        Pick your favourite meal from our extensive menu of options, then experience 
        delicious lunch or dinner at home.
      </p>
      <p>
        <i>All of our dishes are prepared by skilled chefs using top-notch ingredients 
        at the perfect time!</i>
      </p>
    </section>
  );
};

export default MealsSummary;
