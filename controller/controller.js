import { User } from "../models/user.js";



export const homepage = (req, res) => {
  res.render("index", {
    data: "Data"
  });
}
export const genarate = async (req, res) => {
   let employees = [];
    let names = ["anas", "ali", "ahmed", "mohamed", "khaled", "mohamed", "ahmed", "ali", "anas", "khaled"];
    let descs = ["bangladesh", "pakistan", "egypt", "syria", "palestine", "iraq", "yemen", "sudan", "morocco", "tunisia"];
    let isDoneOptions = [true, false];
  
    let nameIndex = Math.floor(Math.random() * names.length);
    let descIndex = Math.floor(Math.random() * descs.length);
    let isDoneIndex = Math.floor(Math.random() * isDoneOptions.length);
  
    // Check if an employee with the same name exists
    const oldemployee = await User.findOne({ name: names[nameIndex],isDone:isDoneOptions[isDoneIndex] });
  
    if (oldemployee) {
      console.log("Already exists:", oldemployee);
      return res.json({ message: "Employee already exists", employee: oldemployee });
    } else {
      let i=1;
      const employee = await User.create({
        ide: i,
        name: names[nameIndex],
        desc: descs[descIndex],
        isDone: isDoneOptions[isDoneIndex]
      });
      i++;
      console.log(employee);
      employees.push(employee);
      return res.json(employees);
    }}
    export const find = async (req,res )=>{  
        let user;
      user=await User.findOne({name:"anas"})
    if (user){
      return res.json({user})
    
    }
    else{
      return res.json({name:"not found"})}
    }
   export const del=async (req, res) =>{
         for (let i=1;i<11;i++){
          const employee=await User.deleteMany({name:"anas"})
        
        
          console.log("deleted ")}
          
          
          res.send("deleted");
        
        }
  