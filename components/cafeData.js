const cafeData = [
  {
    name: "B Cup Cafe",
    distance: "0.1",
    address: "212 Avenue B, New York, NY 10009",
    imageUrl:
      "https://t4.ftcdn.net/jpg/06/68/38/09/360_F_668380954_3krhgtwcZr7nGROtEYJgzdQgOkd20APK.jpg",
    rating: "4.4",
    favorited: true,
    plentyOfOutlets: false,
    freeWifi: false,
    quiet: false,
    notTooBusy: false,
    petFriendly: true,
    plentyOfSeating: false,
    sustainable: false,
    quietCorners: true,
    affordablePrices: false,
    veganOptions: true,
    vegetarianOptions: true,
    glutenFree: true,
  },
  {
    name: "Java Lava",
    distance: "0.3",
    address: "293 Mercer St New York, NY 10184 Greenwich Village",
    imageUrl:
      "https://t3.ftcdn.net/jpg/05/58/70/08/360_F_558700873_okq1xCv9pwOfji89qkSPJKGDnCxMnIFT.jpg",
    rating: "4.6",
    favorited: false,
    plentyOfOutlets: true,
    freeWifi: true,
    quiet: true,
    notTooBusy: true,
    petFriendly: false,
    plentyOfSeating: true,
    sustainable: false,
    quietCorners: false,
    affordablePrices: true,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: false,
  },
  {
    name: "Elixir Coffee Roasters",
    distance: "0.5",
    address: "315 N 12th St, Philadelphia, PA 19107",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbWY98TCiGDQnIS-6IiDkMGyMkfmP3ONhrbZJoq-sORg&s",
    rating: "4.1",
    favorited: true,
    plentyOfOutlets: false,
    freeWifi: true,
    quiet: true,
    notTooBusy: false,
    petFriendly: false,
    plentyOfSeating: false,
    sustainable: false,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: false,
    vegetarianOptions: true,
    glutenFree: false,
  },
  {
    name: "The Grind",
    distance: "0.2",
    address: "602 9th Ave, New York, NY 10036",
    imageUrl:
      "https://centercityphila.org/uploads/attachments/cj6xu0qhd035tu9qd2fwjhnbo-elixr.22.0.718.718.full.jpg",
    rating: "4.0",
    favorited: false,
    plentyOfOutlets: true,
    freeWifi: true,
    quiet: true,
    notTooBusy: false,
    petFriendly: false,
    plentyOfSeating: true,
    sustainable: true,
    quietCorners: false,
    affordablePrices: true,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: false,
  },
  // {
  //   name: "Daily Brew",
  //   distance: "1.4",
  //   imageUrl:
  //     "https://urbaanite.com/wp-content/uploads/2022/08/Elixr-Coffee-Nashville-1-1170x780.jpg",
  //   rating: "3.2",
  //   favorited: true,
  //   plentyOfOutlets: true,
  //   freeWifi: true,
  //   quiet: false,
  //   notTooBusy: true,
  //   petFriendly: false,
  //   plentyOfSeating: true,
  //   sustainable: false,
  //   quietCorners: false,
  //   affordablePrices: true,
  //   veganOptions: true,
  //   vegetarianOptions: false,
  //   glutenFree: true,
  //   latitude:
  //   longitude:
  // },
  {
    name: "Stone Street Coffee",
    distance: "2.3",
    address: "134 9th Ave, New York, NY 10011",
    imageUrl:
      "https://fastly.4sqi.net/img/general/600x600/22018_uVElZnHpSDZA6Z_anZvtsDFN9MiMV5AQ3junoZxQYSA.jpg",
    rating: "3.5",
    favorited: false,
    plentyOfOutlets: true,
    freeWifi: true,
    quiet: false,
    notTooBusy: true,
    petFriendly: true,
    plentyOfSeating: false,
    sustainable: true,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: false,
  },
  {
    name: "Gregorys Coffee",
    distance: "2.6",
    address: "48 E 33rd St, New York, NY 10016",
    imageUrl:
      "https://images.squarespace-cdn.com/content/v1/57eac90f6a49637f6b97a3c8/1591653970412-D3OZJONQU8M6CPJPED8D/DSC_0302-3.jpg",
    rating: "4.3",
    favorited: true,
    plentyOfOutlets: true,
    freeWifi: true,
    quiet: true,
    notTooBusy: true,
    petFriendly: true,
    plentyOfSeating: true,
    sustainable: true,
    quietCorners: true,
    affordablePrices: true,
    veganOptions: true,
    vegetarianOptions: true,
    glutenFree: true,
  },
  {
    name: "The Bean",
    distance: "2.8",
    address: "31 3rd Ave, New York, NY 10003",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQN9RaDLwv9t_dVefrZKMZ9N7pK73ROhw-A_3iEzCjidg&s",
    rating: "3.4",
    favorited: false,
    plentyOfOutlets: true,
    freeWifi: false,
    quiet: true,
    notTooBusy: false,
    petFriendly: false,
    plentyOfSeating: false,
    sustainable: false,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: true,
  },
  {
    name: "Roasted NYC",
    distance: "3.3",
    address: "128 2nd Ave, New York, NY 10003",
    imageUrl:
      "https://c8.alamy.com/comp/2BN5GDW/historical-storefront-brooklyn-bean-roastery-23-avenue-a-new-york-nyc-storefront-photo-of-a-coffee-shop-in-manhattans-east-village-2BN5GDW.jpg",
    rating: "3.8",
    favorited: true,
    plentyOfOutlets: false,
    freeWifi: true,
    quiet: false,
    notTooBusy: false,
    petFriendly: true,
    plentyOfSeating: false,
    sustainable: false,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: false,
    vegetarianOptions: false,
    glutenFree: true,
  },
  {
    name: "Think Coffee",
    distance: "4.5",
    address: "248 Mercer St, New York, NY 10012",
    imageUrl:
      "https://www.downtowngreensburgpa.us/wp-content/uploads/2023/10/img_1971-scaled.jpg",
    rating: "3.6",
    favorited: false,
    plentyOfOutlets: false,
    freeWifi: true,
    quiet: false,
    notTooBusy: false,
    petFriendly: false,
    plentyOfSeating: true,
    sustainable: true,
    quietCorners: false,
    affordablePrices: false,
    veganOptions: true,
    vegetarianOptions: true,
    glutenFree: false,
  },
];

export default cafeData;
