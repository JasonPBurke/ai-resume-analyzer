interface Suggestion {
  type: 'good' | 'improve';
  tip: string;
}

interface ATSProps {
  score: number;
  suggestions: Suggestion[];
}

const ATS = ({ score, suggestions }: ATSProps) => {
  const bgClass =
    score > 70
      ? 'from-green-100'
      : score > 49
      ? 'from-yellow-100'
      : 'from-red-100';

  const icon =
    score > 70
      ? '/icons/ats-good.svg'
      : score > 49
      ? '/icons/ats-warning.svg'
      : '/icons/ats-bad.svg';

  return (
    <div
      className={`rounded-lg p-6 bg-gradient-to-b ${bgClass} to-white shadow-md`}
    >
      <div className='flex items-center gap-4 mb-4'>
        <img src={icon} alt='ATS score icon' className='w-12 h-12' />
        <h2 className='text-2xl font-bold'>ATS Score - {score}/100</h2>
      </div>

      <div className='space-y-4'>
        <h3 className='text-lg font-semibold'>
          How to improve your resume
        </h3>
        <p className='text-gray-600'>
          Based on our analysis, here are suggestions to improve your
          resume's ATS compatibility:
        </p>

        <ul className='space-y-2'>
          {suggestions.map((suggestion, index) => (
            <li key={index} className='flex items-start gap-2'>
              <img
                src={
                  suggestion.type === 'good'
                    ? '/icons/check.svg'
                    : '/icons/warning.svg'
                }
                alt={
                  suggestion.type === 'good'
                    ? 'Good practice'
                    : 'Needs improvement'
                }
                className='w-5 h-5 mt-0.5'
              />
              <span
                className={
                  suggestion.type === 'good'
                    ? 'text-green-600'
                    : 'text-yellow-600'
                }
              >
                {suggestion.tip}
              </span>
            </li>
          ))}
        </ul>

        <p className='pt-2 italic text-sm text-gray-500'>
          Implement these changes to improve your resume's performance in
          applicant tracking systems.
        </p>
      </div>
    </div>
  );
};

export default ATS;
