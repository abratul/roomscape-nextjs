import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { formattedCounties } from '@/utils/counties';

const name = 'county';

function CountiesInput({ defaultValue }: { defaultValue?: string }) {
  return (
    <div className='mb-2'>
      <Label htmlFor={name} className='capitalize'>
        county
      </Label>

      <Select
        defaultValue={defaultValue || formattedCounties[0].code}
        name={name}
        required
      >
        <SelectTrigger id={name}>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          {formattedCounties.map((item) => {
            return (
              <SelectItem key={item.code} value={item.code}>
                <span className='flex items-center gap-2'>
                  {item.name}
                </span>
              </SelectItem>
            );
          })}
        </SelectContent>
      </Select>
    </div>
  );
}
export default CountiesInput;
