import Sidebar from './Sidebar';
import MainBio from './MainBio';

export default function Home() {
  return (
      <div className="flex flex-col lg:flex-row px-4 py-6 max-w-7xl mx-auto gap-6">
        <Sidebar />
        <MainBio />
      </div>
  );
}
