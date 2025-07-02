const Contact = () => {
  return (
    <section className="pb-[25px] md:pb-[50px] uppercase" id="contact">
      <h1 className="text-xs font-light mb-2 ml-5">Contact</h1>
      <div className="border-t bottom-0 left-0">
        <div className="text-sm flex justify-between items-center mx-5 mt-5 font-light -tracking-wider">
          <div>
            <div>Raf</div>
            <div>Project</div>
          </div>
          <div className="flex items-center gap-5">
            <div>Build with me</div>
            <div className="text-4xl font-black -tracking-widest">Let's Chat</div>
          </div>
          <div>
            <div></div>
            <div>Instagram</div>
            <div>Linkedin</div>
            <div>Github</div>
            <div>Email</div>
          </div>
        </div>
        <div>
          <div className="text-9xl font-black -tracking-widest justify-center items-center flex">Back To Top</div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
