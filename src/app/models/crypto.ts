export interface CryptoApiData {
  name: string;
  symbol: string;
  current_price: number;
  image: string;
  price_change_percentage_24h: number;
}

export class Crypto {
  constructor(
    public name: string,
    public symbol: string,
    public price: number,
    public imageUrl: string,
    public priceChangePercentage: number
  ) {}

  /**
   * Creates a Crypto instance from API data.
   * @param data The raw data object from the API.
   * @returns A new Crypto instance.
   */
  static fromApi(data: CryptoApiData): Crypto {
    return new Crypto(
      data.name,
      data.symbol,
      data.current_price,
      data.image,
      data.price_change_percentage_24h
    );
  }

  get formattedPrice(): string {
    return `${this.price.toFixed(2)} €`;
  }

  get isRising(): boolean {
    return this.priceChangePercentage > 0;
  }

  get displaySymbol(): string {
    return this.symbol.toUpperCase();
  }

  get image(): string {
    return this.imageUrl;
  }
}
