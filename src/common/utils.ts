import {
  Account,
  AccountAddress,
  Ed25519PrivateKey,
  HexInput,
} from '@aptos-labs/ts-sdk';

export const loadAccountFromPrivateKey = (privateKey: string): Account => {
  return Account.fromPrivateKey({
    privateKey: new Ed25519PrivateKey(privateKey),
  });
};

