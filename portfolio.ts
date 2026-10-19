/** Centralized, factual portfolio content for Harshal Chatur. */
export type Palette = { from: string; via: string; to: string; accent: string };
const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const profile = {
  fullName: 'Harshal Dhananjay Chatur', displayName: 'Harshal Chatur', firstName: 'HARSHAL',
  seriesTag: 'THE DEVELOPER SERIES', originalLabel: 'A HARSHAL CHATUR ORIGINAL',
  role: 'Data Science & AI Student', tagline: ['Data Science', 'AI / ML', 'Web Development'],
  intro: 'I’m Harshal Chatur, a B.Tech student in Data Science and Artificial Intelligence at G H Raisoni College of Engineering & Management, Nagpur. I enjoy exploring Python, data-driven problem-solving, AI concepts, and web development while building practical projects.',
  location: 'Nagpur, Maharashtra, India', email: 'harshalchatur44@gmail.com',
  links: { linkedin: 'https://www.linkedin.com/in/harshal-chatur-6aa688378', github: 'https://github.com/Harshal2006-op' },
  resumePdf: '', portrait: { src: '/assets/harshal-headshot.png', srcSet: '/assets/harshal-headshot.png 900w', alt: 'Professional portrait of Harshal Chatur' },
  interests: ['Data Science', 'Artificial Intelligence', 'Machine Learning Fundamentals', 'Web Development', 'Problem Solving'],
};

