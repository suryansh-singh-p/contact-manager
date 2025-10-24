const firstNames = [
  'James', 'Mary', 'John', 'Patricia', 'Robert', 'Jennifer', 'Michael', 'Linda',
  'William', 'Barbara', 'David', 'Elizabeth', 'Richard', 'Susan', 'Joseph', 'Jessica',
  'Thomas', 'Sarah', 'Charles', 'Karen', 'Christopher', 'Nancy', 'Daniel', 'Lisa',
  'Matthew', 'Betty', 'Anthony', 'Margaret', 'Mark', 'Sandra', 'Donald', 'Ashley',
  'Steven', 'Kimberly', 'Paul', 'Emily', 'Andrew', 'Donna', 'Joshua', 'Michelle',
  'Kenneth', 'Carol', 'Kevin', 'Amanda', 'Brian', 'Dorothy', 'George', 'Melissa',
  'Edward', 'Deborah', 'Ronald', 'Stephanie', 'Timothy', 'Rebecca', 'Jason', 'Sharon',
  'Jeffrey', 'Laura', 'Ryan', 'Cynthia', 'Jacob', 'Kathleen', 'Gary', 'Amy',
  'Nicholas', 'Shirley', 'Eric', 'Angela', 'Jonathan', 'Helen', 'Stephen', 'Anna',
  'Larry', 'Brenda', 'Justin', 'Pamela', 'Scott', 'Nicole', 'Brandon', 'Emma',
  'Benjamin', 'Samantha', 'Samuel', 'Katherine', 'Raymond', 'Christine', 'Gregory', 'Debra',
  'Alexander', 'Rachel', 'Frank', 'Catherine', 'Patrick', 'Carolyn', 'Jack', 'Janet',
  'Dennis', 'Ruth', 'Jerry', 'Maria', 'Tyler', 'Heather', 'Aaron', 'Diane',
];

const lastNames = [
  'Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Miller', 'Davis',
  'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Wilson', 'Anderson', 'Thomas',
  'Taylor', 'Moore', 'Jackson', 'Martin', 'Lee', 'Perez', 'Thompson', 'White',
  'Harris', 'Sanchez', 'Clark', 'Ramirez', 'Lewis', 'Robinson', 'Walker', 'Young',
  'Allen', 'King', 'Wright', 'Scott', 'Torres', 'Nguyen', 'Hill', 'Flores',
  'Green', 'Adams', 'Nelson', 'Baker', 'Hall', 'Rivera', 'Campbell', 'Mitchell',
  'Carter', 'Roberts', 'Gomez', 'Phillips', 'Evans', 'Turner', 'Diaz', 'Parker',
  'Cruz', 'Edwards', 'Collins', 'Reyes', 'Stewart', 'Morris', 'Morales', 'Murphy',
  'Cook', 'Rogers', 'Gutierrez', 'Ortiz', 'Morgan', 'Cooper', 'Peterson', 'Bailey',
  'Reed', 'Kelly', 'Howard', 'Ramos', 'Kim', 'Cox', 'Ward', 'Richardson',
];

const companies = [
  'TechCorp Industries', 'Innovation Labs', 'Digital Solutions Inc', 'Cloud Services Corp',
  'DataTech Systems', 'Future Software', 'Smart Analytics', 'Global Tech Partners',
  'NextGen Solutions', 'Quantum Computing', 'AI Dynamics', 'CyberSecurity Pro',
  'WebDev Studios', 'Mobile First Inc', 'DevOps Solutions', 'Agile Technologies',
  'Enterprise Systems', 'Business Intelligence Corp', 'Network Solutions', 'Infrastructure Plus',
  'Creative Designs Co', 'Marketing Genius', 'Brand Strategy Group', 'Social Media Hub',
  'Content Creators Inc', 'Digital Marketing Pro', 'SEO Masters', 'Growth Hacking Labs',
  'FinTech Solutions', 'Investment Partners', 'Capital Ventures', 'Banking Systems',
  'PayTech Inc', 'Blockchain Innovations', 'Crypto Solutions', 'Financial Analytics',
  'Healthcare Systems', 'MedTech Innovations', 'BioTech Research', 'Pharma Solutions',
  'E-Commerce Giants', 'Retail Tech', 'Supply Chain Pro', 'Logistics Partners',
  'Green Energy Corp', 'Sustainable Solutions', 'EcoTech Industries', 'Renewable Systems',
  'Education Platform', 'Learning Solutions', 'EdTech Innovations', 'Training Systems',
];

