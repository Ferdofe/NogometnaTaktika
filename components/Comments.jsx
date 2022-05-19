import React, { useState, useEffect } from 'react';
import moment from 'moment';
import parse from 'html-react-parser';
import {getComments} from '../services';
const Comments = ({slug}) => {
  const [comments, setComments] = useState([]);
  useEffect(() => {
    getComments(slug)
      .then((result)=> setComments(result))
  
  }, [])
  
  return (
    <>
      {comments.length > 0 && (
        <div className="shadow-lg rounded-lg p-8 pb-12 text-custom-text mb-8 bg-custom-fg">
          <h3 className="text-xl text-custom-text mb-8 font-semibold border-b pb-4">
            {comments.length}
            {" "}
            Komentara
          </h3>
          {comments.map((comment)=>(
            <div key={comment.createdAt} className="border-b, border-gray-100 mb-4 pb-4">
              <p className="mb-4">
                <span className="font-semibold">{comment.name}</span>
                {" "}
                on
                {" "}
                {moment(comment.createdAt).format("DD. MM. YYYY")}
              </p>
              <p className="whitespace-pre-line text-custom-text w-full">{parse(comment.comment)}</p>
            </div>
          ))}
        </div>
      )
      }
    </>
  )
}

export default Comments