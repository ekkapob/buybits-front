import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  createdDate: DS.attr('string'),
  updatedDate: DS.attr('string'),
  skills: DS.attr('string'),
  budget: DS.attr('string'),
  dollar: DS.attr('string'),
  owner: DS.attr('string')
})
.reopenClass({
  FIXTURES: [{
    id: 1,
    title: 'This is a title',
    description: 'This is content bla bla bla...',
    createdDate: '06/05/2015',
    updatedDate: '07/05/2015',
    skills: '{design, coding}',
    budget: '5000',
    dollar: 'USD',
    owner: 'Jame Bond'
  }, {
    id: 2,
    title: 'This is a title 2',
    description: 'This is content bla bla bla... 2',
    createdDate: '06/05/2015',
    updatedDate: '07/05/2015',
    skills: '{design, css}',
    budget: '99000',
    dollar: 'USD',
    owner: 'Math Calc'
  }]
});