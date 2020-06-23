const knex = require('../database')
const { update } = require('../database')

module.exports = {
  async index (req, res) {
    const results = await knex('users')

    return res.json(results)
  },

  async store(req, res, next) {
    try {
      const {username} = req.body

      await knex('users').insert({
        username
      })

      return res.status(201).send()
    } catch (error) {
      next(error)
    }
  },

  async update(req, res, next){
    try {
      const {username} = req.body
      //59min
      await knex('users')
      .update({username})
    } catch (error) {
      next(error)
    }
  }
}