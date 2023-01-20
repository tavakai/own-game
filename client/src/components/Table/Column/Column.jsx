import React from 'react';
import s from './Column.module.css';

function Column({ column, category }) {
  const handleClick = (e) => {
    const exampleModal = document.getElementById('exampleModal');
    // Кнопка, которая активировала модальное окно
    const button = e.relatedTarget;
    // Извлекает информацию из атрибутов data-bs-*
    const recipient = button.getAttribute('data-bs-whatever');
    // При необходимости вы можете инициировать запрос AJAX здесь,
    // а затем выполнить обновление в обратном вызове.
    //
    // Обновляет содержимое модального окна.
    const modalTitle = exampleModal.querySelector('.modal-title');
    const modalBodyInput = exampleModal.querySelector('.modal-body input');

    modalTitle.textContent = `New message to ${recipient}`;
    modalBodyInput.value = recipient;
  };
  return (
    <button onClick={handleClick} type="button" className={s.point} data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever={`Категория ${category}`}>
      {column?.point}
    </button>
  );
}

export default Column;
