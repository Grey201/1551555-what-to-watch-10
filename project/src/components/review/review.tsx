import { Fragment } from 'react';
import { useAppSelector } from '../../store';
import { getComments } from '../../store/film-data/selectors';

// //!mocks
// const comments = [
//   {
//     comment:
//       'Anderson&aposs films are too precious for some, but for those of us willing to lose ourselves in them, they&aposre a delight. &quotThe Grand Budapest Hotel&quot is no different, except that he has added a hint of gravitas to the mix, improving therecipe.',
//     date: 'November 18, 2015',
//     id: 34,
//     rating: 8.0,
//     user: {
//       id: 12,
//       name: 'Bill Goodykoontz',
//     },
//   },
//   {
//     comment:
//       'Discerning travellers and Wes Anderson fans will luxuriate in the glorious Mittel-European kitsch of one of the director&aposs funniest and most exquisitely designed films in years.',
//     date: 'November 18, 2015',
//     id: 33,
//     rating: 8.9,
//     user: {
//       id: 22,
//       name: 'Kate Muir',
//     },
//   },
// ];


export default function Review(): JSX.Element {
  const comments = useAppSelector(getComments);
  // const [{ comment, user, date, rating }] = comments;
  console.log(comments);
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
