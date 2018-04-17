require('dotenv').load();
const sequelize = require('sequelize')
const jwt = require('jsonwebtoken')

const User = require('../models').user;
const secret_key = process.env.SECRET_KEY

module.exports = {
	login({ username, password }) {
		return new Promise((resolve, reject) => {
			User
				.scope('withPassword')
				.find({
					where: {
						username: username
					},
				}).then(user => {
					if (user) {

						if (user.validPassword(password)) {
							const token = jwt.sign({ id: user.id }, secret_key)
							resolve({ token, role: user.role })
						} else {
							throw { status: 400, message: 'Username or password is incorrect' }

						}
					} else {
						throw { status: 404, message: 'User does not exists' }

					}
				})
				.catch(err => reject(err))
		})
	}
}