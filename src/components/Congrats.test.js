import React from 'react'
import Enzyme,{shallow,mount } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Congrats from './Congrats';
Enzyme.configure({ adapter: new Adapter() });

let wrapper = shallow(<Congrats/>);
describe('Congrats components ', () => {
    
    it('should render properly', () => {
        expect(wrapper).toMatchSnapshot();
    });

    it('should render no text if `success` is false', () => {
        const props = {
            success:true
        }
        wrapper = shallow(<Congrats {...props}/>)
        expect(wrapper.find('.success-message').text()).toEqual('congrats')
    });

    
    it('should render  text if `success` is true', () => {
        const props = {
            success:false
        }
        wrapper = shallow(<Congrats {...props}/>)
        expect(wrapper.find('.success-message').text()).toEqual('sorry')
    });

});