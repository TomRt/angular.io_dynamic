declare namespace jasmine {
  interface Matchers {
    toHaveText(expected: any): boolean;
    toContainText(expected: any): boolean;
    toHaveCssClass(expected: any): boolean;
    toBeAnInstanceOf(expected: any): boolean;
  }
}
