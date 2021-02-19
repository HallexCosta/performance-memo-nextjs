import { memo } from 'react'
import { Post } from '../domain'

type PostItemProps = {
  post: Post
}

function PostItem ({ post }: PostItemProps) {
  return (
    <li>
      <p><strong>AlbumId: </strong><span>{post.postId}</span></p>
      <p><strong>Id: </strong><span>{post.id}</span></p>
      <p><strong>Name: </strong><span>{post.name}</span></p>
      <p><strong>Email: </strong><span>{post.email}</span></p>
      <p><strong>Body: </strong><span>{post.body}</span></p>
      <br />
      <hr />
    </li>
  )
}

export default memo(PostItem)