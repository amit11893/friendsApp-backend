**To migrate**
*use* `sequelize db:migrate` once to UP &  `sequelize db:migrate:undo` to down

**To seed**
*use* `sequelize db:seed:all` once to UP & `sequelize db:seed:undo` to down
seed data is provided in "./data.js"


put database name and password in #config/config.json
before starting the server using `npm start`



***API endpoints***
HostName: http://localhost:8080;
GET /api/users/     => returns list of all users
GET /api/users/:id/friends => returns list of all friends of a user
GET /api/users/:id/friendsoffriends => returns list of friends of friends of a user


***Unit Testing***
1.  getUsers  
       expect content type to be json
       expect it to be a list
       expect an entry to have firstName, lastName and other such details
2. getFriends
        put similar checks as in one 
        alternatively check the friends to be not same as itself
3. get FriendsOfFriends
        same checks as above
        check if the entries are not duplicate

apart from these we can check the error behaviour and status codes in particular cases 


