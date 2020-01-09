import React, {Component} from 'react';
import {connect} from "react-redux";
import {Button} from "reactstrap";

class App extends Component {
    render() {
      return (
            <div className='d-flex flex-column border rounded m-3 bg-light' style={{width: '176px'}}>
                <div className='border rounded m-1 text-right pr-1' style={{height: '30px', background: '#fff'}}>
                    {this.props.store.expression}
                </div>
                <div className='d-flex'>
                    <div className='d-flex flex-wrap justify-content-center' style={{width: '130px'}}>
                        <Button className='my-1 ml-1' onClick={this.props.deleteAll} >C</Button>
                        <Button className='my-1 ml-1' onClick={this.props.delete}>{'<'}</Button>
                        <Button className='my-1 ml-1' value='+' onClick={this.props.addOperator}>+</Button>
                        <Button className='my-1 ml-1' value='1' onClick={this.props.addNewElem}>1</Button>
                        <Button className='my-1 ml-1' value='2' onClick={this.props.addNewElem}>2</Button>
                        <Button className='my-1 ml-1' value='3' onClick={this.props.addNewElem}>3</Button>
                        <Button className='my-1 ml-1' value='4' onClick={this.props.addNewElem}>4</Button>
                        <Button className='my-1 ml-1' value='5' onClick={this.props.addNewElem}>5</Button>
                        <Button className='my-1 ml-1' value='6' onClick={this.props.addNewElem}>6</Button>
                        <Button className='my-1 ml-1' value='7' onClick={this.props.addNewElem}>7</Button>
                        <Button className='my-1 ml-1' value='8' onClick={this.props.addNewElem}>8</Button>
                        <Button className='my-1 ml-1' value='9' onClick={this.props.addNewElem}>9</Button>
                        <Button className='my-1 ml-1' value='0' onClick={this.props.addNewElem}>0</Button>
                    </div>
                    <div className='flex-column' style={{width: '35px'}}>
                        <Button className='my-1 w-100' value='-' onClick={this.props.addOperator}>-</Button>
                        <Button className='my-1 w-100' value='/' onClick={this.props.addOperator}>/</Button>
                        <Button className='my-1 w-100' value='*' onClick={this.props.addOperator}>*</Button>
                        <Button className='my-1 w-100' onClick={this.props.getAmount}>=</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps => ({ store: mapStateToProps }),
    mapDispatchToProps => ({
        addNewElem: e => {
            mapDispatchToProps(
                {type: 'ADD_VALUE', value: e.target.value}
            )
        },
        addOperator: e => {
            mapDispatchToProps(
                {type: 'ADD_OPERATOR', value: e.target.value}
            )
        },
        delete: () => {
            mapDispatchToProps(
                {type: 'DELETE'}
            )
        },
        deleteAll: () => {
            mapDispatchToProps(
                {type: 'DELETE_ALL'}
            )
        },
        getAmount: () => {
            mapDispatchToProps(
                {type: 'GET_AMOUNT'}
            )
        }
    })
)(App);

