import Enzyme, { shallow } from 'enzyme';
import CatImage from './CatImage';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<CatImage> component should match snapshot', () => {
    const component = shallow(<CatImage />);
    expect(toJson(component)).toMatchSnapshot();
});