export const education = [{ school: 'G H Raisoni College of Engineering & Management', place: 'Nagpur, Maharashtra', degree: 'Bachelor of Technology — Data Science and Artificial Intelligence', period: '2024 – 2028', score: 'Semester V · Currently studying' }];
export const experience = [{ company: 'Independent Learning & Projects', role: 'Student Developer', place: 'Nagpur, India', period: 'Ongoing', points: ['Building practical web projects and strengthening programming fundamentals.', 'Exploring data science, AI concepts, and machine learning fundamentals through coursework and independent learning.'] }];
export type Metric = { value: string; label: string };
export type Project = { id: string; title: string; year: string; genre: string; logline: string; stack: string[]; build: string[]; features: string[]; metrics: Metric[]; github?: string; liveUrl?: string; palette: Palette; motif: 'shield' | 'flow' | 'tenants' };
export const projects: Project[] = [
  { id: 'medibot-ai', title: 'MediBot-AI', year: 'Live Website', genre: 'Healthcare Technology • Web Development', logline: 'A healthcare-focused website for exploring health information and discovering relevant healthcare resources through a digital interface.', stack: ['Web Development', 'AI-Assisted Features', 'Healthcare Technology', 'UI Design'], build: ['Developed a healthcare-focused digital experience with information discovery features.', 'The site includes features related to doctor and hospital discovery, health offers, symptom-related analysis, medicine information, and AI-assisted health insights.'], features: ['Doctor and hospital discovery', 'Health offers exploration', 'Symptom-related analysis features', 'Medicine information', 'AI-assisted health insights'], metrics: [], liveUrl: 'https://medibot-ai-c22fe.web.app/', palette: { from: '#062018', via: '#0d654c', to: '#070a0a', accent: '#46e3a8' }, motif: 'shield' },
  { id: 'messmind-ai', title: 'MessMind AI', year: 'Proposed Project', genre: 'Data Science • ML Concept • Sustainability', logline: 'A proposed hostel meal-demand prediction concept to support better meal planning and reduce avoidable food waste.', stack: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'], build: ['The proposed system would explore historical meal consumption, attendance, day of week, menu preferences, examination periods, and weather as potential demand-related factors.', 'The goal is to support more informed meal planning while reducing avoidable waste and minimizing the risk of food shortages.'], features: ['Planned historical meal-demand analysis', 'Potential daily demand estimation', 'Data visualization concept', 'Possible food-waste monitoring dashboard'], metrics: [], palette: { from: '#1b1203', via: '#73501b', to: '#090806', accent: '#ffb547' }, motif: 'flow' },
];
export type Achievement = { id: string; title: string; org: string; detail: string; laurel: string; link?: string };
export const achievements: Achievement[] = [{ id: 'tb-mukt-quiz', title: 'TB Mukt Bharat Abhiyan Quiz', org: 'MY Bharat', detail: 'Quiz certificate dated 12 September 2026.', laurel: 'Quiz Certificate' }];
export type Certification = { issuer: string; name: string; link: string };
export const certifications: Certification[] = [];
export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };
export const skillCategories: SkillCategory[] = [
 { id:'languages', title:'Programming Languages', subtitle:'Programming foundations', skills:[{name:'Python',mono:'Py'},{name:'C',mono:'C'},{name:'C++',mono:'C+'}] },
 { id:'frontend', title:'Web Development', subtitle:'Building for the web', skills:[{name:'HTML',mono:'Ht'},{name:'CSS',mono:'Cs'},{name:'JavaScript',mono:'Js'},{name:'React',mono:'Re'}] },
 { id:'data', title:'Data Science & AI', subtitle:'Core learning areas', skills:[{name:'Data Analysis',mono:'DA'},{name:'Data Visualization',mono:'DV'},{name:'Artificial Intelligence Fundamentals',mono:'AI'},{name:'Machine Learning Fundamentals',mono:'ML'},{name:'NumPy',mono:'Np'},{name:'Pandas',mono:'Pd'}] },
 { id:'tools', title:'Databases & Tools', subtitle:'Development essentials', skills:[{name:'SQL Fundamentals',mono:'SQL'},{name:'Git',mono:'Gt'},{name:'GitHub',mono:'GH'}] },
];
export const skillEvidence: Record<string, string[]> = { Python:['MediBot-AI / data science learning'], 'HTML':['Web development'], 'CSS':['Web development'], 'JavaScript':['Web development'], React:['Portfolio development'], 'Data Analysis':['MessMind AI proposed concept'], 'Machine Learning Fundamentals':['MessMind AI proposed concept'] };
export type Episode = { code: string; title: string; description: string; tags: string[]; runtime: string; palette: Palette };
export type Season = { number: number; title: string; period: string; synopsis: string; episodes: Episode[] };
export const seasons: Season[] = [
 { number:1, title:'The Foundation', period:'2024 – Present', synopsis:'Studying Data Science and Artificial Intelligence while strengthening computing and programming fundamentals.', episodes:[{code:'S01 E01',title:'The Student',description:'B.Tech in Data Science and Artificial Intelligence at G H Raisoni College of Engineering & Management, Nagpur.',tags:['B.Tech','Data Science','AI'],runtime:'2024 – 2028',palette:violet}] },
 { number:2, title:'Building for the Web', period:'Ongoing', synopsis:'Learning by creating web experiences and practical digital projects.', episodes:[{code:'S02 E01',title:'MediBot-AI',description:'A healthcare-focused website with health information discovery and AI-assisted insights.',tags:['Web Development','Healthcare Technology'],runtime:'Live website',palette:jade}] },
 { number:3, title:'Ideas with Data', period:'In planning', synopsis:'Exploring how data science can help with everyday planning and sustainability challenges.', episodes:[{code:'S03 E01',title:'MessMind AI',description:'A proposed hostel meal-demand prediction and food-waste reduction concept. Implementation and results are not claimed.',tags:['Python','Data Science','Proposed Project'],runtime:'Concept stage',palette:amber}] },
];
export type TopPick = { label: string; title: string; detail: string; palette: Palette };
export const topPicks: TopPick[] = [
 {label:'Current focus',title:'Data Science & AI',detail:'B.Tech student · Semester V',palette:violet},
 {label:'Live website',title:'MediBot-AI',detail:'Healthcare-focused web project',palette:jade},
 {label:'Proposed concept',title:'MessMind AI',detail:'Meal demand planning and food-waste reduction',palette:amber},
 {label:'Learning stack',title:'Python & Web',detail:'Programming, web development and data fundamentals',palette:ocean},
];
export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };
export const introSlides: IntroSlide[] = [
 {kicker:'Education',title:'B.Tech · Data Science & AI',lines:['G H Raisoni College of Engineering & Management, Nagpur','2024 – 2028 · Semester V'],chips:['Data Science','Artificial Intelligence']},
 {kicker:'Skills',title:'Learning by building.',lines:['Python, C, C++ · HTML, CSS, JavaScript, React','Data analysis, SQL and machine learning fundamentals'],chips:['Python','Web Development','Data Science']},
 {kicker:'Project',title:'MediBot-AI',lines:['Healthcare-focused website for health information discovery','Live website available to explore']},
 {kicker:'Proposed Project',title:'MessMind AI',lines:['Hostel meal-demand prediction concept','Planned use of historical consumption and contextual data']},
 {kicker:'Current mission',title:'Keep learning. Keep building.',lines:['Strengthening programming, analytical thinking and software development','Interested in internships, collaboration and practical projects']},
];
export type ProfileId = 'harshal' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';
export const viewerProfiles: { id: ProfileId; name: string; blurb: string; color: string; order: SectionId[] }[] = [
 {id:'harshal',name:'Harshal',blurb:'The full series, in order',color:'#e5132b',order:['about','journey','originals','picks','skills','moments','story']},
 {id:'recruiter',name:'Recruiter',blurb:'Education, projects & skills first',color:'#4cc9ff',order:['story','skills','originals','about','journey','picks','moments']},
 {id:'developer',name:'Developer',blurb:'Projects and technology first',color:'#46e3a8',order:['originals','skills','journey','about','picks','moments','story']},
 {id:'creative',name:'Explorer',blurb:'Highlights and learning journey',color:'#ffb547',order:['journey','picks','originals','about','skills','moments','story']},
];
export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
 about:{nav:'About',card:'About Me',meta:'Student profile',palette:violet},
 journey:{nav:'Journey',card:'My Journey',meta:`${seasons.length} chapters · learning and projects`,palette:amber},
 originals:{nav:'Projects',card:'My Projects',meta:`${projects.length} featured projects`,palette:crimson},
 picks:{nav:'Highlights',card:'Highlights',meta:'Selected interests and work',palette:jade},
 skills:{nav:'Skills',card:'My Skills',meta:`${skillCategories.length} skill groups`,palette:ocean},
 moments:{nav:'Certificate',card:'Certificate',meta:'Verified information supplied',palette:crimson},
 story:{nav:'Profile',card:'Profile Summary',meta:'Education, skills and projects',palette:violet},
};
