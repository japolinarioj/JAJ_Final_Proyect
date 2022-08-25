// const { url } = require("inspector");
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
      timeStamp: "October 15,2015", 
      
    },
    { 
        _id : uuidv4(),
        categories:"Macroeconomics",
        title:"What is it?",
        description:" Macroeconomics focuses on the performance of economies – changes in economic output, inflation, interest and foreign exchange rates, and the balance of payments. Poverty reduction, social equity, and sustainable growth are only possible with sound monetary and fiscal policies.",
        photo:"",
        username: "Luis",
        timeStamp: "May 15,2020", 

        
      },
      { 
        _id : uuidv4(),
        categories:"Macroeconomics",
        title:"Macroeconomic factors impact but unlikely to stall critical tech modernisation",
        description:" There could be momentary impacts on the pace of decision-making in certain sectors, he said but technology is bound to remain at the heart of competitive advantage, market relevance, and business resilience with organisations across industries going all out to drive innovative outcomes, continuous differentiation and sustainable growth in the new normal",
        photo:"",
        username:"Maria",
        timeStamp: "April 20,2022", 
      
      },
      { 
        _id : uuidv4(),
        categories:"Macroeconomics",
        title:"Bell Ringer: Macroeconomics vs. Microeconomics",
        description:"Economist and author Steven Levitt talks about microeconomics, macroeconomics and accidental experiments(https://www.c-span.org/classroom/document/?19510)",
        photo:"",
        username: "Connie",
        timeStamp: "April 20,2022", 

      },
      { 
        _id : uuidv4(),
        categories:"Microeconomics",
        title:"Genetic Endowments, Income Dynamics, and Wealth Accumulation Over the Lifecycle",
        description:" We develop and estimate a life-cycle consumption savings model in which observed genetic variation is allowed to affect wealth accumulation through several distinct channels. We focus on genetic markers that predict educational attainment, aggregated into a predictive index called a polygenic score",
        photo:"",
        username: "Edi",
        timeStamp: "April 10,2022", 
        
      },
      { 
        _id : uuidv4(),
        categories:"Microeconomics",
        title:"Consumer Demand with Social Influences: Evidence from an E-Commerce Platform",
        description:" For some kinds of goods, rarity itself is valued. Fashionable goods are demanded in part because they are unique. In this paper, we explore the economics of rare goods using auctions of limited-edition shoes held by an e-commerce platform. We model endogenous entry and bidding in multi-unit",
        photo:"",
        username: "Edi",
        timeStamp: "JAnuary 17,2022", 

        
      },
      { 
        _id : uuidv4(),
        categories:"Microeconomics",
        title:"Locus of Control and Prosocial Behavior",
        description:"We investigate how locus of control beliefs the extent to which individuals attribute control over events in their life to themselves as opposed to outside factors affect prosocial behavior and the private provision of public goods",
        photo:"",
        username: "Luis",
        timeStamp: "April 27,2022", 

        
      },
      { 
        _id : uuidv4(),
        categories:"Labor Economics",
        title:"Expert performance",
        description:"Expert performance is often evaluated assuming that good experts have good outcomes. We examine expertise in medicine and develop a model that allows for two dimensions of physician performance: decision making and procedural skill. Better procedural skill increases the use of intensive procedures for everyone, while better decision making results in a reallocation of procedures from fewer low-risk to high-risk cases. We show that poor diagnosticians can be identified using administrative data and that improving decision making improves birth outcomes by reducing C-section rates at the bottom of the risk distribution and increasing them at the top of the distribution.",
        photo:"",
        username: "Jack",
        timeStamp: " February 8,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Labor Economics",
        title:"Standard Aproach in Labor economics",
        description:"The standard approach in labor economics views human capital as a set of skills/characteristics that increase a worker’s productivity. This is a useful starting place, and for most practical purposes quite sufficient. Nevertheless, it may be causeful to distinguish between some complementary/alternative ways of thinking of human capital.",
        photo:"",
        username: "Maria",
        timeStamp: "April 27,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Econometrics",
        title:"Computational Economics",
        description:"The topics of Computational Economics include computational methods in econometrics like filtering, bayesian and non-parametric approaches, markov processes and monte carlo simulation",
        photo:"",
        username: "Pooh",
        timeStamp: "March 6,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Computational Economics",
        title:"Market Structure and Instability Artifacts in Heterogeneous Agent Models: Lessons from Implicit Discretizations of Stiff Equations",
        description:"We investigate how locus of control beliefs the extent to which individuals attribute control over events in their life to themselves as opposed to outside factors affect prosocial behavior and the private provision of public goods",
        photo:"",
        username: "Maria",
        timeStamp: "April 27,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Health Economics",
        title:"Locus of Control and Prosocial Behavior",
        description:"We investigate how locus of control beliefs the extent to which individuals attribute control over events in their life to themselves as opposed to outside factors affect prosocial behavior and the private provision of public goods",
        photo:"",
        username: "Ana",
        timeStamp: "April 27,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Health Economics",
        title:"Health Economics",
        description:"Health economics is used to promote healthy lifestyles and positive health outcomes through the study of health care providers, hospitals and clinics, managed care and public health promotion activities.",
        photo:"",
        username: "Json",
        timeStamp: "April 27,2022",
      },
      { 
        _id : uuidv4(),
        categories:"Health Economics",
        title:"Why?",
        description:"For example; investing in research and development for new cures and health care equipment. Governments usually subsidize for those who cannot afford insurance or, in certain situations, those low-cost activities and facilities that non-poor citizens can afford on their own.",
        photo:"",
        username: "Maria",
        timeStamp: "April 27,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Economics Development",
        title:"Cultural and Economic Develpment Changes",
        description:"On average, cultures with a higher concentration of values identified as an achievement orientation, relative to a concentration of values supported with a limited good belief, experience more rapid economic growth. In countries where independence is emphasized in children's upbringing, the economy will grow faster.",
        photo:"",
        username: "Luis",
        timeStamp: "June 7,2022",
        
      },
      { 
        _id : uuidv4(),
        categories:"Macroeconomics",
        title:"Central Bank Balance Sheets",
        description:"First up, are two charts that show the relationship between the size of the central bank balance sheets and inflation rates. The first one shows for the 2010-2019 period the average size of central bank balance sheets as a percent of NGDP plotted against the average core inflation rate.",
        photo:"",
        username: "Maria",
        timeStamp: "April 27,2022",
        
      },

    
  ];

  const Categories = [
    { 
      _id : uuidv4(),
      title: "Macroeconomics",
      url: "./assets/macro.jpg",
        },
    { 
      _id : uuidv4(),
      title: "Microeconomics",
      url:"./assets/micro.jpg"

        },
    { 
      _id : uuidv4(),
      title: "Econometrics",
      url:"./assets/econometrics.png"

        },
    { 
      _id : uuidv4(),
      title: "Labor Economics",
      url:"./assets/labor.jpg"

        }, 
    { 
      _id : uuidv4(),
      title: "Educational Economics",
      url:"./assets/school.jpg"

            },  
    { 
      _id : uuidv4(),
      title: "Economic Development",
      url:"./assets/develop.jpg"

            },
    { 
      _id : uuidv4(),
      title: "Health Economics",
      url:"./assets/health.png"

            },
   { 
    _id : uuidv4(),
     title: "Computational Economics",
     url:"./assets/computational.jpg"

            },
  { 
    _id : uuidv4(),
    title: "All",
    url:"./assets/Economics.jpg"

            },          
            

  
]
  module.exports = { Users, Blogs, Categories};
  