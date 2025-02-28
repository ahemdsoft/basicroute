import { User } from "../models/user.js";

export const homepage = (req, res) => {
  res.render("index", {
    data: "Data",
  });
};
let i = 1;

export const genarate = async (req, res) => {
  const id1 = await User.findOne({ ide: 1 });
  if (!id1) {
    i = 1;
  }
  try {
    let employees = [];
    let names = [
      "anas",
      "ali",
      "rahim",
      "mohamed",
      "khaled",
      "fardin",
      "jahid",
      "sayhum",
      "likhon",
      "borhan",
    ];
    let descs = [
      "bangladesh",
      "pakistan",
      "egypt",
      "syria",
      "palestine",
      "iraq",
      "yemen",
      "sudan",
      "morocco",
      "tunisia",
    ];
    let isDoneOptions = [true, false, 1];
    let date;

    let nameIndex = Math.floor(Math.random() * names.length);
    let descIndex = Math.floor(Math.random() * descs.length);
    let isDoneIndex = Math.floor(Math.random() * isDoneOptions.length);

    // Check if an employee with the same name exists
    const oldemployee = await User.findOne({
      name: names[nameIndex],
      desc: descs[descIndex],
      isDone: isDoneOptions[isDoneIndex],
    });

    if (oldemployee) {
      console.log("Already exists:", oldemployee);
      return res.json({
        message: "Employee already exists",
        employee: oldemployee,
      });
    } else {
      const employee = await User.create({
        ide: i,
        name: names[nameIndex],
        desc: descs[descIndex],
        isDone: isDoneOptions[isDoneIndex],
        date: new Date(),
      });
      i++;

      console.log(employee);
      employees.push(employee);
      return res.json(employees);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const find = async (req, res) => {
  let user;
  user = await User.find(req.query).sort("isdone");
  if (user) {
    return res.json({ user });
  } else {
    return res.json({ name: "not found" });
  }
};


export const find2 = async (req, res) => {
  let user;
  user = await User.find(req.query).select("name").sort("name");
  if (user) {
    return res.json({ user });
  } else {
    return res.json({ name: "not found" });
  }
};


export const del = async (req, res) => {
  for (let i = 1; i < 11; i++) {
    const employee = await User.deleteMany({});

    console.log("deleted ");
  }

  res.send("deleted");
};
