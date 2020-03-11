import React from 'react';
import './Home.scss';
import Nami from '../../../assets/images/nami.png'
import Ashe from '../../../assets/images/ashe.png'


class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center head">
                        <div className="title text-center">
                            <span>Track your stats, anytime, anywhere.</span>   
                        </div>
                        <img src={Nami} alt="" className="champion-nami"></img>
                        <img src={Ashe} alt="" className="champion-ashe"></img>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 col-sm-12 col-xs-12 d-flex align-items-center input-col">
                        <div className="above-input text-center">
                            <span>Begin now :</span>   
                        </div>
                        <div className="d-flex align-items-center h-100 input-wrapper">
                            <input type="text" id="profile-selector" placeholder="Enter a summoner name"/>
                            <button id="submit"><svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fad" data-icon="search" className="svg-inline--fa fa-search fa-w-16" role="img" viewBox="0 0 512 512"><g className="fa-group"><path className="fa-secondary" fill="currentColor" d="M208 80a128 128 0 1 1-90.51 37.49A127.15 127.15 0 0 1 208 80m0-80C93.12 0 0 93.12 0 208s93.12 208 208 208 208-93.12 208-208S322.88 0 208 0z" opacity="0.4"/><path className="fa-primary" fill="currentColor" d="M504.9 476.7L476.6 505a23.9 23.9 0 0 1-33.9 0L343 405.3a24 24 0 0 1-7-17V372l36-36h16.3a24 24 0 0 1 17 7l99.7 99.7a24.11 24.11 0 0 1-.1 34z"/></g></svg></button>   
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
export default Home