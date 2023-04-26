pragma solidity ^0.8.0;

import "https://github.com/aave/flashloan-box/blob/Remix/contracts/aave/ILendingPool.sol";

contract FlashLoan {
    ILendingPool lendingPool = ILendingPool(0x....

    function flashLoan(uint256 amount) public {
        address receiverAddress = address(this);

        address[] memory assets = new address[](1);
        assets[0] = 0xB597cd8D3217ea6477232F9217fa70837ff667Af; // asset address

        uint256[] memory amounts = new uint256[](1);
        amounts[0] = amount;

        uint256[] memory modes = new uint256[](1);
        modes[0] = 0; // no debt

        address onBehalfOf = address(this);
        bytes memory params = abi.encode(amount);

        lendingPool.flashLoan(receiverAddress, assets, amounts, modes, onBehalfOf, params, 0);
    }

    function executeOperation(
        address _reserve,
        uint256 _amount,
        uint256 _fee,
        bytes calldata _params
    ) external {
        // Do some logic with the borrowed funds and pay back the flashloan
        // ...
        
        // Approve the LendingPool contract allowance to *pull* the owed amount
        // This happens after you have implemented your logic
        // For example, to withdraw DAI:
        // IERC20(_reserve).approve(address(lendingPool), _amount.add(_fee));
        // lendingPool.repay(_reserve, _amount.add(_fee), msg.sender);
    }
}
