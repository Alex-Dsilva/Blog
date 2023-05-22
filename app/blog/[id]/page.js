"use client"
import React, { useEffect, useState } from 'react';
import { PostDetail, Categories, PostWidget, Author, Comments, CommentsForm, Loader, Header } from '../../components/index';
import { getPosts, getPostDetails, submitComment } from '../../services/index';

const PostDetails = ({params}) => {
  
  const [post, setPost] =useState([])

  const [comments, setComments] = useState([]);

  
  const getData= async ()=>{
    const posts = await getPostDetails(params.id);
    setPost(posts);
    console.log(posts)
    setComments(posts.comments)
  }

  useEffect(()=>{
    getData()
  }, [])

  const handleSubmitComment = async ( commentObj) => {
    console.log(commentObj, "check")
    try {
      const updatedPost = await submitComment(post, post.id, {id:post.comments.length+1, ...commentObj});
      setComments(updatedPost.comments);
    } catch (error) {
      alert("Error While Submitting Comment"+error)
    }
  };

  return (
    <>
    <Header/>
      <div className=" mx-auto px-10 mb-8">
      
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-12">
          <div className="col-span-1 lg:col-span-8">
            <PostDetail post={post} />
            <div className='lg:flex lg:gap-2' >
              <CommentsForm handleSubmitComment={handleSubmitComment} />
              <Comments comments={comments} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default PostDetails;

