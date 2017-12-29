import React from 'react';

const person = (props) => {
    // When using class-based components, it`s this.props
    // like <p>My name is {this.props.name}</p>
    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );
};

export default person;