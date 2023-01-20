const express = require('express');
const bcrypt = require('bcrypt');
const { User } = require('../db/models');

const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, email, pass } = req.body;
  console.log('password =>', pass, typeof pass )
  if (!name || !email || !pass) {
    return res.status(400).json({ message: 'Fill all fields' });
  }
  const password = await bcrypt.hash(pass, 7);
  console.log('hash =>', password, typeof password )
  const [user, isCreated] = await User.findOrCreate({
    where: { email },
    defaults: { name, email, password },
  });
  if (!isCreated) {
    return res.status(403).json({ message: 'User already exists' });
  }
  req.session.user = { id: user.id, email: user.email, name: user.name ,points:user.points};
  res.status(200).json({ user: req?.session?.user });
});

router.post('/login', async (req, res) => {
  const { email, pass } = req.body;
  if (!email || !pass) {
    return res.status(400).json({ message: 'Fill all fields' });
  }
  const user = await User.findOne({ where: { email } });
  const checker = await bcrypt.compare(pass, user.password);
  if (checker) {
    req.session.user = { id: user.id, email: user.email, name: user.name,points:user.points };
    res.status(200).json({ user: req?.session?.user });
  } else {
    return res.status(400).json({ message: 'Incorrect mail or password' });
  }
});

router.get('/logout', (req, res) => {
  res.clearCookie('user_sid');
  req.session.destroy();
  res.sendStatus(200);
});

router.post('/check', (req, res) => {
  if (req.session.user) {
    return res.json(req.session.user);
  }
  return res.sendStatus(401);
});

module.exports = router;
