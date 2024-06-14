import TransactionItem from "../TransactionItem/TransactionItem";
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.header}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => {
          return (
            <tr className={css.column} key={item.id}>
              <TransactionItem item={item} />
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
