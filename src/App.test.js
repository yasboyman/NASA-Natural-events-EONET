import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";
import {beforeEach, describe, test} from "@jest/globals";
import {render} from '@testing-library/react'
import {findByTestAttr} from './testingUtilties/index'



describe( 'Rendering App component',  () => {

    it('Should render the App Component without crashing', () => {
        shallow(<App/>)

    });

    it('Should render the header in App component', () => {
       const wrapper =  shallow(<App/>)
        const header = ( <header className={'header'}>
            <h1 className={'title'}
                data-test={'title-component'} > Welcome to the Wildfire Tracker...</h1>
        </header>)

        expect(wrapper.contains(header)).toEqual(true)

    });

})





















// describe('Counter Testin', () => {
//
//     let wrapper;
//     beforeEach( () => {
//          wrapper = shallow( <App />)
//     } )
//
//     test("render the header in app", () => {
//         expect(wrapper.find('h1').text()).toContain('Welcome to the Wildfire Tracker')
//
//
//     });
//
//     test("render button in app", () => {
//         expect(wrapper.find('#increment-btn').text()).toBe('Increment')
//     });
//
//
//     test("render the initial value of state in a div", () => {
//         expect(wrapper.find('#counter-value').text()).toBe('0');
//     });


    // test("render the click event of INCREMENT button and state counter value ", () => {
    //
    //
    //  wrapper.find('#increment-btn').simulate('click')
    //   expect(wrapper.find('#counter-value').text()).toBe('1')
    //
    // });
    //
    // test("render the click event of DECREMENET button and state counter value ", () => {
    //
    //
    //     wrapper.find('#decrement-btn').simulate('click')
    //     expect(wrapper.find('#counter-value').text()).toBe('-1')
    //
    // });

// });

// describe( 'It should render without errors',() => {
//
//       let component;
//         beforeEach( () => {
//             component = shallow( <App />)
//          } )
//
//     it('should render without errors', () => {
//
//         const wrapper  = findByTestAttr( component, 'app-component' )
//         expect(wrapper.length).toBe(1)
//     });
//
//     it('should render a title', () => {
//
//         const wrapper = findByTestAttr( component, 'title-component' )
//         expect(wrapper.text()).toContain('Welcome')
//
//     })
//
//
//
//
//
//    it('should render a tile', () => {
//
//       const  wrapper = findByTestAttr( component, 'title-component')
//        expect(wrapper.text()).toBe(' Welcome to the Wildfire Tracker...')
//    })











