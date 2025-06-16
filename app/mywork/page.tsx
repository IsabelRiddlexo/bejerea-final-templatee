export default function AboutPage() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="h-full flex justify-center items-center gap-4">
        <div className="border-2 border-blue-500">
          <img alt="rocking horse" src="woah.jpeg" />
        </div>

        <h5 className="border-2 border-green-700 bg-green-400 p-2">
          In 9th grade, I was assigned a team to create an instillation project.
          There was only one rule: it had to be made completely out of
          cardboard. We worked for three months, and the end project was on
          display in the halls. The preschoolers at Skyline viewed all the
          projects and absolutely loved ours.
        </h5>
      </div>
      <div className="grid grid-cols-5 grid-rows-4 gap-4">
        <div className="col-start-2 row-start-5 border-2 border-orange-700 bg-orange-500 p-2">
          I also have babysat my two younger siblings on many occasions, since
          both my parents have to go in to work sometimes.
        </div>
        <div className="col-start-3 row-start-5 border-2 border-blue-700 bg-blue-400 p-1">
          I also have much experience writing, as two of my works have went
          popular on their respected platforms. I also tend to score high on my
          essays for school.
        </div>
        <div className="col-start-4 row-start-5 border-2 border-gray-800 bg-gray-500 p-1">
          My parents have also hired me to clean the house, doing services such
          as washing dishes, doing laundry, and vaccuming the house.
        </div>
      </div>
    </section>
  );
}
