import renderer from 'react-test-renderer';
import Screen from '../Screen';

const obj = { total: null, next: '5', operation: null };

it('renders homepage correctly', () => {
  const tree = renderer.create(
    <Screen value={obj.next} />,
  ).toJSON();
  expect(tree).toMatchSnapshot();
});