const Student = require('../models/Student');
const Interviews = require('../models/Interviews');
module.exports.create = async (req,res) => {
    try{
        const check = await Student.findOne({email:req.body.email});
        console.log("check", check);
        if(check){
            console.log("student already present");
            return res.status(200).json({
                message:"Student already present!",
            })
        }
        const student = await Student.create({
            name:req.body.email,
            email:req.body.email,
            batch:req.body.batch,
            college:req.body.college,
            status:req.body.status,
            courses_scores:[
                {
                    dsa:req.body.dsa,
                },
                {
                    webD:req.body.webD,
                },
                {
                    dsa:req.body.dsa,
                }
            ],
            interviews:[
                {
                    company_name:req.body.company_name,
                    date_of_interview:req.body.date_of_interview,
                    result:req.body.result,
                    //how to set the id given by db to the id of the interview document just to make it easy else no need
                }
            ]
        });
        console.log("student is successfully created!", student);
        return res.status(200).json({
            message:"Student Document Created Successfully!",
            student,
        })
    }catch(err){
        console.log("errror occured while craeating the student document!", err);
        return res.status(400).json({
            message:"errror occured while craeating the student document!",
            err,
        })
    }

}

module.exports.update = async (req, res) => {
    //here passing the eamil to add the interview in the specified student.
    try{
        const createStudent = await Student.findOne({email:req.body.email});
        const interview = {
            company_name:req.body.company_name,
            date_of_interview:req.body.date_of_interview,
            result:req.body.result,
        }
        createStudent.interviews.push(interview);
        createStudent.save();
        
        //checking whether the added interview is present in the Interviews Collection or not,
        //if present then continue else create the interview document and add the student id into it.

        const check = await Interviews.findOne({company_name:req.body.company_name});
        if(!check){
            await Interviews.create({
                company_name:req.body.company_name,
                date_of_interview:req.body.date_of_interview,
                students:[
                    {
                        student:createStudent._id,
                        result:req.body.result,
                    }
                ]
            })
        }else{
            check.students.push({
                student:createStudent._id,
                result:req.body.result,
            })
        }

        return res.status(200).json({
            message:"Interview added successfully in the student document!",
        })
    }catch(err){
        console.log("error while adding the interview into student document",err);
        return res.status(200).json({
            message:"error while adding the interview into student document",
            err,
        })
    }
}

module.exports.all = async (req, res) => {
    try{
        const students = await Student.find({});
        return res.status(200).json({
            message:"Here is a list of all students",
            students,
        })
    }catch(err){
        console.log("error while fetching all the students from the DB!", err);
        return res.status(200).json({
            message:"error while fetching all the students from the DB!",
        })
    }
    
}