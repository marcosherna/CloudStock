const NotFound = require("@/errors/notFound");
const Conflict = require("@/errors/conflict");

module.exports = function BrandService({ brandRepository }) {
  const service = {};

  service.findAll = async () => {
    const brands = await brandRepository.findAll();
    return brands;
  };

  service.findById = async (brandId) => {
    const brand = await brandRepository.findOne({
      where: { id: brandId },
    });

    if (!brand) throw new NotFound("brand not found");

    return brand;
  };

  service.create = async (brandData) => {
    const { name } = brandData;

    const isExist = await brandRepository.isExist(name);

    if (isExist) throw new Conflict("brand already exists");

    const brand = await brandRepository.create(brandData);
    return brand;
  };

  service.update = async (brandId, brandData) => {
    const brand = await brandRepository.findOne({
      where: { id: brandId },
    });

    if (!brand) throw new NotFound("brand not found");
    if (brandData.id != brandId)
      throw new Conflict("brand ID mismatch");

    if (brandData.name) {
      const isExist = await brandRepository.isExist(
        brandData.name
      );

      if (isExist) throw new Conflict("brand already exists");
    }

    const updatedbrand = await brandRepository.update(brandData, {
      where: { id: brandId },
    });

    return updatedbrand;
  };

  service.delete = async (brandId) => {
    const brand = await brandRepository.findOne({
      where: { id: brandId },
    });

    if (!brand) throw new NotFound("brand not found");

    const deletedbrand = await brandRepository.destroy({
      where: { id: brandId },
    });

    return deletedbrand;
  };

  return service;
};
