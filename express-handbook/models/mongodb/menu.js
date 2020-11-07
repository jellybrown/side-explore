const mongoose = require('mongoose');

mongoose.set('useCreateIndex', true);
const menuSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  category_name: { type: String },
  path: { type: String }
},
{
  collection: 'handbook_menu',
  timestamp: false
});

menuSchema.statics.create = (payload) => {
  const menu = new this(payload);
  return menu.save();
}

menuSchema.statics.findAll = function() {
  console.log(this.find({}));
  return this.find({});
};

menuSchema.statics.findOneByMenuid = (menuid) => (this.findOne({ menuid }));

menuSchema.statics.updateByMenuid = (menuid, payload) => {
  return this.findOneAndUpdate({ menuid }, payload, { new: true });
}

menuSchema.statics.deleteByMenuid = (menuid) => {
  return this.remove({ menuid });
}

module.exports = mongoose.model('Menu', menuSchema);
