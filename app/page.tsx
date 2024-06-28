import Image from "next/image";
import Header from "./components/Header";
import TabMenu from "./components/TabMenu";
import JobPreview from "./components/JobPreviewContent";
import ActionSection from "./components/ActionSection";
import CompanyFooter from "./components/Footer";

const jobData = {
  jobTitle: 'Senior Product Designer',
  postedDate: '2 days ago',
  status: 'Open',
  location: 'Delaware, USA',
  salaryRange: '$300k-$400k',
  skills: [
    // { icon: 'path/to/figma-icon.png', name: 'Figma' },
    // { icon: 'path/to/illustrator-icon.png', name: 'Adobe Illustrator' },
    // { icon: 'path/to/xd-icon.png', name: 'Adobe XD' },
  ],
  language: 'English',
  jobType: 'Full time',
  experience: '3+ Years of Experience',
  jobDescription: `
    1. Handle the UI/UX research design<br />
    2. Work on researching on latest web applications designs & trends<br />
    3. Work on conceptualizing and visualizing<br />
    4. Work on creating graphics content and other graphic related works<br />
    Benefits:<br />
    • Health insurance<br />
    • Provident Fund<br />
    Schedule:<br />
    • Day shift<br />
    Supplemental pay types:</strong><br />
    • Performance bonus<br />
    • Yearly bonus<br />
    Work Location: In person
  `
};

export default function Home() {
  return (
    <div >
    <div className="border b">
      <Header/>
    </div>
      <TabMenu/>
      <div className="flex max-w">
        <div className="w-3/4">
        <JobPreview {...jobData} />
        </div>
        <div className="w-1/4">
          <ActionSection/>
        </div>
      </div>
      <div className="border border-b-4">
      <CompanyFooter/>
      </div>

    </div>
  );
}
