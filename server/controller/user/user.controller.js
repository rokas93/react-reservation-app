import User from '../../models/User.model.js';
import asyncHandler from 'express-async-handler';

// -- get all users
export const getUsers = asyncHandler(async (req, res) => {
  const users = await User.find();

  if (users) {
    res.status(200).json(users);
  } else {
    res.status(404).send('Users not found!');
    throw new Error('Users not found!');
  }
});

// -- create single user
export const createUser = asyncHandler(async (req, res) => {
  const { name, email, date, time } = req.body;

  const user = await User.create({
    name,
    email,
    date,
    time,
  });

  if (user) {
    res.status(201).json(user);
  } else {
    res.status(400).send('Invalid data.');
    throw new Error('Invalid data.');
  }
});

// -- update single user by req.params.id
export const updateUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndUpdate(id, req.body);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found!');
    throw new Error('User not found!');
  }
});

// -- delete single user by req.params.id
export const deleteUser = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const user = await User.findByIdAndDelete(id);

  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).send('User not found!');
    throw new Error('User not found!');
  }
});
