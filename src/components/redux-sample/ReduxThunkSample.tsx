import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux';
import { postActions, ReducersType } from '../redux';

export const ReduxThunkSample = () => {
  const dispatch = useDispatch();
  const { getAllPosts } = bindActionCreators(postActions, dispatch);
  const { loading, error, posts } = useSelector((state: ReducersType) => state.post)

  console.log(loading, error, posts);
  return (
    <div>
      <button onClick={() => getAllPosts()} >Load Posts</button>
      {
        loading && <h3>Loading posts...</h3>
      }
      {
        error && <h3>{`Error while loading post: ${error}`}</h3>
      }
      <ul>
        {
          posts.map(post => {
            return (
              <li key={post.id}>{post.title}</li>
            )
          })
        }
      </ul>
    </div>
  )
}
