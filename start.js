import { HeliaNode as Node, PinRPC } from 'helia-ipfs-node/src/lib.js'
import config from './config.js'
import { bootstrapConfig } from 'helia-ipfs-node/src/util/bootstrap.js'

const start =async ()=>{
  // add main node to boostrap list
  bootstrapConfig.list.push(process.env.MAIN_NODE)

  // start node 
  const node = new Node({ bootstrapList : bootstrapConfig })
  await node.start()
  console.log('Node started!')

  // start rpc 
  const rpc =  new PinRPC({ node  , topic : config.rpcTopic })
  await rpc.start()
  console.log('RPC started!')

}


start()