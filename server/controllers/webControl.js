const Data = require('../models/web');
const dayjs = require('dayjs');

// this is our create method
// this method adds neweWeb in ourWebbase
module.exports.createWeb = async (req, res) => {
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  const newWeb = new Web({
    ...req.body,
    timestamp: now,
  });

  newWeb.save((error) => {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: 'from: WebControl,Web saved successfully!',
    });
  });
};

module.exports.Webs = async (req, res) => {
  try {
    const webs = await Web.find({});
    res.status(200).json(Webs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports.Web = async (req, res) => {
  try {
    const Web = await Web.findById(req.params.id);
    Web.content = marked.parse(Web.content);

    res.status(200).json(web);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

// 更新
// this method overwrites existingeWeb in oureWebbase
module.exports.updateWeb = async (req, res) => {
  const now = dayjs(`${new Date()}`).format('YYYY-MM-DD HH:mm:ss');
  try {
    const updatedResult = await Web.findByIdAndUpdate(
      req.params.id,
      { ...req.body, timestamp: now },
      {
        new: true,
      }
    );
    console.log(updatedResult);
    res.status(200);
  } catch (err) {
    console.log(err);
  }
};

// this is our delete method
// this method removes existingeWeb in oureWebbase
module.exports.deleteWeb = async (req, res) => {
  const { id: _id } = req.params;
  try {
    const deleteeWeb = await Web.findByIdAndRemove(_id);
    res.status(200).json(deleteeWeb);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
