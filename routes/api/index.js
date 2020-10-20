let express = require('express');
const {User, Friendship} = require('../../models');
let router = express.Router();

router.get('/users', function(req, res, next) {
  User.findAll({}).then(users => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
    res.json(users);
  });
});

router.get('/users/:id/friends', function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  User.findByPk(req.params.id, {
    include:[{
      model: User,
      as: 'Friends'
    }]
  }).then(user => {
    if(!user) throw new Error('User not found!');
    res.json(user.Friends);
  }).catch(err =>{
    console.error(err);
    res.send(error.message);
  })
});

router.get('/users/:id/friendsOfFriends', async function(req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000')
  let friendsOfFriends = [];
  const user = await User.findByPk(req.params.id, {
    include:[{
      model: User,
      as: 'Friends'
    }]
  });
  let promiseArr = user.Friends.map( async (friend) => {
    const f = await User.findByPk(friend.id, {
      include:[{
        model: User,
        as: 'Friends'
      }]
    });
    f.Friends.forEach( obj => {
      if( !friendsOfFriends.some(el =>el.id===obj.id)){
        friendsOfFriends.push(obj);
      }
    })
  })
  Promise.all(promiseArr).then(() => {
    res.json([... new Set(friendsOfFriends)]);
  });
});

module.exports = router;
