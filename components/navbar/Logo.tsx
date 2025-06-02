import Link from 'next/link';
import { LuHotel } from 'react-icons/lu';
import { Button } from '../ui/button';

function Logo() {
  return (
    <Button size="icon" asChild>
      <Link href="/">
        <LuHotel className="w-6 h-6" />
      </Link>
    </Button>
  );
}

export default Logo;
