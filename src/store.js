import create from "zustand";

export const useStore = create((set) => ({
  work: [
    { name: "Canoe Club", description: "asdf", image: "placeholder" },
    { name: "Poppn Co.", description: "asdf", image: "placeholder" },
    { name: "Highland Style", description: "asdf", image: "placeholder" },
  ],
  sandbox: [
    { name: "Cappua", description: "asdf", link: "", image: "placeholder" },
    {
      name: "Intention Timer",
      description: "asdf",
      link: "",
      image: "placeholder",
    },
    { name: "Slapjack", description: "asdf", link: "", image: "placeholder" },
    { name: "Overlook", description: "asdf", link: "", image: "placeholder" },
    {
      name: "Rancid Tomatillos",
      description: "asdf",
      link: "",
      image: "placeholder",
    },
    { name: "Favo", description: "asdf", link: "", image: "placeholder" },
  ],
}));
