function timeUntilTakeOff(fromTime, takeOffTime) {
  const reg = /[*@|]/;

  const parseDate = (date) => {
    const parts = date.slice(0, -3).split(reg);
    parts[1] = +parts[1] - 1;
    return new Date(...parts);
  }

  return Math.floor((parseDate(takeOffTime) - parseDate(fromTime)) / 1000);
}