const { fn, col, where } = require("sequelize");

module.exports = function BrandRepository({ db }) {
  const { Brand } = db;
  const repository = Brand;

  repository.isExist = async (name) => {
    const brand = await Brand.findOne({
      where: where(fn("LOWER", col("name")), name.toLowerCase()),
    });
    return !!brand;
  };

  return repository;
};
