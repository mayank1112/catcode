import Enzyme, { shallow } from 'enzyme';
import App from './App.js';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<App> component should match snapshot', () => {
    const component = shallow(<App />);
    expect(toJson(component)).toMatchSnapshot();
});
