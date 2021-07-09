// import { atom, selector } from "recoil";

// const url = "https://my.api.mockaroo.com/orders.json?key=e49e6840";

// export const parcelsStateAtom = atom({
//   key: "parcelsState",
//   default: [],
// });

// export const parcelStateSelector = selector({
//   key: "parcelsStateSelector",
//   get: async ({ get }) => {
//     const localStorageItems = localStorage.getItem("parcels");
//     if (localStorageItems) {
//       return JSON.parse(localStorageItems);
//     }
//     let response = await fetch(url);

//     if (response.ok) {
//       let json = await response.json();
//       localStorage.setItem("parcels", JSON.stringify(json));
//       return json;
//     } else {
//       alert("Error HTTP: " + response.status);
//     }
//   },
// });


