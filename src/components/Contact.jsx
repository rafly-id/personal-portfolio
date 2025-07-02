const Contact = () => {
  return (
    <section className="pb-[25px] md:pb-[50px] uppercase" id="contact">
      <h1 className="text-xs font-light mb-2 ml-5">Contact</h1>
      <div className="border-t bottom-0 left-0">
        <div className="text-sm flex justify-between items-center mx-5 mt-5 font-light -tracking-wider">
          <div>
            <div>Raf</div> // make link to home
            <div>Project</div> // make link to work
          </div>
          <div className="flex items-center gap-5">
            <div>Build with me</div>
            <div className="text-4xl font-black -tracking-widest">Let's Chat</div> // make link to email
          </div>
          <div>
            <div></div>
            <div>Instagram</div> // make link to instagram
            <div>Linkedin</div> // make link to linkedin
            <div>Github</div> // make link to github
            <div>Email</div> // make link to email
          </div>
        </div>
        <div>
          <div className="text-9xl font-black -tracking-widest justify-center items-center flex">Back To Top</div> // make when cursor click back to top pages
        </div>
      </div>
    </section>
  );
};

export default Contact;
