**To migrate**
*use* `sequelize db:migrate` once to UP &  `sequelize db:migrate:undo` to down

**To seed**
*use* `sequelize db:seed:all` once to UP & `sequelize db:seed:undo` to down<br/>
seed data is provided in "./data.js"


put database name and password in #config/config.json<br/>
before starting the server using `npm start`<br/>



***API endpoints***
HostName: http://localhost:8080;<br/>
GET /api/users/     => returns list of all users<br/>
GET /api/users/:id/friends => returns list of all friends of a user<br/>
GET /api/users/:id/friendsoffriends => returns list of friends of friends of a user<br/>


***Unit Testing***
1.  getUsers  <br/>
       expect content type to be json<br/>
       expect it to be a list<br/>
       expect an entry to have firstName, lastName and other such details<br/>
2. getFriends<br/>
        put similar checks as in one <br/>
        alternatively check the friends to be not same as itself<br/>
3. get FriendsOfFriends<br/>
        same checks as above<br/>
        check if the entries are not duplicate<br/>
<br/>
apart from these we can check the error behaviour and status codes in particular cases 


