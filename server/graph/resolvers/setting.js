
/* global WIKI */

const _ = require('lodash')

module.exports = {
  Query: {
    settings(obj, args, context, info) {
      return WIKI.models.Setting.findAll({ where: args, raw: true }).then(entries => {
        return _.map(entries, entry => {
          entry.config = JSON.stringify(entry.config)
          return entry
        })
      })
    }
  },
  Mutation: {
    setConfigEntry(obj, args) {
      return WIKI.models.Setting.update({
        value: args.value
      }, { where: { key: args.key } })
    }
  }
}
