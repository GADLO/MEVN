const Project = require('../models/project');
const dayjs = require('dayjs');

// this is our create method
// this method adds neweWeb in ourWebbase
module.exports.createProject = async (req, res) => {
  // console.log(req.body);
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  const newProject = new Project({
    ...req.body,
    timestamp: now,
  });

  newProject.save((error) => {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: 'from: ProjectControl,Project saved successfully!',
    });
  });
};

module.exports.Projects = async (req, res) => {
  try {
    const Projects = await Project.find({});
    res.status(200).json(Projects);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports.getProject = async (req, res) => {
  try {
    const Project = await Project.findById(req.params.id);
    res.status(200).json(Project);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// 更新
// this method overwrites existingeProject in oureProjectbase
module.exports.updateProject = async (req, res) => {
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  try {
    const updatedResult = await Project.findByIdAndUpdate(
      req.params.id,
      { ...req.body, timestamp: now },
      {
        new: true,
      }
    );
    // console.log(updatedResult);
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

// this is our delete method
// this method removes existingeProject in oureProjectbase
module.exports.deleteProject = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deleteProject = await Project.findByIdAndRemove(_id);
    res.status(200).json(deleteProject);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
