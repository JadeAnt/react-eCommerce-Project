import React, {Component} from 'react';
import { render } from '@testing-library/react';
import Title from './Title.js';

export default class Hero extends Component{
    render(){
        return(
            <Title name = "Hello from Hero"/>
        );
    }
}