export const randomNumber = (index = 1) =>
  `${Math.ceil(Math.random() * 100000)}-${index}`;
