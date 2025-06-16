export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="grid grid-cols-5 grid-rows-5 gap-4 after:">
        <div className="col-span-2 border-1 text-center justify-center items-center p-14 text-3xl border-blue-800 bg-blue-300 text-black">
          Isabela Bejerea
        </div>
        <div className="col-span-2 row-span-4 row-start-2 border-1 text-center border-blue-300 text-black">
          <img
            alt="Headshot of me"
            className="sm:object-fill"
            src="meee.jpeg"
          />
          <p className="text-blue-400 p-2">
            This is a picture of me, dated to May of 2025.
          </p>
        </div>
        <div className="col-span-2 row-span-4 col-start-4 row-start-2 border-1 text-center border-blue-800 bg-blue-400 text-blue-400">
          <br />
          <br />
          <br />
          <div className="flex border-1 text-center border-orange-700 bg-orange-400 text-black p-2">
            I am 14 years old, and I live near Seattle, Washington. I go to
            Skyline High school as a freshman. I grew up in Chicago, and I have
            experience babysitting that dates back to when I was 6. My hobbies
            include drawing, writing, and hiking.
          </div>
          <br />
          <br />
          <br />
          <div className="flex border-1 text-black text-center p-2 border-gray-600 bg-gray-400">
            Despite the fact I am only 14, I have several qualifications for a
            job. I have done volunteer work at my local elementary school,
            babysat for my parents on multiple occasions, have written an online
            book, and I maintain good grades in school. I make sure to always
            show up on time, ready to work no matter when the job starts. Not to
            mention, I also have completed a big art installation project that
            the preschoolers at Skyline loved.
          </div>
        </div>
      </div>
    </section>
  );
}
