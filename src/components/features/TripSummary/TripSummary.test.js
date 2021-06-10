import React from 'react';
import {shallow} from 'enzyme';
import TripSummary from './TripSummary';

describe('Component TripSummary', () => {
  it('should generate link to adress', () => {
    const expectedId = 'abc';
    const exceptedLink = '/trip/abc';
    const component = shallow(<TripSummary id={expectedId} name={'name'} image={'image'} cost={'cost'} days={1} tags={[]} />);
    expect(component.find('.link').prop('to')).toEqual(exceptedLink);
    
  });
  it('should render good src and alt', () => {
    const expectedImage = 'image.jpg';
    const expectedName = 'name';
    const component = shallow(<TripSummary id={'id'} name={expectedName} image={expectedImage} cost={'cost'} days={1} tags={[]} />);
    expect(component.find('img').prop('src')).toEqual(expectedImage);
    expect(component.find('img').prop('alt')).toEqual(expectedName);
  });
  
});