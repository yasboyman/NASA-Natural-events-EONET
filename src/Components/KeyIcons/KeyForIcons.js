import React, {Component} from 'react';
import './index.css';
import {WiVolcano} from 'react-icons/wi';
import {ImFire} from 'react-icons/im';


class KeyForIcons extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        const {header, desc} = this.props;

        // header={'Posts'}
        // desc={'Click the button to render posts'}  />}

        return(
                <div className={'key-for-icons'} data-testid={'keyComponent'}>

                    <header className={'xxxx'}>

                        <h4 data-testid={'keys-title'}>Keys</h4>

                    </header>

                    <h5 className={'key-fire'}>
                        <ImFire
                            data-testid={'wildfire-icon'}
                            className={'wildfire-icon-key'} /> Wildfire</h5>
                    <h5 className={'key-volcano'}  >
                        <WiVolcano
                            className={'volcano-icon-volcano-key'}
                            data-testid={'volcano-icon'}
                        />  Volcano </h5>

                    <h6 className={'key-volcano'}
                        data-testid={'header-prop'}
                    >{header}</h6>

                    <h6 className={'key-volcano'}
                        data-testid={'des-prop'}
                    >{desc}</h6>


            </div>
        )
    }


};


export default  KeyForIcons