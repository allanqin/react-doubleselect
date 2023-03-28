export const items = [
  {
    name: "apple",
    category: "fruit",
  },
  {
    name: "Cucumber",
    category: "vegetable",
  },
  {
    name: "Banana",
    category: "fruit",
  },
  {
    name: "Celery",
    category: "vegetable",
  },
  {
    name: "orange",
    category: "fruit",
  },
  {
    name: "sausage",
    category: "meat",
  },
  {
    name: "bacon",
    category: "meat",
  },
];

export const categories = [];

export const categoryObj = items.reduce((acc, current) => {
  if (acc[current.category]) {
    acc[current.category].push(current.name);
  } else {
    acc[current.category] = [current.name];
    categories.push(current.category);
  }
  return acc;
}, {});
