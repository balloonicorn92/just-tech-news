const User = require('./User');
const Post = require('./Post')

//create associations -- user has many posts
User.hasMany(Post, {
    foreignKey: 'user_id'
});
// post can belong to only one user
Post.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Post }