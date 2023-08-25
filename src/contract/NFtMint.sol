// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;
import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract NftMint is ERC721URIStorage,Ownable{
    uint256 tokenId=0;
    constructor()ERC721("ZeezNft","ZZNFT"){

    }
    function mint(address _to,string memory _tokenUri) public onlyOwner {
_mint(_to,tokenId);
_setTokenURI(tokenId,_tokenUri);
        tokenId+=1;

    }
}