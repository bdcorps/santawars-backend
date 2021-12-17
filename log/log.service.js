const addLog = (Log) => (message) => {
  if (!message)
    throw new Error(
      "Missing Data. Please provide values for message."
    );
  const log = new Log({ message });
  return log.save();
};

const listLogs = (Log) => () => {
  return Log.find({});
};

module.exports = (Log) => {
  return {
    addLog: addLog(Log),
    listLogs: listLogs(Log),
  };
};
