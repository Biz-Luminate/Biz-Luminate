// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/bizluminate',
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL + '?ssl=true',
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/dev'
    }
  },

  test: {
    client: 'pg',
    connection: process.env.DATABASE_URL || 'postgres://localhost/bizluminate_test',
    useNullAsDefault: true,
    migrations: {
      directory: './server/db/migrations'
    },
    seeds: {
      directory: './server/db/seeds/test'
    }
  }
};
