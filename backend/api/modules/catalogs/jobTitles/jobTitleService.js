const Conflict = require("@/errors/conflict")
const NotFound = require("@/errors/notFound")

module.exports = function JobTitleService({ jobTitleRepository }) {
  const service = {};

  service.findAll = async () => {
    const jobTitles = await jobTitleRepository.findAll();
    return jobTitles;
  };

  service.findById = async (jobId) => {
    const job = await jobTitleRepository.findOne({
      where: { id: jobId },
    });

    if (!job) throw new NotFound("Job Title not found");

    return job;
  };

  service.create = async (jobTitleData) => {
    const { name } = jobTitleData;

    const isExist = await jobTitleRepository.isExist(name);

    if (isExist) throw new Conflict("Job Title already exists");

    const job = await jobTitleRepository.create(jobTitleData);
    return job;
  };

  service.update = async (jobId, jobTitleData) => {
    const job = await jobTitleRepository.findOne({
      where: { id: jobId },
    });

    if (!job) throw new NotFound("Job Title not found");
    if (jobTitleData.id != jobId) throw new Conflict("Job Title ID mismatch");

    if (jobTitleData.name) {
      const isExist = await jobTitleRepository.isExist(jobTitleData.name);

      if (isExist) throw new Conflict("Job Title already exists");
    }

    const updateJob = await jobTitleRepository.update(jobTitleData, {
      where: { id: jobId },
    });

    return updateJob;
  };

  service.delete = async (jobId) => {
    const jod = await jobTitleRepository.findOne({
      where: { id: jobId },
    });

    if (!jod) throw new NotFound("Job Title not found");

    const deleteJob = await jobTitleRepository.destroy({
      where: { id: jobId },
    });

    return deleteJob;
  };

  return service;
};
