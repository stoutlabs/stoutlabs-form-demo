export const ServiceTypes = {
  appliances: [
    {
      name: "refrigerator",
      brand: "",
      modelnum: ""
    },
    {
      name: "oven",
      brand: "",
      modelnum: ""
    },
    {
      name: "range",
      brand: "",
      modelnum: ""
    }
  ],
  electrical: [
    {
      name: "Ceiling Fan",
      has_symptoms: false
    },
    {
      name: "Central Vacuum",
      has_symptoms: false
    },
    {
      name: "Electric",
      has_symptoms: true
    }
  ],
  heating_and_ac: [
    {
      name: "Air Conditioning (Central-Electric)"
    },
    {
      name: "Duct Work"
    },
    {
      name: "Evap (Swamp) Cooler"
    }
  ],
  plumbing: [
    {
      name: "Faucets",
      has_quantity: true,
      has_symptoms: true
    },
    {
      name: "Sewage Ejector Pump",
      has_quantity: true,
      has_symptoms: false
    },
    {
      name: "Garbage Disposal",
      has_quantity: true,
      has_symptoms: true
    }
  ]
};
