import React, { Component } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox.js';
import Scroll from '../components/Scroll.js';
import ErrorBoundry from '../components/ErrorBoundry.js';
import './App.css';


class App extends Component  {

    constructor() {
        super() //required to use this.
        //state can change and lives in parent component so can be used in searchbox which requires connection between searchbox and robots_array
        this.state = {
            robots: [],
            searchField: ''
        }
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users').then(response => {
            return response.json();
        }).then(users => {
            this.setState({ robots : users})
        })
    }

    onSearchChanage = (event) => {
        this.setState({searchField: event.target.value})
    }

    render() {

        const {robots, searchField} = this.state;

        const filterRobot = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchField.toLowerCase())
        });
        if (robots.length === 0) {
            return <h1 className='tc'>Loading ...</h1>
        } else { //React component name starts with capital letter. Here - Scroll
            return (
                <div className='tc'>
                    <h1 className='f1'>RoboFriends</h1>
                    <SearchBox searchChange={this.onSearchChanage} /><br/>
                    <Scroll> 
                        <ErrorBoundry>
                            <CardList robots={filterRobot}/>
                        </ErrorBoundry>
                    </Scroll>
                </div>
            );
        }
    } 
}

export default App