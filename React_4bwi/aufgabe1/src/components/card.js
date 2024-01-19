export default function card({ cardName, job }) {
  return (
    <div className="shadow-2xl w-80">
      <img
        className="w-80"
        src="https://www.w3schools.com/howto/img_avatar.png"
        alt="Profilbild"
      ></img>
      <div className="p-3">
        <h3 className="font-bold pb-4">{cardName}</h3>
        <p>{job}</p>
      </div>
    </div>
  );
}
