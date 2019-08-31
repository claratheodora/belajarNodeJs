const express = require('express');
const router = express.Router();
const User = require('../models/User');

//menampilkan semua user
router.get('/', async (req, res) => {
	try{
		const users = await User.find();
		res.json(users);
	}catch(err){
		res.json({message: err });
	}
});

router.get('/spesificuser', (req, res) => {
	res.send('spesific user');
});

//input user
router.post('/', async (req, res) => {
	const user = new User({
		id: req.body.id,
		nama: req.body.nama
	});
	try{
	const savedPost = await user.save();
	res.json(savedPost);
	} catch (err){
		res.json({message: err });
	}
})

//menampilkan spesific user
router.get('/:postId', async (req,res) =>{
	try{
		const user = await User.findById(req.params.postId);
		res.json(user);
	}catch(err){
		res.json({message: err });
	}
});

//delete spesific user
router.delete('/:postId', async (req, res) =>{
	try{
		const removedUser = await User.remove({_id: req.params.postId});
		res.json(removedUser);
	}catch(err){
		res.json({message: err });
	}
});

//update user
router.patch('/:postId', async (req, res) =>{
	try{
	const updatedUser = await User.update(
		{_id: req.params.postId}, 
		{$set: {id: req.body.id}});
		res.json(updatedUser);
	}catch(err){
		res.json({message: err });
	}
});

module.exports = router;