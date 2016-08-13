import { Factory } from 'meteor/factory';
import React from 'react';
import { shallow } from 'enzyme';
import { chai } from 'meteor/practicalmeteor:chai';
import TodoItem from './TodoItem.jsx';

describe('Dashboard', () => {
  it('should render', () => {
    const todo = Factory.build('todo', { text: 'testing', checked: false });
    const item = shallow(<TodoItem todo={todo} />);
    chai.assert(item.hasClass('list-item'));
    chai.assert(!item.hasClass('checked'));
    chai.assert.equal(item.find('.editing').length, 0);
    chai.assert.equal(item.find('input[type="text"]').prop('defaultValue'), 'testing');
  });
});
