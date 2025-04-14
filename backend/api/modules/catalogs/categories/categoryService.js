const NotFound = require("@/errors/notFound");
const Conflict = require("@/errors/conflict");

module.exports = function CategoryService({ categoryRepository }) {
  const service = {};

  service.findAll = async () => {
    const categories = await categoryRepository.findAll();
    return categories;
  };

  service.findById = async (categoryId) => {
    const category = await categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) throw new NotFound("Category not found");

    return category;
  };

  service.create = async (categoryData) => {
    const { name } = categoryData;

    const existingCategory = await categoryRepository.isExist(name);

    if (existingCategory) throw new Conflict("Category already exists");

    const category = await categoryRepository.create(categoryData);
    return category;
  };

  service.update = async (categoryId, categoryData) => {
    const category = await categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) throw new NotFound("Category not found");
    if (categoryData.id != categoryId)
      throw new Conflict("Category ID mismatch");

    if (categoryData.name) {
      const existingCategory = await categoryRepository.isExist(
        categoryData.name
      );

      if (existingCategory) throw new Conflict("Category already exists");
    }

    const updatedCategory = await categoryRepository.update(categoryData, {
      where: { id: categoryId },
    });

    return updatedCategory;
  };

  service.delete = async (categoryId) => {
    const category = await categoryRepository.findOne({
      where: { id: categoryId },
    });

    if (!category) throw new NotFound("Category not found");

    const deletedCategory = await categoryRepository.destroy({
      where: { id: categoryId },
    });

    return deletedCategory;
  };

  return service;
};
