const getBoard = async set => {
  fetch("/api/board")
    .then(res => res.json)
    .then(board => {
      set(board);
    })
    .catch(err => console.log(err));
};

const getMoves = async () => {
  const response = await fetch("/api/moves");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

const getTurnNumber = async () => {
  const response = await fetch("/api/turn_number");
  const body = await response.json();
  if (response.status !== 200) throw Error(body.message);
  return body;
};

export { getBoard, getMoves, getTurnNumber };
