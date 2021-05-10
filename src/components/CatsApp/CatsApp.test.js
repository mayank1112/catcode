import Enzyme, { shallow } from 'enzyme';
import CatsApp from './CatsApp';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<CatsApp> component should match snapshot', () => {
    const component = shallow(<CatsApp />);
    expect(toJson(component)).toMatchSnapshot();
});
