# HTML-JS-ETHERS-Web3Connect
This is a simple readme file for connecting your smartcontract to frontend using the following:
* html
* JS
* Ethers library
* Your smart contract address and abi(basically the blueprint of your smartcontract)

# Requirements

* Get any code editor of your choice preferably [vscode](https://code.visualstudio.com/)
* Install [git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) or check if you have git installed using, *git --version* in your terminal
* Not familiar with HTML? Get started with [HTML](https://www.w3schools.com/html/default.asp)
* Not familiar with JavaScript? Get started with [JavaScript](https://www.w3schools.com/js/default.asp)
* We going to need an EVM compatible wallet as a browser extension such as [Metamask-extension](https://metamask.io/)
* If you can run *node --version* in your terminal with no error, then your have installed nodejs else visit 
  nodejs [documentation](https://nodejs.org/en/)
* *Note:* full package of nodejs comes with npm
* npm can be used to install ethers library, <mark> *npm --install save ethers* </mark>
* you can use *[yarn](https://classic.yarnpkg.com/lang/en/docs/install/#windows-stable)* instead of *npm* to install ethers, *yarn add ethers*
  

# Quickstart
* clone this repo to your local environment using, *git clone https://github.com/stevegee1/HTML-JS_ETHERS_WEB3_Connector.git*
* Spin up a local blockchain in your code editor(vscode) terminal, we will be using [ganache-cli](https://www.npmjs.com/package/ganache-cli)
* By default, your ganache will be listening on *127.0.0.1:8545*. This can be copied and added as your local blcokchain url in your metamask. Then you can import account from the list of accounts provided by Ganache using their corresponding private keys. 100eth is provided by default to any account 
* in the index.js file, change the contract address to your smart contractAddress. As well as the ABI
* Launch a development live server by downloading *Live Server extension* in your code editor or spin up a local server of your choice
* *Live Server* extension with automatically load your frontend, *index.html* in your default browser
* By tapping on the connect button, metamask automatically spin up prompting you to connect your account
* By tapping on the execute button, metamask initiate a transaction request.

# please use metamask account that isn't associated with real money

  