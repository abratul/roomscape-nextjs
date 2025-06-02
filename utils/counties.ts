// utils/formattedCounties.ts

export const romanianCounties = [
  { code: 'AB', name: 'Alba', location: [46.0667, 23.5833] },
  { code: 'AR', name: 'Arad', location: [46.1833, 21.3167] },
  { code: 'AG', name: 'Argeș', location: [44.8667, 24.8833] },
  { code: 'BC', name: 'Bacău', location: [46.5833, 26.9167] },
  { code: 'BH', name: 'Bihor', location: [47.0667, 21.9333] },
  { code: 'BN', name: 'Bistrița-Năsăud', location: [47.1333, 24.5] },
  { code: 'BR', name: 'Brăila', location: [45.2667, 27.9667] },
  { code: 'BT', name: 'Botoșani', location: [47.75, 26.6667] },
  { code: 'BV', name: 'Brașov', location: [45.6667, 25.6167] },
  { code: 'B',  name: 'București', location: [44.4268, 26.1025] },
  { code: 'BZ', name: 'Buzău', location: [45.15, 26.8167] },
  { code: 'CS', name: 'Caraș-Severin', location: [45.3, 21.8833] },
  { code: 'CL', name: 'Călărași', location: [44.2, 27.3333] },
  { code: 'CJ', name: 'Cluj', location: [46.7667, 23.6] },
  { code: 'CT', name: 'Constanța', location: [44.1833, 28.65] },
  { code: 'CV', name: 'Covasna', location: [45.85, 26.1833] },
  { code: 'DB', name: 'Dâmbovița', location: [44.9333, 25.45] },
  { code: 'DJ', name: 'Dolj', location: [44.3167, 23.8] },
  { code: 'GL', name: 'Galați', location: [45.4333, 28.05] },
  { code: 'GR', name: 'Giurgiu', location: [43.9, 25.95] },
  { code: 'GJ', name: 'Gorj', location: [45.0333, 23.2833] },
  { code: 'HR', name: 'Harghita', location: [46.35, 25.8] },
  { code: 'HD', name: 'Hunedoara', location: [45.8833, 22.9] },
  { code: 'IL', name: 'Ialomița', location: [44.6, 27.35] },
  { code: 'IS', name: 'Iași', location: [47.15, 27.6] },
  { code: 'IF', name: 'Ilfov', location: [44.5, 26.15] },
  { code: 'MM', name: 'Maramureș', location: [47.6667, 23.5833] },
  { code: 'MH', name: 'Mehedinți', location: [44.6, 22.65] },
  { code: 'MS', name: 'Mureș', location: [46.55, 24.55] },
  { code: 'NT', name: 'Neamț', location: [46.9333, 26.3667] },
  { code: 'OT', name: 'Olt', location: [44.4167, 24.3667] },
  { code: 'PH', name: 'Prahova', location: [45.0167, 26.1] },
  { code: 'SM', name: 'Satu Mare', location: [47.8, 22.8667] },
  { code: 'SJ', name: 'Sălaj', location: [47.2, 23.05] },
  { code: 'SB', name: 'Sibiu', location: [45.8, 24.15] },
  { code: 'SV', name: 'Suceava', location: [47.6333, 26.25] },
  { code: 'TR', name: 'Teleorman', location: [43.95, 25.3167] },
  { code: 'TM', name: 'Timiș', location: [45.75, 21.25] },
  { code: 'TL', name: 'Tulcea', location: [45.1833, 28.8] },
  { code: 'VS', name: 'Vaslui', location: [46.6333, 27.7333] },
  { code: 'VL', name: 'Vâlcea', location: [45.1, 24.3667] },
  { code: 'VN', name: 'Vrancea', location: [45.7, 27.1833] },
];

export const formattedCounties = romanianCounties.map((item) => ({
  code: item.code,
  name: item.name,
  location: item.location,
}));

export const findCountyByCode = (countyCode: string) => {
  return formattedCounties.find((item) => item.code === countyCode);
};
