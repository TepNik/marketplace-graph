export function numberToTokenType(tokenType: number): string {
    if (tokenType == 0) {
        return 'ERC20';
    } else if (tokenType == 1) {
        return 'ERC721';
    } else {
        return 'ERC1155';
    }
}
