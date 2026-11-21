export type ProjectCategory = 'Web & IT' | 'Administrasi' | 'Multimedia';

export interface ProjectItem {
  id: string;
  title: string;
  category: ProjectCategory;
  year: string;
  image: string;
  shortDesc: string;
  fullDesc: string;
  tools: string[];
  accentBg: string;
}

export interface EducationItem {
  institution: string;
  degreeOrDetail: string;
  period: string;
  summary: string;
}

export interface ExperienceItem {
  organization: string;
  period: string;
  role: string;
  description: string;
}

export interface SkillTool {
  id: string;
  name: string;
  label: string;
  tileClass: string;
  note: string;
}

export const EDUCATION_ITEMS: EducationItem[] = [
  {
    institution: 'Institut Teknologi PLN',
    degreeOrDetail: 'S1 Informatics Engineering',
    period: 'Sep 2026 – Sekarang',
    summary: 'Mahasiswa S1 Teknik Informatika.',
  },
  {
    institution: 'SMA Darul Ulum 1 Unggulan',
    degreeOrDetail: 'Pendidikan Menengah Atas',
    period: 'Jul 2023 – Mei 2026',
    summary: 'Pendidikan Menengah Atas berbasis pesantren.',
  },
];

export const EXPERIENCE_COLUMNS: ExperienceItem[][] = [
  [
    {
      organization: 'Ikappdar (Ikatan Keluarga Pondok Pesantren Darul Ulum)',
      period: 'Nov 2024 – Nov 2025',
      role: 'Bendahara',
      description: 'Mengelola pembukuan kas, anggaran kegiatan, dan laporan keuangan organisasi.',
    },
    {
      organization: 'Ikappdar (Ikatan Keluarga Pondok Pesantren Darul Ulum)',
      period: 'Apr 2024',
      role: 'Anggota Sie Acara',
      description: 'Menyusun rundown, koordinasi teknis panggung, dan kelancaran rangkaian acara.',
    },
  ],
  [
    {
      organization: 'Pengurus Asrama',
      period: 'Okt 2024 – Okt 2025',
      role: 'Anggota Sie Kebersihan',
      description: 'Mengkoordinasikan jadwal piket, kebersihan lingkungan, dan ketertiban asrama.',
    },
  ],
  [
    {
      organization: 'Pengurus Asrama',
      period: 'Okt 2023 – Okt 2024',
      role: 'Anggota Multimedia',
      description: 'Dokumentasi foto/video kegiatan serta desain publikasi visual asrama.',
    },
  ],
];

