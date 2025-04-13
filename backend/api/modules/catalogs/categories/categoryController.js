module.exports = function CategoryController({ categoryService }) {
  const controller = {};

  controller.findAll = async (req, res) => {
    const categories = await categoryService.findAll();
    return res.status(200).json(categories);
  };

  controller.findById = async (req, res) => {
    const { id } = req.params;
    const category = await categoryService.findById(id);  
    return res.status(200).json(category);
  }

  controller.create = async (req, res) => {
    const categoryData = req.body;
    const category = await categoryService.create(categoryData);
    return res.status(201).json(category);
  }

  controller.update = async (req, res) => {
    const { id } = req.params;
    const categoryData = req.body;
    await categoryService.update(id, categoryData);
    return res.status(204).end();
  }

  controller.delete = async (req, res) => {
    const { id } = req.params;
    await categoryService.delete(id);
    return res.status(204).end();
  }

  return controller;
};
