const path = require('path')
const {
    addWebpackAlias
} = require('customize-cra')

module.exports = function override(config, env) {
    config = addWebpackAlias({
        ['@api']: path.resolve(__dirname, 'api'),
        ['@app']: path.resolve(__dirname, 'src', 'app'),
        ['@core']: path.resolve(__dirname, 'src', 'core'),
        ['@domain']: path.resolve(__dirname, 'src', 'domain'),
        ['@shared']: path.resolve(__dirname, 'src', 'shared'),
        ['@store']: path.resolve(__dirname, 'src', 'store'),
        ['@styles']: path.resolve(__dirname, 'src', 'styles'),
        ['@tests']: path.resolve(__dirname, 'src', 'tests')
    })(config)

    return config
}