import { Fragment } from 'react';
import { useAppSelector } from '../../store';
import { getComments } from '../../store/film-data/selectors';

export default function Review(): JSX.Element {
  const comments = useAppSelector(getComments);
  const commentList = comments.map((comment, index) => (
    <div className="review" key={index}>
      <blockquote className="review__quote">
        <p className="review__text">{comment.comment}</p>
        <footer className="review__details">
          <cite className="review__author">{comment.user.name}</cite>
          <time className="review__date" dateTime="2016-12-24">
            {comment.date}
          </time>
        </footer>
      </blockquote>

      <div className="review__rating">{comment.rating}</div>
    </div>
  ));

  return <Fragment> {commentList} </Fragment>;
}
