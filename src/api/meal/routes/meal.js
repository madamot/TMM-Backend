module.exports = {
  routes: [
    {
      method: 'GET',
      path: '/meals',
      handler: 'meal.find',
      config: { policies: [] }
    },
    {
      method: 'GET',
      path: '/meals/:id',
      handler: 'meal.findOne',
      config: { policies: [] }
    },
    {
      method: 'POST',
      path: '/meals',
      handler: 'meal.create',
      config: { policies: [] }
    },
    {
      method: 'PUT',
      path: '/meals/:id',
      handler: 'meal.update',
      config: { policies: [] }
    },
    {
      method: 'DELETE',
      path: '/meals/:id',
      handler: 'meal.delete',
      config: { policies: [] }
    }
  ]
}