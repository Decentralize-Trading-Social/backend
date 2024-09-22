import {
  Account,
  Aptos,
  AptosConfig,
  Ed25519PrivateKey,
  Network,
  Event,
} from '@aptos-labs/ts-sdk';
import dotenv from 'dotenv';
import {loadAccountFromPrivateKey} from './utils';
dotenv.config({path: '.env.local', override: true});

export const config = {
  network: Network.TESTNET,
  apiKey: process.env.API_KEY,
  mainAccount: loadAccountFromPrivateKey(process.env.PRIVATE_KEY || ''),
  irysGateway: process.env.IRYS_GATE_WAY,
  socialModule: process.env.SOCIAL_MODULE,
};

export const aptosConfig = new AptosConfig({
  network: config.network,
  clientConfig: {
    API_KEY: config.apiKey,
  },
});
export const aptos = new Aptos(aptosConfig);
