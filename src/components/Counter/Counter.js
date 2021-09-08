import React from 'react';

class Counter extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    onButtonClick = (sign) => {
        if(sign === '+'){
            this.setState({
                count: this.state.count + 1
            });
        }
        else {
            if(this.state.count <= 0) return;
            this.setState({
                count: this.state.count - 1
            });
        }
    };

    setToZero() {
        this.setState({
            count: 0
        });
    }

    render() {
        const {count} = this.state;
        const {name} = this.props;
        return(
            <div>
                <h3>{name}</h3>
                <label>{count && count}</label>
                <br></br>
                <button onClick={() => this.onButtonClick('+')}>Increase</button>
                <button onClick={() => this.onButtonClick('-')}>Decrease</button>
                <button onClick={() => this.setToZero()}>Set to Zero</button>
            </div>
        );
    }
}

export default Counter;