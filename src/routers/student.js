const express = require("express");
const router = new express.Router();
const Student = require("../models/students");

router.post("/students", async (req,res) => {
    try{
        const user = new Student(req.body);
        const createUser = await user.save();
            res.status(201).send(createUser);
    }catch(e) {
        res.status(400).send(e);}
});
router.get("/students/:name", async (req,res) => {
    try{
        const name = req.params.name;
        const studentData = await Student.findOne({name});
        res.send(studentData);
    }catch(e){
        res.status(500).send(e);
    }
});

router.patch("/students/:name", async(req,res) => {
    try{
        const name = req.params.name;
        const updateStudents = await Student.findOneAndUpdate({name}, req.body,{
            // Show updated data at postmon footer
            new:true
        });
        res.send(updateStudents);
    }catch(e){
        res.status(404).send(e);
    }
});

router.delete("/students/:name", async (req, res) => {
    try {
      const name = req.params.name;
      const deleteStudent = await Student.findOneAndDelete({name}, req.body,{
        new:true
    });
      if (!deleteStudent) {
        return res.status(404).send();
      }
      res.send(deleteStudent);
    } catch (e) {
      res.status(500).send(e);
    }
});

module.exports = router;