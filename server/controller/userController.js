import User from "../model/userModel.js";

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const { email } = newUser;

    const userExist = await User.findOne({ email });
    if (userExist) {
      return res.status(400).json({ message: "User already exists." });
    }
    const savedData = await newUser.save();
    // res.status(200).json(savedData);
    res.status(200).json(savedData);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const allUsers = await User.find();
    if (!allUsers || allUsers.length === 0) {
      return res.status(400).json("not found users");
    }
    res.status(200).json(allUsers);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "user not found" });
    }
    res.status(200).json(userExist);
  } catch (error) {
    res.status(500).json({ errorMessage: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "not found user" });
    }
    await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({message: "user updated success"});
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);
    if (!userExist) {
      return res.status(404).json({ message: "not fuond" });
    }
   User.findByIdAndDelete(userExist);
    res.status(200).json({message: "user is alread delete"});
  } catch (error) {
    res.status(404).json({ errorMessage: error.message });
  }
};
