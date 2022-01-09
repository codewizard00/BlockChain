require('@nomiclabs/hardhat-waffle')

module.exports ={
  solidity:"0.8.0",
  networks:{
    ropsten:{
      url:"https://eth-ropsten.alchemyapi.io/v2/P6GxmcdD1ZSNsQPNBcCNWMI8-OxrSnd2",
      accounts:['d273dbbf60cea5f0d1fb89194a41fae3d91de2eb8077bf5af6190de05df03ab7']
    }
  }
}
