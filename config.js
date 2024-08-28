const env = process.env.ENVIROMENT || 'development'

const config = {
  port: process.env.PORT || 5001,
  env,
  gatewayPort: process.env.GATEWAY_PORT || 8080,
  rpcTopic: process.env.TOPIC || 'pin-rpc-topic',
  pinHostPeerId: process.env.PIN_HOST || '12D3KooWE2d8BnfLqVRJ3HZusgTUVHFq5EJezp49firDSbUe7MoR',
}

export default config
