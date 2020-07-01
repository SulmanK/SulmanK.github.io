
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Sulman Khan",
  title: "Hello, I'm Sulman",
  subTitle: emoji("A passionate data science enthusiast 📈 eager in applying analytics to business problems."),
  resumeLink: "https://drive.google.com/file/d/1N9K8fBnlNUTr4qQY0JK53S_w-P7uhSDO/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/SulmanK",
  linkedin: "https://www.linkedin.com/in/sulman-khan/",
  gmail: "sk@sulmanai.com",
  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: "Skills",
  subTitle: "Through rigorous coursework, I have deepened my understanding of Statistics, Experimental Design, Machine Learning, and Data Analysis. Furthermore, I have applied my expertise in these domains to solve business problems as demonstrated by my work experience and projects. ",
  skills: [
    emoji("⚡ Leveraged my data analysis, cleaning, database management, and predictive modeling skills for providing business solutions."),
	emoji("⚡ Utilize end-to-end machine learning design methodologies."),
    emoji("⚡ Deployment of applications using third-party services such as Docker, AWS, and Heroku.")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
	{
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
	
	{
      skillName: "r-project",
      fontAwesomeClassname: "fab fa-r-project"
    },

    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
	
	{
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },

    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Data Analysis",  //Insert stack or technology you have experience in
      progressPercentage: "95%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Statistics / Machine Learning",
      progressPercentage: "85%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Data Science & Market Research Intern",  
      company: "Fingercramp",
      companylogo: require("./assets/images/fingercrampLogo.webp"),
      date: "May 2018 – January 2020",
      desc: "",
      descBullets: [
		"Developed a character balancing model based on historical statistic performance and matchup characteristics.",
		"Setup and managed a PostgreSQL database to store match statistics for extensive querying involving multiple joins between tables and schemas.",
		"Designed viewership feedback surveys adhering to A/B testing design methodologies.",
		"Produced data visualization dashboard assets for the streaming platform.",
      ]
    },

  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "SulmanK", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Work-related Projects",
  subtitle: "Projects sponsored by organizations.",
  projects: [
    {
      image: require("./assets/images/capcom-pt-logo.webp"),
      link: "https://www.fingercramp.com/portfolio/capcom-pro-tour-2018/"
    },
 
  ]
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {

  title: emoji("Project Showcase"),
  subtitle: "",

  achivementsCards: [
    {
      title: "Predicting Customer Churn in World of Warcraft",
      subtitle: "World of Warcraft is a massively multiplayer online video game released on November 23, 2004 by Blizzard Entertainment. In contrast with traditional games only having a single upfront fee to play, WoW also has a monthly subscription to play the game. With customer subscriptions in mind, we can apply the use of churn prediction to not only predict whether a customer will unsubscribe from the service but explore the user’s playing behavior to obtain more insight into user playing patterns. The churn problem is somewhat complex due to the nature of not having a one size fits all solution – as different services define churn in a variety of ways. In this paper, we explore a dataset that focuses on one year from January 1, 2008 until December 31, 2008, as it highlights the release of a major content update in the game. Machine learning is used in two aspects of this paper: Survival Analysis and Binary Classification. Firstly, we explore the dataset using the Kaplan Meier estimator to predict the duration until a customer churns, and lastly predict whether a person will churn in six months using traditional machine learning algorithms such as Logistic Regression, Support Vector Machine, KNN Classifier, and Random Forests. From the survival analysis results, WoW customers have a relatively long duration until churn, which solidifies the addictiveness of the game. The best binary classification algorithm achieved a 96% ROC AUC score in predicting whether a customer will churn in six months.",
      image: require("./assets/images/World_of_Warcraft_logo.webp"),
      footerLink: [
		{ name: "Github", url: "https://github.com/SulmanK/Customer-Churn-in-World-of-Warcraft" },
        { name: "Publication", url: "https://arxiv.org/abs/2006.15735" },
        { name: "Code", url: "https://github.com/SulmanK/Customer-Churn-in-World-of-Warcraft/blob/master/Customer%20Churn%20in%20World%20of%20Warcraft.ipynb" },
        { name: "Application", url: "https://customer-churn-in-wow-app.herokuapp.com/" }
      ]
    },
    {
      title: "Clustering Player Behavior in PlayerUnknown's Battlegrounds for Hackers",
      subtitle: "Playerunknown's Battleground (PUBG) is a video game, which set the standard for preceding games in the Battle Royale genre. The main goal is to survive at all costs, as you are pitted against other human opponents in a large battlefield. Player Segmentation is a relatively new application in video game analytics. Being able to cluster certain groups to assess the efficiency of developers is a new avenue for maintaining and creating video games. Also, Player Segmentation can be used to identify players who are using a third-party software to gain an unfair advantage. Now, you must ask why can't these development teams have some sort of detection inside their video games to solve this problem. However, they do! The issue is that when the developers update their anti-cheat detection, the hackers will update their cheats. With that in mind, there will be certain periods where the hackers will run rampant because the developers have not patched in their updated protocols. My approach is to see if we can use Machine Learning, specifically Unsupervised Learning to cluster player game data to address this hacker issue.",
      image: require("./assets/images/PUBG_logo.webp"),
      footerLink: [
		{ name: "Github", url: "https://github.com/SulmanK/PUBG_clustering-player-behavior-for-cheaters" },
        { name: "Project Summary", url: "https://pubg-hacker-detection-summary.herokuapp.com" },
        { name: "Code", url: "https://github.com/SulmanK/PUBG_clustering-player-behavior-for-cheaters" },
        { name: "Application", url: "https://pubg-hacker-detection-app.herokuapp.com" }
      ]
    },

    {
      title: "Modelling Hard Drive Reliability",
      subtitle: "Data is an integral component of our society. From the simple caloric deficits collected in your apple watch to the user history in your Netflix account, data is used in a myriad of applications. With such an abundance of data being used daily, how is it stored? The solution is computer backup or cloud storage services. Furthermore, Backblaze is a world leader in computer backup and storage. Since 2013, Backblaze has published statistics and insights based on the hard drives used in their data center. Additionally, each hard drive manufacturer records various  S.M.A.R.T attributes (features), in which they deem valuable. Our objective is to improve upon Backblaze's baseline model in predicting hard drive failure by investigating additional S.M.A.R.T attributes. ",
      image: require("./assets/images/backblaze_logo.webp"),
      footerLink: [
		{ name: "Github", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure" },
        { name: "Report", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure/blob/master/Predicting%20Hard%20Drive%20Failure_Report.pdf" },
        { name: "Code", url: "https://github.com/SulmanK/Predicting-Hard-Drive-Failure/blob/master/Backblaze.ipynb" },
      ]
    },
    
  ]
};



// Blogs Section

const blogSection = {



  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description: "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description: "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ]
};

// Talks Sections

const talkSection = {


  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ]
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: ["https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"]
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "",
  number: "(718)-755-6739",
  email_address: "sk@sulman@ai.com"
};



const twitterDetails = {

  
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, bigProjects, achievementSection, blogSection, talkSection, contactInfo, podcastSection, twitterDetails};
