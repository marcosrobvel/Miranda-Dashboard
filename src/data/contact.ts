type ContactStatus = "" | "archived";
type Email = `${string}@${string}.${string}`; 
type PhoneNumber = `${number}-${number}-${number}`; 
type URLString = `https://${string}`;

interface Contact {
  id: number;
  photo: URLString;
  date: string;
  customer: string;
  mail: Email;
  phone: PhoneNumber;
  subject: "New Subject" | string;
  comment: string;
  status: ContactStatus;
}

export const contacts: Contact[] = [
  {
    photo: "https://robohash.org/dictaestqui.png?size=50x50&set=set1",
    id: 1,
    date: "11-10-2021",
    customer: "Harmonie Bathowe",
    mail: "hbathowe0@ihg.com",
    phone: "656-294-7846",
    subject: "New Subject",
    comment: "Acute lacrimal canaliculitis of left lacrimal passage",
    status: ""
  },
  {
    photo: "https://robohash.org/reiciendismaximedolore.png?size=50x50&set=set1",
    id: 2,
    date: "09-12-2021",
    customer: "Dominic Throssell",
    mail: "dthrossell1@wix.com",
    phone: "400-287-5377",
    subject: "New Subject",
    comment: "Heat exhaustion due to salt depletion, subsequent encounter",
    status: ""
  },
  {
    photo: "https://robohash.org/iustoaccusamussimilique.png?size=50x50&set=set1",
    id: 3,
    date: "01-22-2021",
    customer: "Catarina Sudworth",
    mail: "csudworth2@flavors.me",
    phone: "406-611-6165",
    subject: "New Subject",
    comment: "Occ of anml-drn veh inj by fall fr veh in nonclsn acc, subs",
    status: ""
  },
  {
    photo: "https://robohash.org/laudantiumdoloresvoluptas.png?size=50x50&set=set1",
    id: 4,
    date: "03-26-2021",
    customer: "Christalle Byrom",
    mail: "cbyrom3@studiopress.com",
    phone: "810-946-1704",
    subject: "New Subject",
    comment: "Wedge comprsn fx first lum vert, subs for fx w routn heal",
    status: ""
  },
  {
    photo: "https://robohash.org/quiaadipiscicumque.png?size=50x50&set=set1",
    id: 5,
    date: "01-08-2021",
    customer: "Constantine Dibben",
    mail: "cdibben4@abc.net.au",
    phone: "671-184-3182",
    subject: "New Subject",
    comment: "Poisoning by antirheumatics, NEC, self-harm, init",
    status: ""
  },
  {
    photo: "https://robohash.org/quodeaquedignissimos.png?size=50x50&set=set1",
    id: 6,
    date: "02-13-2021",
    customer: "Joceline Lumb",
    mail: "jlumb5@nsw.gov.au",
    phone: "426-319-1022",
    subject: "New Subject",
    comment: "Ped on foot injured in clsn w 2-3-whl mv nontraf, sequela",
    status: ""
  },
  {
    photo: "https://robohash.org/etquiut.png?size=50x50&set=set1",
    id: 7,
    date: "10-02-2021",
    customer: "Haleigh McLukie",
    mail: "hmclukie6@sogou.com",
    phone: "205-759-7294",
    subject: "New Subject",
    comment: "Subluxation and dislocation of C5-C6 cervical vertebrae",
    status: ""
  },
  {
    photo: "https://robohash.org/dictaestqui.png?size=50x50&set=set1",
    id: 8,
    date: "05-25-2021",
    customer: "Killy McNellis",
    mail: "kmcnellis7@amazon.co.uk",
    phone: "697-856-8889",
    subject: "New Subject",
    comment: "Drown d-t thrown ovrbrd by motion of power wtrcrft, sqla",
    status: ""
  },
  {
    photo: "https://robohash.org/quaeseddolores.png?size=50x50&set=set1",
    id: 9,
    date: "02-26-2021",
    customer: "Earl Ganford",
    mail: "eganford8@irs.gov",
    phone: "865-964-6689",
    subject: "New Subject",
    comment: "Unsp place in oth residential institution as place",
    status: ""
  },
  {
    photo: "https://robohash.org/doloresinsint.png?size=50x50&set=set1",
    id: 10,
    date: "08-31-2021",
    customer: "Haily Holsall",
    mail: "hholsall9@moonfruit.com",
    phone: "665-968-3135",
    subject: "New Subject",
    comment: "Occupant of rail trn-veh injured in unsp railway accident",
    status: ""
  },
  {
    photo: "https://robohash.org/dictaestqui.png?size=50x50&set=set1",
    id: 11,
    date: "11-10-2021",
    customer: "Harmonie Bathowe",
    mail: "hbathowe0@ihg.com",
    phone: "656-294-7846",
    subject: "New Subject",
    comment: "Acute lacrimal canaliculitis of left lacrimal passage",
    status: ""
  },
  {
    photo: "https://robohash.org/reiciendismaximedolore.png?size=50x50&set=set1",
    id: 12,
    date: "09-12-2021",
    customer: "Dominic Throssell",
    mail: "dthrossell1@wix.com",
    phone: "400-287-5377",
    subject: "New Subject",
    comment: "Heat exhaustion due to salt depletion, subsequent encounter",
    status: ""
  },
  {
    photo: "https://robohash.org/iustoaccusamussimilique.png?size=50x50&set=set1",
    id: 13,
    date: "01-22-2021",
    customer: "Catarina Sudworth",
    mail: "csudworth2@flavors.me",
    phone: "406-611-6165",
    subject: "New Subject",
    comment: "Occ of anml-drn veh inj by fall fr veh in nonclsn acc, subs",
    status: ""
  },
  {
    photo: "https://robohash.org/laudantiumdoloresvoluptas.png?size=50x50&set=set1",
    id: 14,
    date: "03-26-2021",
    customer: "Christalle Byrom",
    mail: "cbyrom3@studiopress.com",
    phone: "810-946-1704",
    subject: "New Subject",
    comment: "Wedge comprsn fx first lum vert, subs for fx w routn heal",
    status: ""
  },
  {
    photo: "https://robohash.org/quiaadipiscicumque.png?size=50x50&set=set1",
    id: 15,
    date: "01-08-2021",
    customer: "Constantine Dibben",
    mail: "cdibben4@abc.net.au",
    phone: "671-184-3182",
    subject: "New Subject",
    comment: "Poisoning by antirheumatics, NEC, self-harm, init",
    status: ""
  },
  {
    photo: "https://robohash.org/quodeaquedignissimos.png?size=50x50&set=set1",
    id: 16,
    date: "02-13-2021",
    customer: "Joceline Lumb",
    mail: "jlumb5@nsw.gov.au",
    phone: "426-319-1022",
    subject: "New Subject",
    comment: "Ped on foot injured in clsn w 2-3-whl mv nontraf, sequela",
    status: ""
  },
  {
    photo: "https://robohash.org/etquiut.png?size=50x50&set=set1",
    id: 17,
    date: "10-02-2021",
    customer: "Haleigh McLukie",
    mail: "hmclukie6@sogou.com",
    phone: "205-759-7294",
    subject: "New Subject",
    comment: "Subluxation and dislocation of C5-C6 cervical vertebrae",
    status: ""
  },
  {
    photo: "https://robohash.org/dictaestqui.png?size=50x50&set=set1",
    id: 18,
    date: "05-25-2021",
    customer: "Killy McNellis",
    mail: "kmcnellis7@amazon.co.uk",
    phone: "697-856-8889",
    subject: "New Subject",
    comment: "Drown d-t thrown ovrbrd by motion of power wtrcrft, sqla",
    status: ""
  },
  {
    photo: "https://robohash.org/quaeseddolores.png?size=50x50&set=set1",
    id: 19,
    date: "02-26-2021",
    customer: "Earl Ganford",
    mail: "eganford8@irs.gov",
    phone: "865-964-6689",
    subject: "New Subject",
    comment: "Unsp place in oth residential institution as place",
    status: ""
  },
  {
    photo: "https://robohash.org/doloresinsint.png?size=50x50&set=set1",
    id: 20,
    date: "08-31-2021",
    customer: "Haily Holsall",
    mail: "hholsall9@moonfruit.com",
    phone: "665-968-3135",
    subject: "New Subject",
    comment: "Occupant of rail trn-veh injured in unsp railway accident",
    status: ""
  }
]