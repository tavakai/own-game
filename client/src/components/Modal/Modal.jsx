/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';

function Modal() {
  return (
    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">Новое сообщение</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Закрыть" />
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <p>Здесь вопрос</p>
              </div>
              <div className="mb-3">
                <label htmlFor="message-text" className="col-form-label">Ваш ответ:</label>
                <textarea className="form-control" id="message-text" />
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>
            <button type="button" className="btn btn-primary">Ответить</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
