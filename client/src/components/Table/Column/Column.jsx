import React from 'react';
import s from './Column.module.css';
import Modal from '../../Modal/Modal';

function Column({ column, category }) {
  return (
    <>
      <button type="button" className={`${s.point} btn`} data-bs-toggle="modal" data-bs-target={`#modal-${column.id}`} data-bs-whatever={`Категория ${category}`}>
        {column?.point}
      </button>
      <Modal id={column.id} data={column} category={category} />
    </>
  );
}

export default Column;
