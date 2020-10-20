module.exports = {
    users: [{
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 6,
    firstName: 'himanshu',
    lastName: 'sharma',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    id: 2,
    firstName: 'Donald',
    lastName: 'harris',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 3,
    firstName: 'Alex',
    lastName: 'Smith',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 4,
    firstName: 'Deepak',
    lastName: 'Singh',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    id: 5,
    firstName: 'Amit',
    lastName: 'Kumar',
    avatar: null,
    createdAt: new Date(),
    updatedAt: new Date()
  }],
    friendships: [{
        userId: 1,
        friendId: 2,
        accepted: true,
        createdAt: new Date(),
        updatedAt: new Date()
     }, {
        userId: 1,
        friendId: 3,
        accepted: true,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      userId: 2,
      friendId: 1,
      accepted: true,
      createdAt: new Date(),
      updatedAt: new Date()
   }, {
      userId: 3,
      friendId: 1,
      accepted: true,
      createdAt: new Date(),
      updatedAt: new Date()
   },{
        userId: 2,
        friendId: 4,
        accepted: false,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      userId: 4,
      friendId: 2,
      accepted: false,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
        userId: 3,
        friendId: 4,
        accepted: true,
        createdAt: new Date(),
        updatedAt: new Date()
     },{
      userId: 4,
      friendId: 3,
      accepted: true,
      createdAt: new Date(),
      updatedAt: new Date()
   }]
}