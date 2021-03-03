import React from 'react';
import { shallow } from 'enzyme';
import App from "./App";
import {beforeEach, describe, test} from "@jest/globals";
import {render} from '@testing-library/react'
import {findByTestAttr} from './testingUtilties/index'


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







describe( 'It should render without errors',() => {

      let component;
        beforeEach( () => {
            component = shallow( <App />)
         } )

    it('should render without errors', () => {

        const wrapper  = findByTestAttr( component, 'app-component' )
        expect(wrapper.length).toBe(1)
    });

    it('should render a title', () => {

        const wrapper = findByTestAttr( component, 'title-component' )
        expect(wrapper.text()).toContain('Welcome')

    })
})





