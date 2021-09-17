module.exports = {
  apps : [
      {
        name: "n8n",
        script: "./packages/cli/bin/n8n",
        watch: true,
        env: {
          "DB_TYPE":"postgresdb",
          "DB_POSTGRESDB_DATABASE":"n8n",
          "DB_POSTGRESDB_HOST":"172.17.0.1",
          "DB_POSTGRESDB_PORT":5432,
          "DB_POSTGRESDB_USER":"n8n",
          "DB_POSTGRESDB_PASSWORD":"78X(]Y22q;QqhvJk",
          "DB_POSTGRESDB_SCHEMA":"public",
          "N8N_BASIC_AUTH_ACTIVE":true,
          "N8N_BASIC_AUTH_USER":"gtr99",
          "N8N_BASIC_AUTH_PASSWORD":"hZW-%a@2EE]zUM;-",
          "N8N_HOST":"n8n.lionsalesfunnels.com",
          "N8N_PORT":5678,
          "N8N_PROTOCOL":"https",
          "NODE_ENV":"production",
          "EXECUTIONS_PROCESS":"main",
          "EXECUTIONS_TIMEOUT":60,
          "EXECUTIONS_TIMEOUT_MAX":120,
          "NODE_TLS_REJECT_UNAUTHORIZED":0,
          "EXECUTIONS_DATA_PRUNE":true,
          "EXECUTIONS_DATA_MAX_AGE":7,
          "WEBHOOK_TUNNEL_URL":"https://n8n.lionsalesfunnels.com/",
          "GENERIC_TIMEZONE":"America/New_York"
        }
      }
  ]
}