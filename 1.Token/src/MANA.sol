// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./libs/ERC20.sol";

contract MANA is ERC20 {
    constructor(uint256 initialSupply) ERC20("MANA", "Decentraland") {
        _mint(msg.sender, initialSupply);
    }
}
