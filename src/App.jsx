import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import { resumeData } from './data/resumeData';
import SkillBadge from './components/SkillBadge';

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto pt-20 pb-10 px-6">
        <h1 className="text-6xl font-extrabold tracking-tight text-slate-900">
          {resumeData.name}
        </h1>
        <p className="text-2xl text-blue-600 mt-4 font-medium">
          {resumeData.role}
        </p>

        <div className="flex gap-5 mt-8 items-center">
          <a href="#" className="hover:text-blue-600 transition-colors">
            <Linkedin size={28} />
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            <Github size={28} />
          </a>
          <a href="#" className="hover:text-blue-600 transition-colors">
            <Mail size={28} />
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {resumeData.skills.map((skill) => (
            <SkillBadge key={skill} name={skill} />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;
