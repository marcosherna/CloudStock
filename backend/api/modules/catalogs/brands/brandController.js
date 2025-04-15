module.exports = function BrandController({ brandService }) {
    const controller = {};
  
    controller.findAll = async (req, res) => {
      const brands = await brandService.findAll();
      return res.status(200).json(brands);
    };
  
    controller.findById = async (req, res) => {
      const { id } = req.params;
      const brand = await brandService.findById(id);  
      return res.status(200).json(brand);
    }
  
    controller.create = async (req, res) => {
      const brandData = req.body;
      const brand = await brandService.create(brandData);
      return res.status(201).json(brand);
    }
  
    controller.update = async (req, res) => {
      const { id } = req.params;
      const brandData = req.body;
      await brandService.update(id, brandData);
      return res.status(204).end();
    }
  
    controller.delete = async (req, res) => {
      const { id } = req.params;
      await brandService.delete(id);
      return res.status(204).end();
    }
  
    return controller;
  };
  