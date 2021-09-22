const welcome = async (req, res) => {
  return res.send('hello world');
};

export const welcomeController = {
  welcome,
};
