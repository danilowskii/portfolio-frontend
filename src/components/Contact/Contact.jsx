const Contact = () => {
  const contacts = [
    {
      id: 1,
      phrase: "Whatsapp",
      link: "https://wa.me/5581991584695",
    },
    {
      id: 2,
      phrase: "LinkedIn",
      link: "https://www.linkedin.com/in/paivadanilo/",
    },
    {
      id: 3,
      phrase: "Github",
      link: "https://github.com/danilowskii",
    },
    {
      id: 4,
      phrase: "E-mail",
      link: "mailto:danilopaivatiotonho@gmail.com",
    },
  ];

  return (
    <div className="space-y-4 flex flex-row gap-10 my-auto w-full ">
      {contacts.map((contact) => (
        <a
          key={contact.id}
          href={contact.link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-[100px] h-[100px] rounded  bg-blue-200 "
        >
          <p>text={contact.phrase}</p>
        </a>
      ))}
    </div>
  );
};

export default Contact;