export const SKILL_TOOLS: SkillTool[] = [
  {
    id: 'canva',
    name: 'Canva',
    label: 'Canva',
    tileClass: 'tile-canva text-sm font-extrabold',
    note: 'Desain poster publikasi, feed media sosial, dan materi presentasi visual.',
  },
  {
    id: 'capcut',
    name: 'CapCut',
    label: 'CapCut',
    tileClass: 'bg-ink',
    note: 'Penyuntingan video dokumentasi kegiatan organisasi dan konten singkat.',
  },
  {
    id: 'excel',
    name: 'Microsoft Excel',
    label: 'X',
    tileClass: 'tile-excel text-xl font-extrabold',
    note: 'Pembukuan kas bendahara, rekap anggaran acara, dan pelaporan keuangan.',
  },
  {
    id: 'word',
    name: 'Microsoft Word',
    label: 'W',
    tileClass: 'tile-word text-xl font-extrabold',
    note: 'Penyusunan proposal kegiatan, rundown acara, dan administrasi surat.',
  },
  {
    id: 'vscode',
    name: 'VS Code / HTML-CSS',
    label: '</>',
    tileClass: 'tile-vscode text-base font-bold',
    note: 'Pengembangan halaman web statis dan antarmuka portofolio berbasis HTML, CSS, dan JS.',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: '1',
    title: 'Website Portofolio Personal',
    category: 'Web & IT',
    year: '2026',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrAk5CNcc0KZDFtHUI2sg-qwSP0k1GgOMzr52ORap5jzs5l2FPOEEDFSDvApajjByF3Z6L98l0ybd6yYjJ75iGotKYThJyJvGB2KSYKIxHGeKqRQEJYANcbsOIm5nbuJBEf_q9QrIfRK97pyg0zy-w0fPTR1YwLfs_4MByd6cxRbS_qU7EL93uZ-fsyAkge2X_zwdF7Mt52meAXrYnCi8Wr57tRzBucjYJMf6WDmojOo2OqousZKan3okfjU',
    shortDesc:
      'Website portofolio interaktif bergaya Y2K digital scrapbook menggunakan HTML, CSS, dan JavaScript.',
    fullDesc:
      'Website portofolio interaktif bergaya Y2K digital scrapbook yang memadukan tekstur rumput sintetis, kertas linen, mockup ponsel retro, clipboard pastel pink, dan jendela Windows XP Explorer.',
    tools: ['HTML5', 'CSS3', 'JavaScript', 'VS Code'],
    accentBg: 'from-pink-pastel/60 to-pink-gingham',
  },
  {
    id: '2',
    title: 'Sistem Pembukuan Kas Ikappdar',
    category: 'Administrasi',
    year: '2025',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrAwCXicidy6QPmsh6iS1rczhlHcXHDLY73c5bn0Z6lkrzNriB6IXlY8VDpddz6mHm09aMSb__IMepmn8IaVLgTzHLa_Eh3jwoOZObCTQrdS223sqwT79hKmzJlnYIAg5N4UsuxDhREHtk6c64Bd7H7OmFdR7WNIuE5S94FhsPKX6-RVKpi1tD9tWiwI4B-VxvXHUOSk78Jfv-pCpmj_1LdArdcMv2h3KBIHl9cF416XwfeBQKAO_-aXYBGZZk66ka0TXYg',
    shortDesc:
      'Template manajemen anggaran, pencatatan pemasukan/pengeluaran, dan laporan keuangan bendahara.',
    fullDesc:
      'Template manajemen anggaran, pencatatan pemasukan dan pengeluaran kas, serta laporan keuangan periodik untuk mendukung transparansi bendahara organisasi Ikappdar.',
    tools: ['Microsoft Excel', 'Microsoft Word'],
    accentBg: 'from-emerald-100 to-paper-linen',
  },
  {
    id: '3',
    title: 'Publikasi & Dokumentasi Asrama',
    category: 'Multimedia',
    year: '2024',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrBcXl58-mM1i3DNpLzj10a9-Go6fuoLgaua82eEGa60geiNvswoyINGCd_m29nA7xqt_Clg_vmSu4EaT1S1FncagcKbDMc7uXQj1K5IPTTfI6jwxfDn73O-hbSgeF3ZSfk2_NlqrpGKQ89LLRoS_DPLsr0N77UCDuLcSwR_XcNT4oc6IXSodBTm2lY0de4hdPB-2mShANC10Qn7Kr8lg_zXl3ZBO0J5BHRO8oB53YNsunaDXY_3t47lQSbtYOLCmfGuRP8V',
    shortDesc:
      'Desain poster informasi, konten visual, dan dokumentasi kegiatan Pengurus Asrama Darul Ulum.',
    fullDesc:
      'Perancangan poster informasi kegiatan, konten visual media sosial, serta dokumentasi foto dan video selama masa bakti Pengurus Asrama Darul Ulum.',
    tools: ['Canva', 'CapCut'],
    accentBg: 'from-sky-100 to-pink-gingham',
  },
  {
    id: '4',
    title: 'Rundown & Konsep Acara Ikappdar',
    category: 'Multimedia',
    year: '2024',
    image:
      'https://lh3.googleusercontent.com/aida/ALJJyrAkF9lbVQYl8GqPC_W6dbq3Lndk2WuSSZffoXw7Q6X_7eiWO7yIYMbToWVFxttypwu5IyKowR8qd5HGQ0mUCUAsFnDbW0BDHyRgHQwGSmyAvZagf9VY9mssLxKWRv-vY4_6diIQN8R4aQoJKsINK-aLcnhB2u955YX2FEuav4a8EcGrvw-BjGP1JTnFcHRw1ldokLFsZEMV8vVYrIaycwmO2RdE8W8vFy6m96UHRVdaL7yh1VKr-Rz7H7xmmo4C7A',
    shortDesc:
      'Perencanaan susunan acara, koordinasi teknis, dan materi visual kegiatan organisasi daerah.',
    fullDesc:
      'Penyusunan susunan acara, koordinasi teknis panggung, serta pembuatan materi visual pendukung kelancaran rangkaian kegiatan organisasi daerah Ikappdar.',
    tools: ['Canva', 'Microsoft Word', 'Microsoft Excel'],
    accentBg: 'from-amber-100 to-pink-pastel/50',
  },
];
