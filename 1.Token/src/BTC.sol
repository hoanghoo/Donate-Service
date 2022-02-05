// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./libs/ERC20.sol";

contract BTC is ERC20 {
    constructor(uint256 initialSupply) ERC20("BTC", "Wrapped BTC") {
        _mint(msg.sender, initialSupply);
    }
}
