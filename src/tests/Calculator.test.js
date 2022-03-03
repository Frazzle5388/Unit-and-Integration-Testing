import React from 'react';
import Calculator from '../containers/Calculator';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('Calculator', () => {
  let container;
  beforeEach(() => {
    container = mount(<Calculator />)
  })

  it('should change running total on number enter', () => {
    const button4 = container.find('#number4');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    expect(runningTotal.text()).toEqual('4');
  })

  it('should add 4 and 5 change the running total to 9', () => {
    const button4 = container.find('#number4');
    const buttonadd = container.find('#operator_add');
    const button5 = container.find('#number5');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button4.simulate('click');
    buttonadd.simulate('click');
    button5.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('9');
  })

  it('should subtract 4 from 7 change the running total to 3', () => {
    const button7 = container.find('#number7');
    const buttonsubtract = container.find('#operator-subtract');
    const button4 = container.find('#number4');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button7.simulate('click');
    buttonsubtract.simulate('click');
    button4.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should multiply 3 by 5 and change the running total to 15', () => {
    const button3 = container.find('#number3');
    const buttonmultiply = container.find('#operator-multiply');
    const button5 = container.find('#number5');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button3.simulate('click');
    buttonmultiply.simulate('click');
    button5.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('15');
  })

  it('should divide 21 by 7 and change the running total to 3', () => {
    const button2 = container.find('#number2');
    const button1 = container.find('#number1');
    const buttondivide = container.find('#operator-divide');
    const button7 = container.find('#number7');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button2.simulate('click');
    button1.simulate('click');
    buttondivide.simulate('click');
    button7.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('3');
  })

  it('should concatenate multiple number button clicks, so 1,935 should show up as 1,935', () => {
    const button1 = container.find('#number1');
    const button9 = container.find('#number9');
    const button3 = container.find('#number3');
    const button5 = container.find('#number5');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button9.simulate('click');
    button3.simulate('click');
    button5.simulate('click');
    expect(runningTotal.text()).toEqual('1935');
  })

  it('should chain multiple operations together, so 15 * 7 / 5 = 21', () => {
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const buttonmultiply = container.find('#operator-multiply');
    const button7 = container.find('#number7');
    const buttondivide = container.find('#operator-divide');
    const button5a = container.find('#number5');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button5.simulate('click');
    buttonmultiply.simulate('click');
    button7.simulate('click');
    buttondivide.simulate('click');
    button5a.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('21');
  })

  it('should clear the running total without affecting any calcultions', () => {
    const button1 = container.find('#number1');
    const button5 = container.find('#number5');
    const buttonmultiply = container.find('#operator-multiply');
    const button7 = container.find('#number7');
    const buttondivide = container.find('#operator-divide');
    const button5a = container.find('#number5');
    const buttonclear = container.find('#clear')
    const button2 = container.find('#number2');
    const buttonmultiplya = container.find('#operator-multiply');
    const button8 = container.find('#number8');
    const buttonequals = container.find('#operator-equals');
    const runningTotal = container.find('#running-total');
    button1.simulate('click');
    button5.simulate('click');
    buttonmultiply.simulate('click');
    button7.simulate('click');
    buttondivide.simulate('click');
    button5a.simulate('click');
    buttonclear.simulate('click');
    button2.simulate('click');
    buttonmultiplya.simulate('click');
    button8.simulate('click');
    buttonequals.simulate('click');
    expect(runningTotal.text()).toEqual('16');
  })


})
