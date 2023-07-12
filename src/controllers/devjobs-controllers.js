import DevJobs from "../models/devjobs.js";

export const postAll = async (req, res) => {
  try {
    const data = req.body;

    const result = await DevJobs.insertMany(data);
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

export const getSizeAndPage = async (req, res) => {
  try {
    const size = parseInt(req.params.size);
    const page = parseInt(req.params.page);

    const limit = size * page;
    const jobs = await DevJobs.find().limit(limit);
    res.status(200).json(jobs);
  } catch (error) {
    console.log(error);
  }
};
