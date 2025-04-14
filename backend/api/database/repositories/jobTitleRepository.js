const { fn, col, where } = require("sequelize");

module.exports = function JobTitles({ db }) {
  const { JobTitle } = db;
  const repository = JobTitle;

  repository.isExist = async (name) => {
    const jobTitle = await JobTitle.findOne({
      where: where(fn("LOWER", col("name")), name.toLowerCase()),
    });
    return !!jobTitle;
  };

  return repository;
};
