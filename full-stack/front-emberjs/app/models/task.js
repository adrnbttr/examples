import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  listId: attr('string'),
  title: attr('string'),
  createTime: attr('date'),
});
