// Video 64 Thapa
// const express = require("express");
// const app = express();
// const port = process.env.PORT || 3000;
// app.get("/", (req,res) => {
//     res.send("Listening from the other side.");
// })
// app.post("/student", (req,res) => {
//     res.send("Listening from the other side by asad habeeb");
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// const express = require("express");
// require("./db/conn");
// const app = express();
// const port = process.env.PORT || 8000;
// app.get("/", (req,res) => {
//     res.send("Listening from the other side.");
// })
// app.post("/student", (req,res) => {
//     res.send("Listening from the other side by asad habeeb");
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })

// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students"); 
// const app = express();
// const port = process.env.PORT || 8000;
// app.post("/students", (req,res) => {
//     res.send("Listening from the other side by asad habeeb");
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })

// Post request using promise 
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students"); 
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     res.send("Listening from the other side by asad habeeb");
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Create student, POST request 
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", (req,res) => {
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((e) => {
//         res.status(400).send(e);
//     })
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Video 65
// Post request using try catch 
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());

// app.post("/students", async (req,res) => {
    
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Video 66
// Get request for all
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());

// app.post("/students", async (req,res) => {
    
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })

// app.get("/students", async (req,res) => {
    
//     try{
//         const studentsData = await Student.find();
//         res.send(studentsData);
//     }catch(e){
//         res.send(e);
//     }
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Get request for specific by ID
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());

// app.post("/students", async (req,res) => {
    
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })

// app.get("/students/:id", async (req,res) => {
    
//     try{
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//         res.send(studentData);

//     }catch(e){
//         res.status(500).send(e);
//     }
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Get request for specific by Email
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", async (req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })
// app.get("/students/:name", async (req,res) => {
//     try{
//         const name = req.params.name;
//         const studentData = await Student.findOne({name});
//         res.send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Video 68 NOde Series 
// Patch request using ID
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", async (req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })

// app.get("/students/:id", async (req,res) => {
//     try{
//         const _id = req.params.id;
//         const studentData = await Student.findById(_id);
//         res.send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })
// app.patch("/students/:id", async(req,res) => {
//     try{
//         const _id = req.params.id;
//         const updateStudents = await Student.findByIdAndUpdate(_id, req.body,{
//             // Show updated data at postmon footer
//             new:true
//         });
//         res.send(updateStudents);
//     }catch(e){
//         res.status(404).send(e);
//     }
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Patch request using name
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", async (req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     })
// app.get("/students/:name", async (req,res) => {
//     try{
//         const name = req.params.name;
//         const studentData = await Student.findOne({name});
//         res.send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// })
// app.patch("/students/:name", async(req,res) => {
//     try{
//         const name = req.params.name;
//         const updateStudents = await Student.findOneAndUpdate({ name: name }, req.body,{
//             // Show updated data at postmon footer
//             new:true
//         });
//         res.send(updateStudents);
//     }catch(e){
//         res.status(404).send(e);
//     }
// })
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// })


// Delete request by id
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", async (req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     });
// app.get("/students/:name", async (req,res) => {
//     try{
//         const name = req.params.name;
//         const studentData = await Student.findOne({name});
//         res.send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// });
// app.patch("/students/:name", async(req,res) => {
//     try{
//         const name = req.params.name;
//         const updateStudents = await Student.findOneAndUpdate({name}, req.body,{
//             // Show updated data at postmon footer
//             new:true
//         });
//         res.send(updateStudents);
//     }catch(e){
//         res.status(404).send(e);
//     }
// });
// app.delete("/students/:id", async (req, res) => {
//     try {
//       const _id = req.params.id;
//       const deleteStudent = await Student.findByIdAndDelete(_id);
//       if (!deleteStudent) {
//         return res.status(404).send();
//       }
//       res.send(deleteStudent);
//     } catch (e) {
//       res.status(500).send(e);
//     }
//   });
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// });


// Delete by name 
// const express = require("express");
// require("./db/conn");
// const Student = require("./models/students");
// const app = express();
// const port = process.env.PORT || 8000;
// app.use(express.json());
// app.post("/students", async (req,res) => {
//     try{
//         const user = new Student(req.body);
//         const createUser = await user.save();
//             res.status(201).send(createUser);
//     }catch(e) {
//         res.status(400).send(e);}
//     });
// app.get("/students/:name", async (req,res) => {
//     try{
//         const name = req.params.name;
//         const studentData = await Student.findOne({name});
//         res.send(studentData);
//     }catch(e){
//         res.status(500).send(e);
//     }
// });
// app.patch("/students/:name", async(req,res) => {
//     try{
//         const name = req.params.name;
//         const updateStudents = await Student.findOneAndUpdate({name}, req.body,{
//             // Show updated data at postmon footer
//             new:true
//         });
//         res.send(updateStudents);
//     }catch(e){
//         res.status(404).send(e);
//     }
// });
// app.delete("/students/:name", async (req, res) => {
//     try {
//       const name = req.params.name;
//       const deleteStudent = await Student.findOneAndDelete({name}, req.body,{
//         new:true
//     });
//       if (!deleteStudent) {
//         return res.status(404).send();
//       }
//       res.send(deleteStudent);
//     } catch (e) {
//       res.status(500).send(e);
//     }
//   });
// app.listen(port, () => {
//     console.log(`connection is setup at ${port}`);
// });


// Express routers 
// Video 69
const express = require("express");
require("./db/conn");
const Student = require("./models/students");
const studentRouter = require("./routers/student");
const router = require("./routers/student");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`connection is setup at ${port}`);
});