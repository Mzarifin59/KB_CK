export default function Information({ title, description, background }) {
  return (
    <>
        <h1 className="font-bold text-3xl md:text-5xl mb-6 pt-serif" color={background}>
          {title}
        </h1>

        <p className="text-base font-normal mb-8 text-secondary-gray pt-serif">{description}</p>
    </>
  );
}
