import featPhoto from "/Resources/hassanDev.png";

function AboutMe() {
  return (
    <section className="my-7 p-5 pb-0 bg-lime-100/10 rounded-xl">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-11">
        <div className="flex-1">
          <div className="w-full md:w-3/4 mx-auto flex items-center justify-center">
            <img src={featPhoto} alt="Featured" className="w-full" />
          </div>
        </div>
        <div className="flex-1 text-left">
          <h2 className="text-3xl text-lime-400 font-bold md:text-4xl py-5">
            A passionate React Front-end Developer.
          </h2>
          <p className="text-sm text-white/50 font-semibold mb-8 flex flex-col gap-7">
            <p>
              I’m currently working on React front-end projects, weaving
              together polished user interfaces with the power of Tailwind CSS,
              DaisyUI, Firebase, MongoDB, and deploying on Vercel. Passionate
              about leveraging these technologies to create dynamic and
              efficient web applications.
            </p>{" "}
            <p>
              Diving into the world of web development, I'm currently mastering
              Material-UI for sleek interfaces, exploring the depths of MongoDB
              with Mongoose for robust data handling, and honing my skills in
              Node.js and Next.js for server-side and frontend magic. Excited
              about the journey of building scalable and efficient applications
              with these cutting-edge technologies!
            </p>
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
