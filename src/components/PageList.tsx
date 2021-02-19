import { useEffect, useState } from 'react'

import { Post } from '../domain'

import PostItem from './PostItem'

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([])
  const [newPost, setNewPost] = useState<string>('')

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments').then(response => {
      response.json().then(data => {
        setPosts(data)
      })
    })
  }, [])


  return (
    <>
      <input onChange={e => setNewPost(e.target.value)} value={newPost} />

      <ul>
        {posts.map(post => <PostItem key={post.id} post={post} />)}
      </ul>
    </>
  )
}
