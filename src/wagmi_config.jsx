import { http } from 'viem'
import { bsc } from 'wagmi/chains'
import { createConfig, configureChains, mainnet } from 'wagmi'
import { jsonRpcProvider } from 'wagmi/providers/jsonRpc'
import {WalletConnectConnector} from 'wagmi/connectors/walletConnect'
import {InjectedConnector} from 'wagmi/connectors/injected'


const projectId = '45bc18e14d099a27aeff730e088eff18'





const { chains, publicClient} = configureChains(
  [bsc],
  [
    jsonRpcProvider({
      rpc: (chain) => ({
        http: `https://bsc-dataseed.binance.org/`,
      }),
    }),
  ]
)

const config = createConfig({
    chains: chains,
    publicClient:publicClient,
    autoConnect: true,
    connectors: [
        new InjectedConnector({chains:chains}),
        new WalletConnectConnector({chains:chains, options:{projectId:projectId}})
    ]
})




export { config}
