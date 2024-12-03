import { ethers } from 'ethers';

const contractAddress = '0xF887B4D3b17C12C86cc917cF72fb8881f866a847';
const contractABI = [
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_potId",
				"type": "bytes32"
			}
		],
		"name": "breakPot",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_senderAddress",
				"type": "address"
			}
		],
		"name": "claimTransferByAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_transferId",
				"type": "bytes32"
			}
		],
		"name": "claimTransferById",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_senderUsername",
				"type": "string"
			}
		],
		"name": "claimTransferByUsername",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_paymentId",
				"type": "bytes32"
			}
		],
		"name": "contributeToGroupPayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_potId",
				"type": "bytes32"
			}
		],
		"name": "contributeToSavingsPot",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_numParticipants",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "createGroupPayment",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_targetAmount",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "createSavingsPot",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "paymentId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GroupPaymentCompleted",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "paymentId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "GroupPaymentContributed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "paymentId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "numParticipants",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"name": "GroupPaymentCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "potId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PotBroken",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "potId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "contributor",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "PotContribution",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_transferId",
				"type": "bytes32"
			}
		],
		"name": "refundTransfer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "registerUsername",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "potId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "targetAmount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"name": "SavingsPotCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_recipient",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "sendToAddress",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_remarks",
				"type": "string"
			}
		],
		"name": "sendToUsername",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "transferId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferClaimed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "transferId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"name": "TransferInitiated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "bytes32",
				"name": "transferId",
				"type": "bytes32"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "TransferRefunded",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "userAddress",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"name": "UserRegistered",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_paymentId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "getGroupPaymentContribution",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_paymentId",
				"type": "bytes32"
			}
		],
		"name": "getGroupPaymentDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountPerPerson",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numParticipants",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "enum ProtectedPay.GroupPaymentStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_sender",
				"type": "address"
			}
		],
		"name": "getPendingTransfers",
		"outputs": [
			{
				"internalType": "bytes32[]",
				"name": "",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_potId",
				"type": "bytes32"
			}
		],
		"name": "getSavingsPotDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "targetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "enum ProtectedPay.PotStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_transferId",
				"type": "bytes32"
			}
		],
		"name": "getTransferDetails",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "enum ProtectedPay.TransferStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserByAddress",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "_username",
				"type": "string"
			}
		],
		"name": "getUserByUsername",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserProfile",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			},
			{
				"internalType": "bytes32[]",
				"name": "transferIds",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "groupPaymentIds",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "participatedGroupPayments",
				"type": "bytes32[]"
			},
			{
				"internalType": "bytes32[]",
				"name": "savingsPotIds",
				"type": "bytes32[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_userAddress",
				"type": "address"
			}
		],
		"name": "getUserTransfers",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "sender",
						"type": "address"
					},
					{
						"internalType": "address",
						"name": "recipient",
						"type": "address"
					},
					{
						"internalType": "uint256",
						"name": "amount",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "timestamp",
						"type": "uint256"
					},
					{
						"internalType": "enum ProtectedPay.TransferStatus",
						"name": "status",
						"type": "uint8"
					},
					{
						"internalType": "string",
						"name": "remarks",
						"type": "string"
					}
				],
				"internalType": "struct ProtectedPay.Transfer[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "groupPayments",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "paymentId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "totalAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountPerPerson",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "numParticipants",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			},
			{
				"internalType": "enum ProtectedPay.GroupPaymentStatus",
				"name": "status",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "_paymentId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "_user",
				"type": "address"
			}
		],
		"name": "hasContributedToGroupPayment",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "pendingTransfersBySender",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "savingsPots",
		"outputs": [
			{
				"internalType": "bytes32",
				"name": "potId",
				"type": "bytes32"
			},
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "targetAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "currentAmount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "enum ProtectedPay.PotStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "bytes32",
				"name": "",
				"type": "bytes32"
			}
		],
		"name": "transfers",
		"outputs": [
			{
				"internalType": "address",
				"name": "sender",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "recipient",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "timestamp",
				"type": "uint256"
			},
			{
				"internalType": "enum ProtectedPay.TransferStatus",
				"name": "status",
				"type": "uint8"
			},
			{
				"internalType": "string",
				"name": "remarks",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"name": "usernameToAddress",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "users",
		"outputs": [
			{
				"internalType": "string",
				"name": "username",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

// Types for all events and returns
interface TransferEvent {
  type: 'TransferInitiated' | 'TransferClaimed' | 'TransferRefunded';
  transferId: string;
  sender?: string;
  recipient?: string;
  amount: string;
  remarks?: string;
  event: ethers.Event;
}

interface GroupPaymentEvent {
  type: 'GroupPaymentCreated' | 'GroupPaymentContributed' | 'GroupPaymentCompleted';
  paymentId: string;
  creator?: string;
  recipient?: string;
  amount: string;
  numParticipants?: number;
  remarks?: string;
  event: ethers.Event;
}

interface SavingsPotEvent {
  type: 'SavingsPotCreated' | 'PotContribution' | 'PotBroken';
  potId: string;
  owner?: string;
  amount?: string;
  name?: string;
  targetAmount?: string;
  remarks?: string;
  event: ethers.Event;
}

interface UserProfile {
  username: string;
  transferIds: string[];
  groupPaymentIds: string[];
  participatedGroupPayments: string[];
  savingsPotIds: string[];
}

// Contract instance getter
export const getContract = (signer: ethers.Signer) => {
  return new ethers.Contract(contractAddress, contractABI, signer);
};

// User Registration and Management
export const registerUsername = async (signer: ethers.Signer, username: string) => {
  const contract = getContract(signer);
  const tx = await contract.registerUsername(username);
  await tx.wait();
};

export const getUserByUsername = async (signer: ethers.Signer, username: string) => {
  const contract = getContract(signer);
  return await contract.getUserByUsername(username);
};

export const getUserByAddress = async (signer: ethers.Signer, address: string) => {
  const contract = getContract(signer);
  return await contract.getUserByAddress(address);
};

export const getUserProfile = async (signer: ethers.Signer, userAddress: string): Promise<UserProfile> => {
  const contract = getContract(signer);
  return await contract.getUserProfile(userAddress);
};

// Basic Transfer Functions
export const sendToAddress = async (signer: ethers.Signer, recipient: string, amount: string, remarks: string) => {
  const contract = getContract(signer);
  const tx = await contract.sendToAddress(recipient, remarks, { value: ethers.utils.parseEther(amount) });
  await tx.wait();
};

export const sendToUsername = async (signer: ethers.Signer, username: string, amount: string, remarks: string) => {
  const contract = getContract(signer);
  const tx = await contract.sendToUsername(username, remarks, { value: ethers.utils.parseEther(amount) });
  await tx.wait();
};

export const claimTransferByAddress = async (signer: ethers.Signer, senderAddress: string) => {
  const contract = getContract(signer);
  const tx = await contract.claimTransferByAddress(senderAddress);
  await tx.wait();
};

export const claimTransferByUsername = async (signer: ethers.Signer, senderUsername: string) => {
  const contract = getContract(signer);
  const tx = await contract.claimTransferByUsername(senderUsername);
  await tx.wait();
};

export const claimTransferById = async (signer: ethers.Signer, transferId: string) => {
  const contract = getContract(signer);
  const tx = await contract.claimTransferById(transferId);
  await tx.wait();
};

export const refundTransfer = async (signer: ethers.Signer, transferId: string) => {
  const contract = getContract(signer);
  const tx = await contract.refundTransfer(transferId);
  await tx.wait();
};

// Group Payment Functions
export const createGroupPayment = async (
  signer: ethers.Signer,
  recipient: string,
  numParticipants: number,
  amount: string,
  remarks: string
) => {
  const contract = getContract(signer);
  const tx = await contract.createGroupPayment(
    recipient,
    numParticipants,
    remarks,
    { value: ethers.utils.parseEther(amount) }
  );
  await tx.wait();
};

export const contributeToGroupPayment = async (
  signer: ethers.Signer,
  paymentId: string,
  amount: string
) => {
  const contract = getContract(signer);
  const tx = await contract.contributeToGroupPayment(paymentId, {
    value: ethers.utils.parseEther(amount)
  });
  await tx.wait();
};

export const getGroupPaymentDetails = async (signer: ethers.Signer, paymentId: string) => {
  const contract = getContract(signer);
  const details = await contract.getGroupPaymentDetails(paymentId);
  return {
    creator: details.creator,
    recipient: details.recipient,
    totalAmount: ethers.utils.formatEther(details.totalAmount),
    amountPerPerson: ethers.utils.formatEther(details.amountPerPerson),
    numParticipants: details.numParticipants.toNumber(),
    amountCollected: ethers.utils.formatEther(details.amountCollected),
    timestamp: new Date(details.timestamp.toNumber() * 1000),
    status: details.status,
    remarks: details.remarks
  };
};

export const hasContributedToGroupPayment = async (
  signer: ethers.Signer,
  paymentId: string,
  userAddress: string
) => {
  const contract = getContract(signer);
  return await contract.hasContributedToGroupPayment(paymentId, userAddress);
};

export const getGroupPaymentContribution = async (
  signer: ethers.Signer,
  paymentId: string,
  userAddress: string
) => {
  const contract = getContract(signer);
  const contribution = await contract.getGroupPaymentContribution(paymentId, userAddress);
  return ethers.utils.formatEther(contribution);
};

// Savings Pot Functions
export const createSavingsPot = async (
  signer: ethers.Signer,
  name: string,
  targetAmount: string,
  remarks: string
) => {
  const contract = getContract(signer);
  const tx = await contract.createSavingsPot(
    name,
    ethers.utils.parseEther(targetAmount),
    remarks
  );
  await tx.wait();
};

export const contributeToSavingsPot = async (
  signer: ethers.Signer,
  potId: string,
  amount: string
) => {
  const contract = getContract(signer);
  const tx = await contract.contributeToSavingsPot(potId, {
    value: ethers.utils.parseEther(amount)
  });
  await tx.wait();
};

export const breakPot = async (signer: ethers.Signer, potId: string) => {
  const contract = getContract(signer);
  const tx = await contract.breakPot(potId);
  await tx.wait();
};

export const getSavingsPotDetails = async (signer: ethers.Signer, potId: string) => {
  const contract = getContract(signer);
  const details = await contract.getSavingsPotDetails(potId);
  return {
    owner: details.owner,
    name: details.name,
    targetAmount: ethers.utils.formatEther(details.targetAmount),
    currentAmount: ethers.utils.formatEther(details.currentAmount),
    timestamp: new Date(details.timestamp.toNumber() * 1000),
    status: details.status,
    remarks: details.remarks
  };
};

// Transaction History Functions
interface RawContractTransfer {
	sender: string;
	recipient: string;
	amount: ethers.BigNumber;
	timestamp: ethers.BigNumber;
	status: number;
	remarks: string;
  }
  
  export const getUserTransfers = async (
	signer: ethers.Signer,
	userAddress: string
  ): Promise<Transfer[]> => {
	const contract = getContract(signer);
	const transfers: RawContractTransfer[] = await contract.getUserTransfers(userAddress);
  
	return transfers.map((transfer: RawContractTransfer) => ({
	  sender: transfer.sender,
	  recipient: transfer.recipient,
	  amount: ethers.utils.formatEther(transfer.amount),
	  timestamp: transfer.timestamp.toNumber(),
	  status: transfer.status,
	  remarks: transfer.remarks,
	}));
  };
  

export const getTransferDetails = async (signer: ethers.Signer, transferId: string) => {
  const contract = getContract(signer);
  const transfer = await contract.getTransferDetails(transferId);
  return {
    sender: transfer.sender,
    recipient: transfer.recipient,
    amount: ethers.utils.formatEther(transfer.amount),
    timestamp: new Date(transfer.timestamp.toNumber() * 1000),
    status: transfer.status,
    remarks: transfer.remarks
  };
};

export const getPendingTransfers = async (signer: ethers.Signer, userAddress: string) => {
  const contract = getContract(signer);
  return await contract.getPendingTransfers(userAddress);
};

// Event Listeners
export const listenForAllEvents = (
  signer: ethers.Signer,
  callback: (event: TransferEvent | GroupPaymentEvent | SavingsPotEvent) => void
) => {
  const contract = getContract(signer);

  // Transfer Events
  contract.on('TransferInitiated', 
    (transferId, sender, recipient, amount, remarks, event) => {
      callback({
        type: 'TransferInitiated',
        transferId,
        sender,
        recipient,
        amount: ethers.utils.formatEther(amount),
        remarks,
        event
      });
    }
  );

  contract.on('TransferClaimed',
    (transferId, recipient, amount, event) => {
      callback({
        type: 'TransferClaimed',
        transferId,
        recipient,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  contract.on('TransferRefunded',
    (transferId, sender, amount, event) => {
      callback({
        type: 'TransferRefunded',
        transferId,
        sender,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  // Group Payment Events
  contract.on('GroupPaymentCreated', 
    (paymentId, creator, recipient, totalAmount, numParticipants, remarks, event) => {
      callback({
        type: 'GroupPaymentCreated',
        paymentId,
        creator,
        recipient,
        amount: ethers.utils.formatEther(totalAmount),
        numParticipants,
        remarks,
        event
      });
    }
  );

  contract.on('GroupPaymentContributed',
    (paymentId, contributor, amount, event) => {
      callback({
        type: 'GroupPaymentContributed',
        paymentId,
        creator: contributor,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  contract.on('GroupPaymentCompleted',
    (paymentId, recipient, amount, event) => {
      callback({
        type: 'GroupPaymentCompleted',
        paymentId,
        recipient,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  // Savings Pot Events
  contract.on('SavingsPotCreated', 
    (potId, owner, name, targetAmount, remarks, event) => {
      callback({
        type: 'SavingsPotCreated',
        potId,
        owner,
        name,
        targetAmount: ethers.utils.formatEther(targetAmount),
        remarks,
        event
      });
    }
  );

  contract.on('PotContribution',
    (potId, contributor, amount, event) => {
      callback({
        type: 'PotContribution',
        potId,
        owner: contributor,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  contract.on('PotBroken',
    (potId, owner, amount, event) => {
      callback({
        type: 'PotBroken',
        potId,
        owner,
        amount: ethers.utils.formatEther(amount),
        event
      });
    }
  );

  return () => {
    contract.removeAllListeners();
  };
};

// Helper Functions
export const formatAmount = (amount: ethers.BigNumber): string => {
  return ethers.utils.formatEther(amount);
};

export const parseAmount = (amount: string): ethers.BigNumber => {
  return ethers.utils.parseEther(amount);
};

export const formatTimestamp = (timestamp: ethers.BigNumber): Date => {
  return new Date(timestamp.toNumber() * 1000);
};

export interface Transfer {
	sender: string;
	recipient: string;
	amount: string;
	timestamp: number;  // Make sure this is number
	status: number;
	remarks: string;
  }
  
  export interface GroupPayment {
	id: string;        // Add this for consistency
	paymentId: string; // Keep this for backward compatibility
	creator: string;
	recipient: string;
	totalAmount: string;
	amountPerPerson: string;
	numParticipants: number;
	amountCollected: string;
	timestamp: number;  // Make sure this is number
	status: number;
	remarks: string;
  }
  
  export interface SavingsPot {
	id: string;        // Add this for consistency
	potId: string;     // Keep this for backward compatibility
	owner: string;
	name: string;
	targetAmount: string;
	currentAmount: string;
	timestamp: number;  // Make sure this is number
	status: number;
	remarks: string;
  }