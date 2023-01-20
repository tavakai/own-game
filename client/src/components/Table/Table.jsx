import React from 'react';
import dictionary from '../../dict/dict';
// import Modal from '../Modal/Modal';
import Row from './Row/Row';
import s from './Table.module.css';

function Table() {
  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        {
        dictionary.map((row) => <Row key={row.id} row={row} />)
      }
      </div>
    </section>
  );
}

export default Table;
