// ============================================================
//  PORTFOLIO DATA — Edit everything here.
//  To reorder sections, move the objects inside `sections[]`.
//  Each section has a `type` that maps to a Vue component.
// ============================================================

const portfolioData = {

  // ── HERO / IDENTITY ─────────────────────────────────────
  hero: {
    name: "Sarvesh Vengurlekar",
    title: "Aspiring Software Engineer",
    tagline: "Aspiring Software Engineer expertise's in Web Development, Data Science and Artificial Intelligence and Machine Learning.",
    photo: "assets/Self_Photo.jpg",   // Replace with your own image path
    email: "sarveshvengurlekarwork@gmail.com",
    // phone: "+1 (415) 000-0000",
    location: "Mumbai, Maharashtra, India",
    linkedin: "https://www.linkedin.com/in/sarvesh-vengurlekar-/",
    github: "https://github.com/sarveshvengurlekar",
  },

  // ── SECTIONS — reorder freely ────────────────────────────
  sections: [

    {
      type: "education",
      title: "Education",
      icon: "🎓",
      items: [
        {
          degree: "Bachelors of Engineering in Electronics and Telecommunication",
          institution: "Fr. Conceicao Rodrigues Institute of Technology (FCRIT)",
          period: "2023 – 2026",
          gpa: "6.46 / 10",
          details: "Secured official Copyright Registration for website & recognized as the primary developer for development of the Virtual Lab. "
        },
        {
          degree: "Diploma in Electrical Power System",
          institution: "Vidya Prasarak Mandal's (VPM) Polytechnic",
          period: "2020 – 2023",
          gpa: "78 / 100",
          details: "Final Year Capstone Project got selected for Department Representation for NBA Accreditation."
        }
      ]
    },

    {
      type: "skills",
      title: "Technical Skills",
      icon: "⚙️",
      subsections: [
        {
          label: "Programming & Development",
          items: ["Python", "Flask", "Streamlit", "SQLAlchemy", "Restful API", "HTML & CSS"]
        },
        {
          label: "Data Science",
          items: ["Python", "Pandas", "Numpy", "Matplotlib", "Scikit-Learn", "Power Bi", "SQL Queries"]
        },
        {
          label: "Artificial Intelligence & Machine Learning",
          items: ["Python", "PyTorch", "Scikit-Learn", "YOLO", "Ultralytics", "OpenCV", "Scipy", "Computer Vision (CV)"]
        },
        {
          label: "Programming Tools",
          items: ["Git & Github", "VS Code", "Jupyter Notebook", "Kaggle", "Power Bi", "Swagger UI"]
        }
      ]
    },

    {
      type: "experience",
      title: "Professional Experience",
      icon: "💼",
      items: [
        {
          role: "Python Developer Intern",
          company: " Fr. Conceicao Rodrigues Institute of Technology (FCRIT)",
          period: "Nov 2024 – Feb 2025",
          location: "Navi Mumbai, Maharashtra, India",
          highlights: [
            "Lead the planning, design and development of a full-stack web application, including the core signal processing modules.",
            "Enhanced learning engagement for 60+ students by implementing real-time visualization, improving conceptual understanding and interactivity.",
            "Built the application using a modern tech stack: HTML & CSS for frontend, Streamlit for backend, and NumPy & Matplotlib for signal processing and visualization.", 
            "Achieved Copyright Registration as the Primary Developer, formally establishing intellectual property ownership of the project."
          ]
        },
        {
          role: "PLC Programmer Intern",
          company: "Okeanos Technologies Pvt. Ltd.",
          period: "Jul 2022 – Aug 2022",
          location: "Thane, Maharashtra, India",
          highlights: [
            "Developed and implemented PLC and SCADA programs, including the design of HMI interfaces for effective industrial motor control and monitoring.", 
            "Reduced motor starting current by 33% by implementing an optimized Star-Delta motor control logic, improving electrical safety and system stability.", 
            "Worked with industrial automation technologies including PLC, SCADA, and HMI systems to deliver reliable and scalable control solutions.", 
            "Improved motor and overall system efficiency, leading to enhanced performance and high client satisfaction."
          ]
        }
      ]
    },

    {
      type: "projects",
      title: "Projects",
      icon: "🎛️",
      items: [
        {
          name: "Vertex AI",
          tech: ["Python", "Flask", "YOLO", "Ultralytics", "OpenCV", "NumPy"],
          description: [
            "Identified the lack of real-time AI models tailored for Indian road scenarios in autonomous vehicle applications.",
            "Assigned to build a real-time AI inference system, contributing to model training and GUI development.",
            "Trained and optimized a YOLO-based object detection model on Indian road data and developed a low-latency real-time inference pipeline using Flask for the backend and HTML/CSS for the frontend GUI.",
            "Achieved accuracy with a mAP@50 of 70% & low latency real time performance."
          ],
          link: "https://github.com/sarveshvengurlekar/Vertex"
        },
        {
          name: "Diabetes Prediction System",
          tech: ["Python", "NumPy", "Pandas", "Restful API","Scikit-learn", "Streamlit", "Logistic Regression"],
          description: [
            "Recognized the increasing prevalence of Diabetes in India and the need for an early-stage prediction system.",
            "Aimed to develop a machine learning-based system capable of predicting diabetes at early stages with reliable performance.",
            "Performed data preprocessing and trained a Logistic Regression-based classification model using Scikit-learn, NumPy, and Pandas.",
            "Achieved 73% classification accuracy with 64% precision, delivering deployed the model through a GUI and a RESTful API to enable real-time predictions."
          ],
          link: "https://github.com/sarveshvengurlekar/Diabetes_Prediction_System_Data_Science-"
        },
        {
          name: "Amazon Product Sales Analysis Dashboard",
          tech: ["Python", "Excel", "Power BI", "SQL Queries", "DAX Queries"],
          description: [
            "Identified the lack of actionable analytical insights available to Amazon vendors, limiting effective business decision-making.",
            "Objective was to develop an interactive dashboard that delivers actionable insights to support informed vendor decisions.",
            "Designed and developed a Power BI dashboard to analyse and visualize vendor data, leveraging DAX queries to generate key performance metrics and business insights.",
            "Empowered business stakeholders to make data-driven decisions by providing clear insights into product performance, regional demand patterns, and seasonal sales trends."
          ],
          link: "https://github.com/sarveshvengurlekar/amazon-Product-Sales-Analysis-Dashboard-"
        },
        {
          name: "Signal Processing Virtual Lab",
          tech: ["Python", "NumPy", "SciPy", "Matplotlib", "Streamlit"],
          description: [
            "Engineered a Signal Processing Virtual Lab as an intern, enabling interactive exploration of core signal processing concepts.",
            "Built a responsive frontend with HTML, CSS, and Streamlit, and implemented a Python-powered backend using NumPy, SciPy, Matplotlib, and Wave for advanced audio and ECG signal processing.",
            "Integrated features such as Nyquist sampling, signal operations, filtering (LPF, HPF, BPF), QRS filtration, and real-time time/frequency domain visualization.",
            "Enhanced learning engagement for 60+ students by implementing real-time visualization, improving conceptual understanding and interactivity."
          ],
          link: "https://sp-virtuallab.fcrit.ac.in/"
        }
      ]
    },

    {
      type: "certifications",
      title: "Certifications",
      icon: "🏅",
      items: [
        {
          name: "NASSCOM - Artificial Intelligence & Machine Learning",
          issuer: "NASSCOM FutureSkills Prime",
          date: "Mar 2026",
          credentialId: "FSP/2026/3/10261038",
          link: "https://drive.google.com/file/d/13Uw4nwwssgjVuK106YJSco7ufd3yznji/view?usp=drive_link"

        },
        {
          name: "NASSCOM - Data Science",
          issuer: "NASSCOM FutureSkills Prime",
          date: "Mar 2026",
          credentialId: "FSP/2026/3/10260836",
          link: "https://drive.google.com/file/d/1CZDf234gU0UH6oy72KvO-GziLJHev58q/view?usp=drive_link"
        },
        {
          name: "NASSCOM - Cloud Computing Engineering",
          issuer: "NASSCOM FutureSkills Prime",
          date: "Mar 2026",
          credentialId: "FSP/2026/3/10261039",
          link: "https://drive.google.com/file/d/1fbsFLo38ir1CUjXRacPW5p_pzXganWFx/view?usp=drive_link"
        },
        {
          name: "Microsoft - Power BI Data Analyst",
          issuer: "Microsoft",
          date: "Mar 2026",
          credentialId: "-",
          link: "https://drive.google.com/file/d/1NfcfLjnWVxi3TfDs_ovmqK9xNGUA5cwJ/view?usp=drive_link"
        },
        {
          name: "TalentNext - Data Science",
          issuer: "Wipro TalentNext",
          date: "Oct 2025",
          credentialId: "TNext_SE_25_DS_250480041 ",
          link: "https://drive.google.com/file/d/1813gPtNIk2ABA7MlhKE9GntHs1C-w7BY/view?usp=drive_link"
        }
      ]
    },

    {
      type: "achievements",
      title: "Achievements",
      icon: "🏆",
      items: [
        {
          title: "SP Virtual Lab Copyright",
          year: "2025",
          description: "Secured official Copyright Registration for the Signal Processing Virtual Lab & recognized as the primary developer."
        },
        {
          title: "Hackathon Finalist",
          year: "2025",
          description: "Got Shortlisted as Finalist among the top 6 teams out of 20 in a 30-hour Hackathon."
        },
        {
          title: "Network Security Program Completion",
          year: "2025",
          description: "Accomplished ISTE Approved Short-Term Training Program on Network Security: Concepts & Protocols."       
        },
        {
          title: "Special Mention in Hackathon",
          year: "2024",
          description: "Received a Special Mention in a Hackathon for Project's innovative design and first principle approach."
        },
        {
          title: "NBA Accreditation Representation",
          year: "2023",
          description: "Capstone Project got selected for representation in the NBA Accreditation."
        },
      ]
    },

    {
      type: "contact",
      title: "Get In Touch",
      icon: "✉️"
    }

  ]
};
