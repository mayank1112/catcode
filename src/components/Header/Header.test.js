import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<Header> component should match snapshot', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
});
