
1 - SMARTCONTRACT
2 - BLOCKCHAIN
3 - JAVASCRIPT

-- carteira metamask
0x6335679655778ad2eAE1C1d447aFBC53125068d5

Adicionando a rede blockchain de teste da BNB (Binance)

https://testnet.bscscan.com/

Final da pagina clique botão add BSC Network

Adicionar fundos
https://testnet.bnbchain.org/faucet-smart

FAZER DEPLOY NA BLOCKCHAIN DA METAMASK

Enviroment: Selecione Injected Provider - MetaMask
Confira o contrato selecionado CrypTwitter
Botao Deploy

Endereço do contrato:
0x6285e33d4505aF6465E0AA3c89aeDB5E6984A96b

Listar transações do smart-contract
https://testnet.bscscan.com/address/

0x6285e33d4505aF6465E0AA3c89aeDB5E6984A96b


Na Aba Contract Verificar e Publicar Smart-Contract

1 - Please enter the Contract Address you would like to verify
0x6285e33d4505aF6465E0AA3c89aeDB5E6984A96b

2 - Please select Compiler Type
v0.8.18

Selecione Un-Check to show all nightly Commits also

3 - Please select Open Source License Type 
MIT License (MIT)

COPIAR E COLAR O CODIGO FONTE DO SMART-CONTRACT

// SPDX-License-Identifier: MIT

pragma solidity 0.8.18;

struct Tweet {
    address author;
    string text;
    uint timestamp;
    string username;
}

contract CrypTwitter {

    uint public nextId = 0;

    uint public constant PAGE_SIZE = 10;

    mapping(uint => Tweet) public tweets;

    mapping(address => string) public users;

    // calldata somente leitura
    function addTweet(string calldata text) public {

        // memory pode ser escrito
        Tweet memory newTweet;
        newTweet.text = text;
        newTweet.author = msg.sender;
        newTweet.timestamp = block.timestamp;

        nextId++;

        tweets[nextId] = newTweet;
    }

    function changeUsername(string calldata newName) public {
        users[msg.sender] = newName;
    }

    function getLastTweets(uint page) public view returns (Tweet[] memory) 
    {
        if (page < 1) 
        {
            page = 1;
        }

        uint startIndex = PAGE_SIZE * (page -1) + 1;

        Tweet[] memory lastTweets = new Tweet[](PAGE_SIZE);
        for (uint i = 0; i < PAGE_SIZE; i++) 
        {
            lastTweets[i] = tweets[startIndex + i];
            lastTweets[i].username = users[lastTweets[i].author];
        }

        return lastTweets;
    }

}

Compiler debug log:
 Note: Contract was created during TxHash# 0xc399404fd1b28aa9f8b3cbf853dd5f69b2e9d7b72a7ffbb8266e79f51c069b33
Successfully generated ByteCode and ABI for Contract Address [0x6285e33d4505aF6465E0AA3c89aeDB5E6984A96b]

Compiler Version: v0.8.18+commit.87f61d96
Optimization Enabled: 0
Runs: 200
ContractName:
CrypTwitter


ContractABI:
[{"inputs":[],"name":"PAGE_SIZE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"text","type":"string"}],"name":"addTweet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"newName","type":"string"}],"name":"changeUsername","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"page","type":"uint256"}],"name":"getLastTweets","outputs":[{"components":[{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"username","type":"string"}],"internalType":"struct 
Tweet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nextId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tweets","outputs":[{"internalType":"address","name":"author","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"username","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"users","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"}]


LENDO INFORMAÇÕES DO SMART-CONTRACT
https://testnet.bscscan.com/address/

0x6285e33d4505aF6465E0AA3c89aeDB5E6984A96b#readContract


Referencias:
https://testnet.bscscan.com/
https://testnet.bnbchain.org/faucet-smart
https://remix.ethereum.org/#lang=en&optimize=false&runs=200&evmVersion=null&version=soljson-v0.8.18+commit.87f61d96.js
https://metamask.io/
https://tron.network/
https://polygon.technology/
https://academy.binance.com/pt/courses/all
https://www.avax.network/
https://github.com/ethereum/solidity
https://soliditylang.org/
https://web3.career/
https://web3js.org/
https://www.npmjs.com/package/web3
https://github.com/web3/web3.js
https://www.luiztools.com.br/post/integracao-com-smart-contracts-com-node-js-e-web3-js/
https://www.web3dev.com.br/beperello/web3js-vs-ethersjs-guia-completo-4p5a
https://www.dappuniversity.com/articles/web3-js-intro
