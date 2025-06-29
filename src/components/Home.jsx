const Home = () => {
  return (
    <section className="md:min-h-screen mx-20 mb-50 md:mb-0">
      <div>
        <div className="flex justify-center items-center mt-30 mb-20 md:mb-30">
          <img
            src="./src/assets/profile.jpeg"
            alt="profile"
            className="w-xs rounded-xl"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center -tracking-widest text-4xl md:text-9xl w-full font-oswald">
          <h1>RAFLY ADRIANSYAH</h1>
        </div>
      </div>
    </section>
  );
};

export default Home;
