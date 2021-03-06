import React, { Component, Fragment } from 'react'
import { AppSectionHeader, AppSectionFooter } from './../components'
import { ReactComponent as IcoTodo } from '../assets/img/icons-site/todo.svg';
import { ReactComponent as IcoBlog } from '../assets/img/icons-site/blog.svg';
import { ReactComponent as IcoMetronome } from '../assets/img/icons-site/metronome.svg';
import { ReactComponent as IcoAbout } from '../assets/img/icons-site/about.svg';
import { ReactComponent as IcoCalculator } from '../assets/img/icons-site/calculator.svg';
import { ReactComponent as IcoWeather } from '../assets/img/icons-site/weather.svg';
import { Link } from "react-router-dom";
import '../assets/css/App.css';

class Main extends Component {
    
    render() {
        return (
        <Fragment>
            <AppSectionHeader/>
            <section className="container pageBody pageMain">
                <div className='row'>
                <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/todo'><IcoTodo/><span>Todo List</span></Link>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/blog'><IcoBlog/><span>Blog</span></Link>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/metronome'><IcoMetronome/><span>Metronome</span></Link>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/calculator'><IcoCalculator/><span>Calculator</span></Link>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/weather'><IcoWeather/><span>Weather</span></Link>
                        </div>
                    </div>
                    <div className='col-sm-2'>
                        <div className="box">
                            <Link to='/about'><IcoAbout/><span>About</span></Link>
                        </div>
                    </div>
                </div>
            </section>
            <AppSectionFooter/>
        </Fragment>
        )
    }
}

export default Main