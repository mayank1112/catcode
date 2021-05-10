import Enzyme, { shallow } from 'enzyme';
import CatGrid from './CatGrid';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<CatGrid> component should match snapshot', () => {
    const component = shallow(<CatGrid />);
    expect(toJson(component)).toMatchSnapshot();
});
