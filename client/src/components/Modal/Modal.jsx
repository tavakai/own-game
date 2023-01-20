/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

function Modal({ id, data, category }) {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();
  const changeHandler = (e) => {
    setInput(e.target.value);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    const result = input.toLocaleLowerCase();
    const answer = data.answer.toLocaleLowerCase();

    if(answer === result) {
      console.log(true);
    } 
    return setInput('');
  };
  return (
    <div className="modal fade" id={`modal-${id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              Вопрос категории
              {' '}
              {category}
            </h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
          </div>
          <div className="modal-body">
            <form onSubmit={(e) => submitHandler(e)}>
              <div className="mb-3">
                <p style={{ lineHeight: '1.5', fontSize: '26px' }}>{data?.question}</p>
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Ваш ответ:</label>
                <input type="text" value={input} className="form-control" id="message-text" onChange={(e) => changeHandler(e)} />
              </div>
              <button id="btn-close" type="submit" className="btn btn-primary">Ответить</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
