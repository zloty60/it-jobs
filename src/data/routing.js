const routing = {
  userAccount: {
    path: "/konto",
  },
  userOffers: {
    path: "/moje-ogłoszenia",
  },
  login: {
    path: "/logowanie",
  },
  register: {
    path: "/rejestracja",
  },
  add: {
    path: "/dodaj",
  },
  edit: {
    path: "/edytuj/:id",
    dynamicPath: (id) => `/edytuj/${id}`,
  },
  category: {
    path: "/kategoria/:category",
    dynamicPath: "",
  },
  offer: {
    path: "/oferta/:id",
    dynamicPath: (id) => `/oferta/${id}`,
  },
};

export default routing;
