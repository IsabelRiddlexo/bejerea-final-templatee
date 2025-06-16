export default function AboutPage() {
  return (
    <div>
      <div className="grid grid-cols-5 grid-rows-6 gap-4">
        <div className="col-span-3 col-start-2 border-2 border-blue-700 bg-blue-400 p-7 text-black">
          Brief overview of skills I possess
        </div>
        <div className="col-start-2 row-start-3 border-2 border-orange-700 bg-orange-400 text-black p-8">
          Time management
        </div>
        <div className="col-span-2 col-start-3 row-start-3 border-2 border-blue-600 bg-blue-300 text-black p-1">
          As mentioned before, I only had three months to create a rocking horse
          out of cardboard. Despite this, I managed to plan it out with my team
          and finish just in time.
        </div>
        <div className="col-start-2 row-start-4 border-2 border-orange-700 bg-orange-400 text-black p-8">
          Planning
        </div>
        <div className="col-span-2 col-start-3 row-start-4 border-2 border-blue-600 bg-blue-300 text-black p-1">
          I have a lot of experience with short time frames and complicated
          projects. Many of them, like my writing, require drawn out plans so as
          to utilize the time alotted to me.
        </div>
        <div className="col-start-2 row-start-5 border-2 border-orange-700 bg-orange-400 text-black p-8">
          Teamwork
        </div>
        <div className="col-span-2 col-start-3 row-start-5 border-2 border-blue-600 bg-blue-300 text-black p-1">
          I have been in many groups for school-related projects, and I have
          always been sure to collaborate with my group, whether I am compatible
          with my teammates or not.
        </div>
      </div>
    </div>
  );
}
