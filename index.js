//using ethers library

const { ethers } = require("ethers");


//connect to ethereum account(s)
async function connect() {
    if (typeof window.ethereum !== "undefined") {
        ethereum.request({ method: 'eth_requestAccounts' });
    }
}

//execute any contract function
async function execute() {
    //We need the following inorder to execute any contract function:
    //contractAddress
    //ABI
    //A signer; any account that calls the function
    //call the function
    const contractAddress = "0x5fbdb2315678afecb367f032d93f642f64180aa3";
    const abi = [
        {
            inputs: [
                {
                    internalType: "string",
                    name: "_name",
                    type: "string",
                },
                {
                    internalType: "uint256",
                    name: "_favoriteNumber",
                    type: "uint256",
                },
            ],
            name: "addPerson",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "string",
                    name: "",
                    type: "string",
                },
            ],
            name: "nameToFavoriteNumber",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            name: "people",
            outputs: [
                {
                    internalType: "uint256",
                    name: "favoriteNumber",
                    type: "uint256",
                },
                {
                    internalType: "string",
                    name: "name",
                    type: "string",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [],
            name: "retrieve",
            outputs: [
                {
                    internalType: "uint256",
                    name: "",
                    type: "uint256",
                },
            ],
            stateMutability: "view",
            type: "function",
        },
        {
            inputs: [
                {
                    internalType: "uint256",
                    name: "_favoriteNumber",
                    type: "uint256",
                },
            ],
            name: "store",
            outputs: [],
            stateMutability: "nonpayable",
            type: "function",
        },
    ];
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);

    //get the account
    const signer = provider.getSigner();

    //ethers library will require the contractAddress, abi and the account that calls the funtion
    //inorder to sign it
    const contract = new ethers.Contract(contractAddress, abi, signer);
    //calling method "store" within the contract
    await contract.store(42);


}

module.exports = {
    connect,
    execute
}