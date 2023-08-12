import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const productUploadStore = (set) => ({
  uploadData: {},
  appendToState: (product) => {
    set((state) => ({
      uploadData: { ...state.uploadData, product },
    }));
  },
});

const useProductUploadStore = create(
  devtools(
    persist(productUploadStore, {
      name: "ProductUploadStore",
    })
  )
);

export default useProductUploadStore;
