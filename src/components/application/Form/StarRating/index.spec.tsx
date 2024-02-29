import { fireEvent } from '@testing-library/react';
import { StarRating } from '.';
import { wrapperRender } from 'test/render';

describe('<StarRating />', () => {
  it('should render the correct number of stars', () => {
    const { getAllByTestId } = wrapperRender(<StarRating totalStars={5} />);
    const stars = getAllByTestId(/^star-/);
    expect(stars).toHaveLength(5);
  });

  it('should change the selected stars on click', () => {
    const { getByTestId } = wrapperRender(<StarRating totalStars={5} />);
    const star3 = getByTestId('star-3');
    fireEvent.click(star3);
    expect(star3).toHaveStyle('color: gold');
  });
});