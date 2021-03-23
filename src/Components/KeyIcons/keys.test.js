import React from "react";
import ReactDOM from 'react-dom'
import KeyForIcons from "./KeyForIcons";
import {render, screen, cleanup, getByTestId} from "@testing-library/react";
import renderer from 'react-test-renderer'


describe("Key Component", () => {

afterEach(cleanup)

    it("Renders KeyForIcons without crashing", () => {
   const {getByTestId} = render( <KeyForIcons  />);

       expect(getByTestId('keys-title')).toBeInTheDocument()

    });

    it('should render the Volcano Icon', () => {

       const {getByTestId}  = render(<KeyForIcons/>)
       expect(getByTestId('volcano-icon')).toBeInTheDocument()
    })

    it( 'It matches Snapshot',() => {
        const tree = renderer
            .create(<KeyForIcons/>).toJSON();
        expect(tree).toMatchSnapshot();

    })

    it('Key should have props for DESC', () => {
        const {getByTestId} = render( <KeyForIcons desc={'test desc'}/>)
        expect(getByTestId("des-prop").textContent).toBe('test desc')

    })


    it("Key should have props for HEADER", () => {
        const { getByTestId } = render( <KeyForIcons header="click me please" /> );
        expect(getByTestId("header-prop").textContent).toBe("click me please");
    });
});





// it('should render without crashing', () => {
//     const div = document.createElement('div')
//     ReactDOM.render( <KeyForIcons > </KeyForIcons>, div)
//
// })





    // describe('Props Passed down', () => {
    //
    //
    //     // it('should render props, otherwise null', () => {
    //     //     const wrapper = shallow(<KeyForIcons header={{}} />)
    //     //     const paragraph = findByTestAttr(wrapper, 'header-prop');
    //     //     expect(paragraph.length).toBe(0)
    //     // })
    //
    //     it('This test should fail, props are being passed!', () => {
    //
    //         const props = {
    //             header: 'Test Header',
    //        }
    //         const wrapper = shallow( <KeyForIcons items={props.header} />)
    //
    //         const paragraph = wrapper.find( `[data-test='${'header-prop'}']`)
    //
    //         expect(paragraph).toContain('Test Header')
    //
    //     })



       // it('should render if props are present', () => {
       //      const props = {
       //          header: 'Test Header',
       //          desc: 'Test Desc'
       //      }
       //      const wrapper = shallow( <KeyForIcons  pro={props}  />)
       //
       //      const paragraph = findByTestAttr(wrapper, 'header-prop')
       //      const desc = findByTestAttr( wrapper , 'des-prop');
       //
       //      console.log(wrapper.debug())
       //
       //
       //      expect(paragraph.length).toBe(1)
       //      expect(desc.length).toBe(1)
       //  })










//
//
//
//
// it('should render Props correcntly', () => {
//
//    const {getByTestId} = render( <KeyForIcons  header={'whatever'} > </KeyForIcons>)
//     expect(getByTestId('header-prop')).toHaveTextContent('whatever')
//
// })





 //
 // it('renders without crashing', () => {
 //     const component = shallow( <KeyForIcons /> )
 //     const wrapper = findByTestAttr(component, 'key-for-icons')
 //
 //     expect(wrapper.length).toBe(1)
 //
 //
 // });

// const setUp = (props={}) => {
//     const component = shallow( <KeyForIcons {...props} />);
//
//     return component
//
// };
//
// describe ('Key Icons Component', () => {
//
//     describe('Key HAVE props', () => {
//         let wrapper;
//         beforeEach( () => {
//             const props = {
//                 header: 'Test Header',
//                 desc: 'Test Desc'
//             };
//
//             wrapper = setUp(props)
//         });
//
//                 it('should render without errors', () => {
//                     const component = findByTestAttr( wrapper , 'keyComponent');
//
//                     expect(component.length).toBe(1)
//                 })
//
//                 it('should render header h6', () => {
//                     const header = findByTestAttr( wrapper , 'header-prop');
//
//                     expect(header.length).toBe(1)
//                 })
//                 it('should render desc h6', () => {
//                     const desc = findByTestAttr( wrapper , 'des-prop');
//
//                     expect(desc.length).toBe(1)
//                 })
//
//
//
//     });
//
//
//     describe('Key DOES NOT props', () => {
//         let wrapper;
//         beforeEach( () => {
//
//             wrapper = setUp({});
//         });
//
//         it('should NOT render', () => {
//             const component = findByTestAttr(wrapper, 'header-prop');
//
//             expect(component.length).toBe(0);
//
//         });
//
//
//     });
//
//
//
// });
//
// describe('Button Testing', () => {
//     it('should', () => {
//         const wrapper =  shallow( <KeyForIcons />);
//
//         const component = findByTestAttr(wrapper, 'key-for-icons-prop');
//         expect(component.querySelector("ImFire").length).toBe(0);
//
//     })
//
// })




//TEST THIS//
// describe('Icon rendering ', () => {
//     it('Should render two icons for keys', () => {
//         const wrapper =  shallow( <KeyForIcons />);
//         const icon = wrapper.find('key-fire');
//         expect(icon.length).toBe(1)
//
//     })
//
// })

