// import './';

import { useContext } from 'react';
import { AuthContext } from '../../../context/AuthContext';

export default function NewFeed() {
  const { email } = useContext(AuthContext);
  return (
    <div className="container ">
      <h4 className="mb-3">New topic</h4>
      <form className="">
        <div className="col-4 mb-4" bis_skin_checked="1">
          <label for="email" className="form-label">
            Email <span className="text-muted"></span>
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            value={email}
            disabled
          />
        </div>

        <div className="" bis_skin_checked="1">
          <label for="address" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            placeholder="Write you genius thoughts here..."
            required
            rows={10}
          />
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Publish topic
        </button>
      </form>
    </div>
  );
}
