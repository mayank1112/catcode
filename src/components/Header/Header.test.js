import Enzyme, { shallow } from 'enzyme';
import Header from './Header';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<Header> component with no user messages should match snapshot', () => {
    const component = shallow(<Header />);
    expect(toJson(component)).toMatchSnapshot();
});
it('<Header> component with user messages should match snapshot', () => {
    const component = shallow(<Header errorMessage='mockError' successMessage='mockSuccess' />);
    expect(toJson(component)).toMatchSnapshot();
});
