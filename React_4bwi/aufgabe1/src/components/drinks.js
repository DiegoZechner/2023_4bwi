export default function drinks({ drinks }) {
  return (
    <div>
      <ul className="bg-cyan-600 cursor-pointer w-40 text-xl text-white p-4 mb-1 text-left">
        {drinks}
      </ul>
    </div>
  );
}
