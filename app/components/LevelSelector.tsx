interface LevelSelectorProps {
  setLevel: (level: string) => void;
  currentLevel: string;
}

export default function LevelSelector({ setLevel, currentLevel }: LevelSelectorProps) {
  return (
    <div className="flex mb-4">
      {["calentando", "calentitos"].map(level => (
        <button
          key={level}
          className={`px-4 py-2 ${currentLevel === level ? 'bg-[#dfe7d1] text-[#092421] border border-[#dfe7d1]' : 'bg-[#092421] text-[#dfe7d1] border border-[#dfe7d1]'}`}
          onClick={() => setLevel(level)}
        >
          {level.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
