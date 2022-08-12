const { v4: uuidv4 } = require("uuid");


const Users = [
    {   
      username: " Jackelyn",
      email:"jackelyn@concordia.ca",
      password:"12345",
      picture:"", 
    },
    {   
        username: " Edi",
        email:"edi@concordia.ca",
        password:"12345",
        picture:"", 
      },
      {   
        username: " Jorge",
        email:"jorge@concordia.ca",
        password:"12345",
        picture:"", 
      },
      {   
        username: " Jack",
        email:"jack@concordia.ca",
        password:"12345",
        picture:"", 
      },
  ];

  const Blogs = [
    { 
      _id : uuidv4(),
      categories:"Macroeconomics",
      title:" Let's talk about Economics",
      description:" Economics is fun",
      photo:"",
      username: "Jorge",
      
    },
    { 
        _id : uuidv4(),
        categories:"Microeconomics",
        title:"Boring economics",
        description:" Economics is boring",
        photo:"",
        username: "Edi",
        
      },
    
  ];

  const Categories = [
    { 
      _id : uuidv4(),
      title: "Macroeconomics",
        },
    { 
      _id : uuidv4(),
      title: "Microeconomics",
        },
    { 
      _id : uuidv4(),
      title: "Econometrics",
        },
    { 
      _id : uuidv4(),
      title: "Labor Economics",
        }, 
    { 
      _id : uuidv4(),
      title: "Health Economics",
            },  
    { 
      _id : uuidv4(),
      title: "Economic Development",
            },
    { 
      _id : uuidv4(),
      title: "Health Economics",
            },
   { 
    _id : uuidv4(),
     title: "Computational Economics",
            },
  { 
    _id : uuidv4(),
    title: "Other Fields",
            },          
            

  
]
  module.exports = { Users, Blogs, Categories};
  