import React from 'react';
import blue from './blue.js';
import red from './red.js';

export default class HelloWorld extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            red: "",
            blue: ""
        }
    }
    componentDidMount() {
        let a = 0
        red.forEach((item) => {
            if (item.includes(15)) {
                a += 1
            }
        })
        console.log(a)
        console.log(red)
        console.log(blue)
    }
    search() {
        this.setState({
            red: red[Number(this.refs.input.value) - 1].join(','),
            blue: blue[Number(this.refs.input.value) - 1]
        })
    }
    render() {
        return (
            <div>
                <input type="text" refs="input"></input>
                <button onClick={this.search.bind(this)}>查询</button>
                <div>红球：{this.state.red}</div>
                <div>蓝球：{this.state.blue}</div>
                <table>
                    <thead>
                        <tr>
                            <th colSpan="6">红球</th>
                            <th>蓝球</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            red.map((item, index) => {
                                return <tr>
                                    <td>{item[0]}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>{item[3]}</td>
                                    <td>{item[4]}</td>
                                    <td>{item[5]}</td>
                                    <td>{blue[index]}</td>
                                </tr>
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
