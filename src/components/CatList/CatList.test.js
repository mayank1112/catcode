import Enzyme, { shallow } from 'enzyme';
import CatList from './CatList';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

it('<CatList> component should match snapshot', () => {
    const component = shallow(<CatList />);
    expect(toJson(component)).toMatchSnapshot();
});
