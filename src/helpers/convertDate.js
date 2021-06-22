const convertDate = (date) => {
  const dateObj = new Date(date);
  const [month, day, year] = [
    dateObj.getUTCMonth() + 1,
    dateObj.getUTCDate(),
    dateObj.getUTCFullYear(),
  ];

  return `${day.toString().length < 2 ? `0${day}` : day}:${
    month.toString().length < 2 ? `0${month}` : month
  }:${year}`;
};

export default convertDate;
