import Header from '../../components/header/header';
import { useState } from 'react';
import { useAppSelector } from '../../store';

export default function AddReview(): JSX.Element {
  const films = useAppSelector((state) => state.films);
  const [formData, setFormData] = useState('');
  const [film] = films;
  const { name, posterImage, previewImage } = film;
  const handleInputChange: React.ChangeEventHandler<HTMLTextAreaElement> = (
    evt
  ): void => {
    setFormData(evt.target.value);
  };

  return (
    <div>
      <section className="film-card film-card--full">
        <div className="film-card__header">
          <div className="film-card__bg">
            <img src={previewImage} alt={name} />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__poster film-card__poster--small">
            <img src={posterImage} alt={name} width="218" height="327" />
          </div>
        </div>

        <div className="add-review">
          <form action="#" className="add-review__form">
            <div className="rating">
              <div className="rating__stars">
                <input
                  className="rating__input"
                  id="star-10"
                  type="radio"
                  name="rating"
                  value="10"
                />
                <label className="rating__label" htmlFor="star-10">
                  Rating 10
                </label>

                <input
                  className="rating__input"
                  id="star-9"
                  type="radio"
                  name="rating"
                  value="9"
                />
                <label className="rating__label" htmlFor="star-9">
                  Rating 9
                </label>

                <input
                  className="rating__input"
                  id="star-8"
                  type="radio"
                  name="rating"
                  value="8"
                  checked
                />
                <label className="rating__label" htmlFor="star-8">
                  Rating 8
                </label>

                <input
                  className="rating__input"
                  id="star-7"
                  type="radio"
                  name="rating"
                  value="7"
                />
                <label className="rating__label" htmlFor="star-7">
                  Rating 7
                </label>

                <input
                  className="rating__input"
                  id="star-6"
                  type="radio"
                  name="rating"
                  value="6"
                />
                <label className="rating__label" htmlFor="star-6">
                  Rating 6
                </label>

                <input
                  className="rating__input"
                  id="star-5"
                  type="radio"
                  name="rating"
                  value="5"
                />
                <label className="rating__label" htmlFor="star-5">
                  Rating 5
                </label>

                <input
                  className="rating__input"
                  id="star-4"
                  type="radio"
                  name="rating"
                  value="4"
                />
                <label className="rating__label" htmlFor="star-4">
                  Rating 4
                </label>

                <input
                  className="rating__input"
                  id="star-3"
                  type="radio"
                  name="rating"
                  value="3"
                />
                <label className="rating__label" htmlFor="star-3">
                  Rating 3
                </label>

                <input
                  className="rating__input"
                  id="star-2"
                  type="radio"
                  name="rating"
                  value="2"
                />
                <label className="rating__label" htmlFor="star-2">
                  Rating 2
                </label>

                <input
                  className="rating__input"
                  id="star-1"
                  type="radio"
                  name="rating"
                  value="1"
                />
                <label className="rating__label" htmlFor="star-1">
                  Rating 1
                </label>
              </div>
            </div>

            <div className="add-review__text">
              <textarea
                className="add-review__textarea"
                name="review-text"
                id="review-text"
                placeholder="Review text"
                onChange={handleInputChange}
                value={formData}
              />
              <div className="add-review__submit">
                <button className="add-review__btn" type="submit">
                  Posnpmt
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
