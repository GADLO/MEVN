const Web = require('../models/web');
const dayjs = require('dayjs');

// this is our create method
// this method adds neweWeb in ourWebbase
module.exports.createWeb = async (req, res) => {
  // console.log(req.body);
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
    console.log(webs);

    res.status(200).json(webs);
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
};

module.exports.getWeb = async (req, res) => {
  try {
    const web = await Web.findById(req.params.id);
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
    // console.log(updatedResult);
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
    const deleteWeb = await Web.findByIdAndRemove(_id);
    res.status(200).json(deleteWeb);
  } catch (error) {
    res.status(409).json({
      message: error.message,
    });
  }
};
