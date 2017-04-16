import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { ToPlayRow } from './ToPlayRow'
// import { bindActionCreators } from 'redux';


class ToPlayTable extends Component {

    componentDidMount() {
    }

    componentWillReceiveProps(nextProps) {
    }

    render() {
        //TODO connect this up to store
        const { toPlayData } = this.props || [];

        console.log(toPlayData);

        return (
            <div className="App">
                <h2>Games to be Played</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Type</th>
                            <th>Date started</th>
                        </tr>
                    </thead>
                    <tbody>
                        <ToPlayRow name='The Longest Journey'
                            type='Game'
                            dateStarted='09/04/17'/>
                        <ToPlayRow name='Dreamfall'
                            type='Game'
                            dateStarted=''/>
                        <ToPlayRow name='Toren'
                            type='Game'
                            dateStarted='09/04/17'/>
                    </tbody>
                </table>
            </div>
        );
    }
}
export default connect(
    (state) => ({
        toPlayData: state.toPlayData
    }),
    (dispatch) => ({
        // fetchToPlayData: bindActionCreators(fetchToPlayData, dispatch)
    })
)(ToPlayTable);