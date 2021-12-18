const addLog = (Log) => (message, transaction) => {
  if (!message || !transaction)
    throw new Error(
      "Missing Data. Please provide values for message, transaction."
    );
  const log = new Log({ message, transaction });
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
