import { atom, selector } from "recoil";
// import { recoilPersist } from "recoil-persist";

const url = "https://my.api.mockaroo.com/orders.json?key=e49e6840";
// const { persistAtom } = recoilPersist({ key: "abc1234" });

export const parcelsStateAtom = atom({
  key: "parcelsState",
  default: [],
//   effects_UNSTABLE: [persistAtom],
});

export const parcelStateSelector = selector({
  key: "parcelsStateSelector",
  get: async ({ get }) => {
    const localStorageItems = localStorage.getItem("parcels");
    if (localStorageItems) {
      return JSON.parse(localStorageItems);
    }
    let response = await fetch(url);

    if (response.ok) {
      let json = await response.json();
      localStorage.setItem("parcels", JSON.stringify(json));
      return json;
    } else {
      alert("Error HTTP: " + response.status);
    }
  },
});

// export const parcelsState = atom({
//   key: "parcelsState",
//   default: selector({
//     key: "parcelsStateSelector",
//     get: async ({ get }) => {
//       let response = await fetch(url);

//       if (response.ok) {
//         let json = await response.json();
//         console.log("json", json);
//         return json;
//       } else {
//         alert("Error HTTP: " + response.status);
//       }
//     },
//   }),
//   effects_UNSTABLE: [persistAtom],
// });

// export const parcelsStateSelector = selector({
//   key: "parcelsStateSelector",
//   get: async ({ get }) => {
//     let response = await fetch(url);

//     if (response.ok) {
//       let json = await response.json();
//       return json;
//     } else {
//       alert("Ошибка HTTP: " + response.status);
//     }
//   },
// });

// const localStorageEffect = key => ({setSelf, onSet}) => {
//   const savedValue = localStorage.getItem(key)
//   if (savedValue != null) {
//     setSelf(JSON.parse(savedValue))
//   }
//   onSet(newValue => {
//     localStorage.setItem(key, JSON.stringify(newValue))
//   })
// }

// export const parcelsState = atom({
//   key: "parcelsState",
//   default: [],
//   effects_UNSTABLE: [localStorageEffect("parcels")],
// });
