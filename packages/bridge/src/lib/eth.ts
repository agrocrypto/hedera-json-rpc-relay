import {Eth} from '../index';

export class EthImpl implements Eth {
    // FIXME
    feeHistory() {
        const blockNum = "0x" + Date.now()
        return {
            "baseFeePerGas": [ "0x47" ],
            "gasUsedRatio": [ "0.5" ],
            "oldestBlock": blockNum
        }
    }

    // FIXME
    getTransactionReceipt() {
        const hash = "BOGUS HASH" // should be passed the hash in the call?
        const blockNum = "0x" + Date.now()
        return {
            "transactionHash": hash,
            "transactionIndex": "0x0",
            "blockNumber": blockNum,
            "blockHash": "0xc6ef2fc5426d6ad6fd9e2a26abeab0aa2411b7ab17f30a99d3cb96aed1d1055b",
            "cumulativeGasUsed": "0x33bc",
            "gasUsed": "0x4dc",
            "contractAddress": "0xb60e8dd61c5d32be8058bb8eb970870f07233155",
            "logs": [],
            "logsBloom": "0x0000",
            "status": "0x1"
        }
    }

    // FIXME: We should have a legit block number, and we should get it from the mirror node
    blockNumber() {
        return Date.now();
    }

    // FIXME This needs to be customizable via env variables
    chainId(): number {
        return 0x12a;
    }

    // FIXME Somehow compute the amount of gas for this request...
    estimateGas(): number {
        return 0x10000;
    }

    // FIXME, fake.
    gasPrice(): number {
        return 0x2f;
    }

    // FIXME Somehow get the account balance... even for testing I need to fake this better
    getBalance(): number {
        return 0x10000000000000000;
    }

    // FIXME Need to return contract code. For built in accounts we need some fake contract code...?
    getCode(): number {
        return 0x8239283283283823;
    }

    // FIXME This is a totally fake implementation
    getBlockByHash(hash : string): any {
        const blockNum = "0x" + Date.now()
        return {
            "difficulty": "0x1",
            "extraData": "",
            "gasLimit": "0xe4e1c0",
            "baseFeePerGas": "0x1",
            "gasUsed": "0x0",
            "hash": hash,
            "logsBloom": "0x0",
            "miner": "",
            "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "nonce": "0x0000000000000000",
            "number": blockNum,
            "parentHash": "0x0",
            "receiptsRoot": "0x0",
            "sha3Uncles": "0x0",
            "size": "0x0",
            "stateRoot": "0x0",
            "timestamp": blockNum,
            "totalDifficulty": blockNum,
            "transactions": [],
            "transactionsRoot": "0x00",
            "uncles": []
        }
    }

    // FIXME This is a totally fake implementation
    getBlockByNumber(blockNum : number): any {
        return {
            "difficulty": "0x1",
            "extraData": "",
            "gasLimit": "0xe4e1c0",
            "baseFeePerGas": "0x1",
            "gasUsed": "0x0",
            "hash": "0x1fb2230a6b5bf856bb4df3c80cbf95b84454169a5a133fffaf8505a05f960aeb",
            "logsBloom": "0x0",
            "miner": "",
            "mixHash": "0x0000000000000000000000000000000000000000000000000000000000000000",
            "nonce": "0x0000000000000000",
            "number": blockNum,
            "parentHash": "0x0",
            "receiptsRoot": "0x0",
            "sha3Uncles": "0x0",
            "size": "0x0",
            "stateRoot": "0x0",
            "timestamp": blockNum,
            "totalDifficulty": blockNum,
            "transactions": [],
            "transactionsRoot": "0x00",
            "uncles": []
        }
    }

    // FIXME
    getTransactionCount(): number {
        return 0x1;
    }

    // FIXME
    sendRawTransaction(transaction: string): string {
        throw new Error('Method not implemented.');
    }
}
