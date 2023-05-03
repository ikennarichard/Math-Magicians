import renderer from 'react-test-renderer';
import DisplayQuote from '../DisplayQuote';

it('renders quote correctly', () => {
  const tree = renderer.create(
    <DisplayQuote />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
