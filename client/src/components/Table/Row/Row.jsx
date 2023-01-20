import React from 'react';
import s from './Row.module.css';
import Column from '../Column/Column';

function Row({ row }) {
  return (
    <div className={s.row}>
      <div className={s.firstColumn}>
        <span className={s.category}>{row.category}</span>
      </div>
      {
        row?.data?.map((column) => <Column key={column.id} column={column} category={row.category} />)
      }
    </div>
  );
}

export default Row;
