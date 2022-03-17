import './feed.scss';
import { Link } from 'react-router-dom';
import { useCallback, useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../context/AuthContext';
import { useHttp } from '../../../hooks/http.hook';
import Spinner from '../../Common/Spinner';

export default function Feed() {
  const [posts, setPosts] = useState(null);
  const { isLoggedIn } = useContext(AuthContext);
  const { request, loading } = useHttp();

  const fetchPosts = useCallback(async () => {
    try {
      const result = await request('/api/posts', 'GET', null);

      setPosts(result);
    } catch (e) {}
  }, [request]);

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  return (
    <>
      {loading && <Spinner />}
      <div className="d-flex align-items-start">
        <h2 className="feed-title">Feed</h2>
        {isLoggedIn && (
          <Link
            className="btn btn-outline-primary ms-2"
            to="/feed/new-post"
            role="button"
          >
            +
          </Link>
        )}
      </div>
      {posts?.map(({ _id, email, content }) => {
        return (
          <div
            className="d-flex align-items-start text-muted pt-3 border-top w-100"
            key={_id}
            bis_skin_checked="1"
          >
            <div className="feed-avatar me-2 mb-3 rounded bg-info bg-gradient d-flex justify-content-center align-items-center flex-shrink-0">
              <strong className="text-white fs-4">{email.slice(0, 2)}</strong>
            </div>

            <div className="pb-3 mb-0 small lh-sm ">
              <strong className="d-block text-gray-dark">{email}</strong>
              <p className="pt-1 mb-0">{content}</p>
            </div>
          </div>
        );
      })}
    </>
  );
}
