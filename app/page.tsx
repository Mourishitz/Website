import { Hero } from "@/app/components/hero";
import { Stats } from "@/app/components/stats";
import { Timeline } from "@/app/components/timeline/timeline";


export default function Home() {
  return (
    <>
      <Hero />
      <div className="container mx-auto px-4">
      <Stats />
      <br />
      <br />
        {/* <h2 className="text-3xl font-bold text-center">My journey into programming</h2> */}
      <Timeline />
      </div>
    </>
  );
}
