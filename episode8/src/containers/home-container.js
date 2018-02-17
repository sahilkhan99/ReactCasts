import React, { Component } from 'react';
import { connect } from 'react-redux';

import { login } from '../actions/auth';
import { fetchRooms } from '../actions/rooms';
import { selectUserName, selectUserRoom } from '../reducers';
import logo from '../logo.png';
import '../App.css';
import RoomComponent from '../components/RoomComponent';
import SlideShow from '../components/SlideShow';
import AboutHotel from '../components/AboutHotel';
import OurRoomComponent from '../components/OurRoomComponent';

class HomeContainer extends Component {

    componentDidMount() {
        const { login, fetchRooms } = this.props;
        login();
        fetchRooms();
    }

    render() {
        const { isFetching, userName, accomodation } = this.props;
        if (isFetching || isFetching === undefined) return <div className="loader" />;

        return (
            <div className="App">
                <div className="container-full">
                    <div className="container w-100">
                        <div className="row">
                            <div className="col-md-6">
                                <div id="redux-inn-logo" className="row">
                                    <div className="col-sm-8 text-right">
                                        <img className="" src={logo} width={250} alt="Redux Hotel" />
                                    </div>
                                    <div className="col-sm-4 text-right">
                                        <span className="text-right">Name: {userName}</span>    
                                    </div>
                                </div>
                                
                                <div className="row mt-5">
                                    <OurRoomComponent />
                                </div>
                                <hr className="white" />
                                <div className="row ">
                                    <div className="col-md-4">
                                        <RoomComponent id={1} />
                                    </div>
                                    <div className="col-md-4">
                                        <RoomComponent id={2} />
                                    </div>
                                    <div className="col-md-4">
                                        <RoomComponent id={3} />
                                    </div>
                                    <div className="col-md-4">
                                        <RoomComponent id={4} />
                                    </div>
                                </div>
                                <hr className="white" />
                                <div className="row ">
                                </div>

                            </div>
                            <div className="col-md-6">
                                <SlideShow />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

HomeContainer.propTypes = {

};

const mapStateToProps = (state) => {
    const { auth, rooms } = state;
    const isFetching = auth.isFetching || rooms.isFetching;


    return {
        isFetching,
        userName: selectUserName(state),
        accomodation: selectUserRoom(state)
    };
};

const mapDispatchToProps = { login, fetchRooms };

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

