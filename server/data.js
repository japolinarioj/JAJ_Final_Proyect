const {v4:uuidv4} = require("uuid");


const Users = [
    {   
      _id:uuidv4(),
      username: {
        type: "jackelyn",
        required: true,
        unique:true,
      },
      email:{
        type: "jackelyn@concordia.ca",
        required: true,
        unique:true,
      },
      password:{
        type:"123456",
        required:true,
      },
      profile:{
        type:"",
        default:"",
      },
      timestamp: true
    },
    {   
        _id:uuidv4(),
        username: {
          type: "jackelyn",
          required: true,
          unique:true,
        },
        email:{
          type: "jackelyn@concordia.ca",
          required: true,
          unique:true,
        },
        password:{
          type:"123456",
          required:true,
        },
        profile:{
          type:"",
          default:"",
        },
        timestamp: true
      },
      {   
        _id:uuidv4(),
        username: {
          type: "jackelyn",
          required: true,
          unique:true,
        },
        email:{
          type: "jackelyn@concordia.ca",
          required: true,
          unique:true,
        },
        password:{
          type:"123456",
          required:true,
        },
        profile:{
          type:"",
          default:"",
        },
        timestamp: true
      },
      {   
        _id:uuidv4(),
        username: {
          type: "jackelyn",
          required: true,
          unique:true,
        },
        email:{
          type: "jackelyn@concordia.ca",
          required: true,
          unique:true,
        },
        password:{
          type:"123456",
          required:true,
        },
        profile:{
          type:"",
          default:"",
        },
        timestamp: true
      },
      {   
        _id:uuidv4(),
        username: {
          type: "jackelyn",
          required: true,
          unique:true,
        },
        email:{
          type: "jackelyn@concordia.ca",
          required: true,
          unique:true,
        },
        password:{
          type:"123456",
          required:true,
        },
        profile:{
          type:"",
          default:"",
        },
        timestamp: true
      },
  ];

  const Blogs = [
    { _id:uuidv4(),
      title: {
        type: "Microeconomics",
        required: true,
        unique:true,
      },
      description:{
        type: "Love Microeconomics",
        required: true,
      },
      photo:{
        type:"123456",
        required:false,
      },
      username:{
        type:"",
        required:true,
      },
      categories:{
        type:[],
        required:false,
      },
      timestamp: true

    },
    {   _id:uuidv4(),
        title: {
          type: "Macroeconomics",
          required: true,
          unique:true,
        },
        description:{
          type: "Macroeconomics rocks",
          required: true,
          unique:true,
        },
        photo:{
          type:"123456",
          required:false,
        },
        username:{
            type:"",
            required:true,
          },
          categories:{
            type:[],
            required:false,
          },
        timestamp: true
        
      },
      { _id:uuidv4(),
        title: {
          type: "Home Economics",
          required: true,
          unique:true,
        },
        description:{
          type: "is is worht it?",
          required: true,
          unique:true,
        },
        photo:{
          type:"123456",
          required:false,
        },
        username:{
            type:"",
            required:true,
          },
          categories:{
            type:[],
            required:false,
          },
        timestamp: true
      
      },
  ];

  const Categories = [
    {   _id:uuidv4(),
      title: {
        type: "Microeconomics",
        required:true,
        
      },
      timestamp: true

    },
    {   _id:uuidv4(),
        title: {
          type: "Macroeconomics",
          required:true,
          
        },
        timestamp: true
  
      },
      {   _id:uuidv4(),
        title: {
          type: "Econometrics",
          required:true,
          
        },
        timestamp: true
  
      },
      {   _id:uuidv4(),
        title: {
          type: "Labor Economics",
          required:true,
          
        },
        timestamp: true
  
      },
      {   _id:uuidv4(),
        title: {
          type: "Health Economics",
          required:true,
          
        },
        timestamp: true
  
      },
      {   _id:uuidv4(),
        title: {
          type: "Public Economics",
          required:true,
          
        },
        timestamp: true
  
      },
      {   _id:uuidv4(),
        title: {
          type: "Economic Development",
          required:true,
          
        },
        timestamp: true
  
      },
]
  module.exports = { Users, Blogs, Categories};
  