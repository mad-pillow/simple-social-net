import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';

export default function NewPost() {
  const { email, token } = useContext(AuthContext);
  const [content, setContent] = useState(null);
  const { request } = useHttp();
  const navigate = useNavigate();

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handlePublish = async () => {
    try {
      await request(
        '/api/posts/publish',
        'POST',
        {
          email,
          content,
        },
        {
          Authorization: `Bearer ${token}`,
        }
      );
      navigate('/');
    } catch (e) {}
  };

  return (
    <div className="container ">
      <h4 className="mb-3">New post</h4>
      <form className="">
        <div className="col-4 mb-4" bis_skin_checked="1">
          <label htmlFor="email" className="form-label">
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
          <label htmlFor="address" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            className="form-control"
            id="content"
            placeholder="Write you genius thoughts here..."
            required
            rows={10}
            onChange={handleContentChange}
          />
        </div>

        <hr className="my-4" />

        <button
          className="w-100 btn btn-primary btn-lg"
          type="button"
          onClick={handlePublish}
        >
          Publish post
        </button>
      </form>
    </div>
  );
}
