import classes from "./load-more-btn.module.css";

export default function LoadMoreBtn({ onLoad }) {
  return (
    <div className={classes["btn-wrapper"]}>
      <button className={classes["load-btn"]} onClick={onLoad}>
        Load More
      </button>
    </div>
  );
}
