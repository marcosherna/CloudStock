module.exports = function JobTitleController({ jobTitleService }){
    const controller = {};

  controller.findAll = async (req, res) => {
    const jobs = await jobTitleService.findAll();
    return res.status(200).json(jobs);
  };

  controller.findById = async (req, res) => {
    const { id } = req.params;
    const job = await jobTitleService.findById(id);  
    return res.status(200).json(job);
  }

  controller.create = async (req, res) => {
    const jobTitleData = req.body;
    const job = await jobTitleService.create(jobTitleData);
    return res.status(201).json(job);
  }

  controller.update = async (req, res) => {
    const { id } = req.params;
    const jobTitleData = req.body;
    await jobTitleService.update(id, jobTitleData);
    return res.status(204).end();
  }

  controller.delete = async (req, res) => {
    const { id } = req.params;
    await jobTitleService.delete(id);
    return res.status(204).end();
  }

  return controller;
}