import { IconType } from 'react-icons';
import { MdApartment, MdCabin, MdHouse } from 'react-icons/md';

import { TbCaravan, TbTent, TbBuildingCottage } from 'react-icons/tb';

import { GiWoodCabin, GiMushroomHouse } from 'react-icons/gi';
import { PiWarehouse, PiLighthouse, PiVan } from 'react-icons/pi';

import { GoContainer } from 'react-icons/go';

type Category = {
  label: CategoryLabel;
  icon: IconType;
};

export type CategoryLabel =
  | 'apartment'
  | 'house'
  | 'cabin'
  | 'lodge'
  | 'cottage'
  | 'tent'
  | 'airstream'
  | 'caravan'
  | 'tiny'
  | 'warehouse';


export const categories: Category[] = [
  {
    label: 'apartment',
    icon: MdApartment,
  },
  {
    label: 'house',
    icon: MdHouse,
  },
  {
    label: 'cabin',
    icon: MdCabin,
  },
  {
    label: 'cottage',
    icon: TbBuildingCottage,
  },
  {
    label: 'lodge',
    icon: GiWoodCabin,
  },
  {
    label: 'airstream',
    icon: PiVan,
  },
  {
    label: 'tent',
    icon: TbTent,
  },
  {
    label: 'warehouse',
    icon: PiWarehouse,
  },

  {
    label: 'caravan',
    icon: TbCaravan,
  },

  {
    label: 'tiny',
    icon: PiLighthouse,
  },

];
