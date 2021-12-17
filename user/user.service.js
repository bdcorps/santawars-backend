const addUser = (User) => (walletId, twitter) => {
  if (!walletId || !twitter)
    throw new Error(
      "Missing Data. Please provide values for walletId, twitter."
    );
  const user = new User({ walletId, twitter });
  return user.save();
};

const listUsers = (User) => () => {
  return User.find({});
};

module.exports = (User) => {
  return {
    addUser: addUser(User),
    listUsers: listUsers(User),
  };
};
