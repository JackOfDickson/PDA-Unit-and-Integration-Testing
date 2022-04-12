import React from 'react';
import Calculator from '../containers/Calculator';
import {mount, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator/>)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 1 to 4 and get 5', () => {
    const button1 = container.find('#number1');
    const button4 = container.find('#number4');
    const add = container.find('#operator_add');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    add.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('5');
  })

  it('should subtract 4 and 7 to get 3', () => {
    const button7 = container.find('#number7');
    const button4 = container.find('#number4');
    const subtract = container.find('#operator-subtract');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    subtract.simulate('click');
    button4.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')

  })

  it('should multiply 3 by 5 and get 15', () => {
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    multiply.simulate('click');
    button5.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('15')
  })

  it('should divide 21 by 7 and get 3', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button7 = container.find('#number7');
    const divide = container.find('#operator-divide');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    divide.simulate('click');
    button7.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('3')
  })

  it('should concatenate multiple number button clicks', () => {
  const button1 = container.find('#number1');
  const button2 = container.find('#number2');
  const button3 = container.find('#number3');
  const runningTotal = container.find('#running-total');
  button1.simulate('click');
  button2.simulate('click');
  button3.simulate('click');
  expect(runningTotal.text()).toEqual('123');
  })

  it('should chain multiple operations together', () => {
    const button1 = container.find('#number1');
    const button2 = container.find('#number2');
    const button3 = container.find('#number3');
    const add = container.find('#operator_add');
    const multiply = container.find('#operator-multiply');
    const equals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    add.simulate('click');
    button2.simulate('click');
    multiply.simulate('click');
    button3.simulate('click');
    equals.simulate('click');
    expect(runningTotal.text()).toEqual('9')
    })
  
})

