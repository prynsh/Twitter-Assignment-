import Image from "next/image";
import Header from "./components/Header";
import TabMenu from "./components/TabMenu";
import JobPreview from "./components/JobPreviewContent";
import ActionSection from "./components/ActionSection";
import CompanyFooter from "./components/Footer";

export default function Home() {
  return (
    <div>
    <div className="border b">
      <Header/>
    </div>
      <TabMenu/>
      <div className="flex max-w">
        <div className="w-3/4">

        <JobPreview/>
        </div>
        <div className="w-1/4">
          <ActionSection/>
        </div>
      </div>
      <CompanyFooter/>

    </div>
  );
}
