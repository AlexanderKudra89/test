const userList = ["admin", "manager", "employe"];
const isUserPresent = function(user, listOfUsers) {
  return listOfUsers.includes(user);
};

console.log(isUserPresent("manager", userList));
