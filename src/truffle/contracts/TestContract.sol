pragma solidity ^0.4.18;

contract TestContract {

    mapping (bytes32 => string) data;

    address owner;

    function BusinessCard() public {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner);
        _;
    }

    function setData(string key, string value) public onlyOwner {
        data[keccak256(key)] = value;
    }

    function transferOwnership(address newOwner) public onlyOwner {
	    owner = newOwner;
    }

    function getData(string key) public constant returns(string) {
        return data[keccak256(key)];
    }

}
