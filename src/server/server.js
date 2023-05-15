export const server = {
  data: [
    {
      id: 1,
      name: "Jane Cooper",
      company: "Microsoft",
      number: "(225) 555-0118",
      email: "jane@microsoft.com",
      country: "United States",
      status: "Active",
    },
    {
      id: 2,
      name: "Floyd Miles",
      company: "Yahoo",
      number: "(205) 555-0100",
      email: "floyd@yahoo.com",
      country: "Kiribati",
      status: "Inactive",
    },
    {
      id: 3,
      name: "Ronald Richards",
      company: "Adobe",
      number: "(302) 555-0107",
      email: "ronald@adobe.com",
      country: "Israel",
      status: "Inactive",
    },
    {
      id: 4,
      name: "Marvin McKinney",
      company: "Tesla",
      number: "(252) 555-0126",
      email: "marvin@tesla.com",
      country: "Iran",
      status: "Active",
    },
    {
      id: 5,
      name: "Jerome Bell",
      company: "Google",
      number: "(629) 555-0129",
      email: "jerome@google.com",
      country: "Réunion",
      status: "Active",
    },
    {
      id: 6,
      name: "Kathryn Murphy",
      company: "Microsoft",
      number: "(406) 555-0120",
      email: "kathryn@microsoft.com",
      country: "Curaçao",
      status: "Active",
    },
    {
      id: 7,
      name: "Jacob Jones",
      company: "Yahoo",
      number: "(208) 555-0112",
      email: "jacob@yahoo.com",
      country: "Brazil",
      status: "Active",
    },
    {
      id: 8,
      name: "Kristin Watson",
      company: "Facebook",
      number: "(704) 555-0127",
      email: "kristin@facebook.com",
      country: "Åland Islands",
      status: "Inactive",
    },
  ],
};
export const getAllCustomers = () => {
  return server.data;
};
export const getCustomer = (text) => {
      const arr = server.data.filter((el) => {
        return (
          el.name.toLowerCase() === text.toLowerCase() ||
          el.company.toLowerCase() === text.toLowerCase() ||
          el.number.toLowerCase() === text.toLowerCase() ||
          el.email.toLowerCase() === text.toLowerCase() ||
          el.country.toLowerCase() === text.toLowerCase() ||
          el.status.toLowerCase() === text.toLowerCase()
        );
      });
    
      return arr.length > 0 ? arr : null;
    };
