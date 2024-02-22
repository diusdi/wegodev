import PropTypes from "prop-types";
import classNames from "classnames";
import minusIcon from "../../assets/minus-icon.svg";
import plusIcon from "../../assets/plus-icon.svg";
import styles from "./Todos.module.css";

const Todos = ({todos, onSubstraction, onAddition }) => {
  return (
    <div className={styles.todos}>
      {todos.map((todo, index, arr) => (
        <div
          key={index}
          className={classNames(styles.todo, {
            [styles.todoDivider]: !(arr.length === index + 1),
          })}
        >
          {todo.title}
          <div>
            <div className={styles.todoIconWrapper}>
              <div className={styles.todoCount}>{todo.count}</div>
              <button className={styles.todoActionButton} onClick={() => onSubstraction(index)}>
                <img src={minusIcon} alt="minus icon" />
              </button>
              <button className={styles.todoActionButton} onClick={() => onAddition(index)}>
                <img src={plusIcon} alt="plus icon" />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

Todos.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      count: PropTypes.number,
    })
  ),
  onSubstraction: PropTypes.func,
  onAddition: PropTypes.func,
};

export default Todos;
