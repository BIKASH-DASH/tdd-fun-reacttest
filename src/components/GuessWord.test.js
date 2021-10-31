import React from 'react'
import Enzyme,{shallow} from 'enzyme'
import GuessWord from './GuessWord'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
Enzyme.configure({ adapter: new Adapter() });
const defaultProps = {
    guessWord:[
        {guessWord:'train', letterMatchCount :3}
    ]
}

const setUp = (props={})=>{
    const setupProps = {...defaultProps,...props};
    return shallow(<GuessWord {...setupProps}/>)

}

describe('Guess word components', () => {
    
    it('should render properly', () => {
        expect(setUp).toMatchSnapshot();
    });

    
});