const roles = [
  'Software Engineer', 'Senior Developer', 'Product Manager', 'Project Manager',
  'UX Designer', 'UI Designer', 'Data Scientist', 'Data Analyst',
  'DevOps Engineer', 'Solutions Architect', 'Technical Lead', 'Engineering Manager',
  'Chief Technology Officer', 'Chief Executive Officer', 'Chief Operating Officer', 'VP of Engineering',
  'Marketing Manager', 'Sales Director', 'Business Analyst', 'Account Manager',
  'HR Manager', 'Recruiter', 'Operations Manager', 'Finance Manager',
  'Customer Success Manager', 'Support Engineer', 'Quality Assurance Engineer', 'Security Analyst',
  'Frontend Developer', 'Backend Developer', 'Full Stack Developer', 'Mobile Developer',
  'Scrum Master', 'Agile Coach', 'Consultant', 'Specialist',
];

const cities = [
  { city: 'New York', state: 'NY', zip: '10001' },
  { city: 'Los Angeles', state: 'CA', zip: '90001' },
  { city: 'Chicago', state: 'IL', zip: '60601' },
  { city: 'Houston', state: 'TX', zip: '77001' },
  { city: 'Phoenix', state: 'AZ', zip: '85001' },
  { city: 'Philadelphia', state: 'PA', zip: '19019' },
  { city: 'San Antonio', state: 'TX', zip: '78201' },
  { city: 'San Diego', state: 'CA', zip: '92101' },
  { city: 'Dallas', state: 'TX', zip: '75201' },
  { city: 'San Jose', state: 'CA', zip: '95101' },
  { city: 'Austin', state: 'TX', zip: '78701' },
  { city: 'Seattle', state: 'WA', zip: '98101' },
  { city: 'Denver', state: 'CO', zip: '80202' },
  { city: 'Boston', state: 'MA', zip: '02108' },
  { city: 'Miami', state: 'FL', zip: '33101' },
  { city: 'Atlanta', state: 'GA', zip: '30301' },
  { city: 'Portland', state: 'OR', zip: '97201' },
  { city: 'Las Vegas', state: 'NV', zip: '89101' },
];

const notes = [
  'Great contact for future collaborations.',
  'Met at tech conference. Very knowledgeable.',
  'Interested in partnership opportunities.',
  'Excellent communicator and team player.',
  'Expert in their field. Highly recommended.',
  'Follow up next quarter for potential projects.',
  'Strong technical background and leadership skills.',
  'Potential mentor for junior team members.',
  'Active in the tech community.',
  'Innovative thinker with great ideas.',
  'Reliable and responsive contact.',
  'Looking for new opportunities.',
  'Recently promoted. Congratulate on next call.',
  'Industry expert with 10+ years experience.',
  'Speaker at upcoming conference.',
  null,
];

const generateContacts = (count) => {
  const contacts = [];
  const startDate = new Date('2023-01-01');
  const endDate = new Date('2024-12-31');

  for (let i = 1; i <= count; i++) {
    const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
    const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
    const fullName = `${firstName} ${lastName}`;
    const company = companies[Math.floor(Math.random() * companies.length)];
    const role = roles[Math.floor(Math.random() * roles.length)];
    const location = cities[Math.floor(Math.random() * cities.length)];
    const note = notes[Math.floor(Math.random() * notes.length)];

    const emailDomain = company.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '');
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${emailDomain}.com`;

    const areaCode = Math.floor(Math.random() * 900) + 100;
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 9000) + 1000;
    const phone = `+1 (${areaCode}) ${prefix}-${lineNumber}`;

    const randomDate = new Date(
      startDate.getTime() + Math.random() * (endDate.getTime() - startDate.getTime())
    );

    const initials = `${firstName[0]}${lastName[0]}`;

    contacts.push({
      id: i.toString(),
      name: fullName,
      email: email,
      phone: phone,
      avatar: initials,
      company: company,
      role: role,
      address: `${Math.floor(Math.random() * 9999) + 1} ${lastName} Street, ${location.city}, ${location.state} ${location.zip}`,
      notes: note,
      createdAt: randomDate,
    });
  }

  return contacts;
};

export const mockContacts = generateContacts(200);
