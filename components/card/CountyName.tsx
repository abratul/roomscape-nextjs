import { findCountyByCode } from '@/utils/counties';

function CountyName({ countyCode }: { countyCode: string }) {
  const validCounty = findCountyByCode(countyCode);

  if (!validCounty) return null;

  const countyName =
    validCounty.name.length > 20
      ? `${validCounty.name.substring(0, 20)}...`
      : validCounty.name;

  return (
    <span className='flex items-center gap-2 text-sm'>
      {countyName}
    </span>
  );
}

export default CountyName;
