class CountryCode {
  private static knownCountryCodes = ["NL", "GB"];
  private countryCode: string;

  constructor(countryCode: string) {
    if (!CountryCode.knownCountryCodes.includes(countryCode)) {
      throw new RangeError();
    }
    this.countryCode = countryCode;
  }
}
