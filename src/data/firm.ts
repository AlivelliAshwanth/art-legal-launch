export const firm = {
  name: 'ART Legal & Co.',
  tagline: 'Advocates & Legal Consultants',
  founded: 1991,
  experienceYears: 35,
  founders: [
    {
      name: 'Advocate Alok Ranjan',
      role: 'Founding Partner',
      enrolled: 2005,
      qualifications: 'B.A., LL.B. — Enrolled with Bar Council of Bihar, 2005',
      bio: 'Advocate Alok Ranjan has over two decades of court practice across civil, criminal, family and property matters. He is known among clients for clear advice and steady courtroom advocacy.',
      expertise: ['Civil Litigation', 'Criminal Defence', 'Property Law', 'Family Law'],
    },
    {
      name: 'Advocate Priya Ranjan Tiwari',
      role: 'Partner',
      enrolled: null,
      qualifications: 'B.A., LL.B.',
      bio: 'Advocate Priya Ranjan Tiwari focuses on documentation, drafting and corporate matters, with a particular interest in matrimonial and consumer law. He works closely with clients to translate their needs into precise legal documents.',
      expertise: ['Documentation', 'Corporate Matters', 'Matrimonial Law', 'Consumer Law'],
    },
  ],
  address: {
    line1: 'PRIMIANSH, Road No. 2, Brahmanpuri',
    line2: 'Near Pipal Chowk, Raghunathpur, Motihari Court',
    city: 'Motihari',
    district: 'East Champaran',
    state: 'Bihar',
    pin: '845401',
  },
  phone: '+91 93040 00001',
  phoneRaw: '919304000001',
  email: 'artlegal.co@gmail.com',
  domain: 'artlegal.co.in',
  hours: [
    { day: 'Mon – Sat', time: '10:00 AM – 7:00 PM' },
    { day: 'Sunday', time: 'By appointment' },
  ],
  whatsapp: 'https://wa.me/919304000001',
};

export const fullAddress = `${firm.address.line1}, ${firm.address.line2}, ${firm.address.city}, ${firm.address.state} – ${firm.address.pin}`;
