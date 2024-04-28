const express = require("express");
const Model = require("./Model/model");
const router = express.Router();

module.exports = router;

//Post Method
router.post("/register", async (req, res) => {
  const data = new Model({
    firstname: req.body.firstname,
    middlename: req.body.middlename,
    lastname: req.body.lastname,
    gender: req.body.gender,
    dob: req.body.dob,
    mobile: req.body.mobile,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password,
    confirmpass: req.body.confirmpass,
    hobbies: req.body.hobbies,
    state: req.body.state,
    district: req.body.district,
    city: req.body.city,
    profile: req.body.profile,
    document: req.body.document,
    status: req.body.status,
  });

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

//Get all Method
router.get("/user-list", async (req, res) => {
  try {
    const data = await Model.find(); //Model.find is used to fetch all the data from the database
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Get by ID Method
//Get by ID Method
router.get("/getUser/:id", async (req, res) => {
  try {
    const data = await Model.findById(req.params.id);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

//Update by ID Method
router.patch("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Model.findByIdAndUpdate(id, updatedData, options);
    //The req.params.id is the const id, updatedData which contains the req.body,
    // and the options, which specifies whether to return the updated data in the body or not.

    res.send(result);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


//Delete by ID Method
router.delete('/delete/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await Model.findByIdAndDelete(id)
        res.send(`Document with ${data.firstname} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})
