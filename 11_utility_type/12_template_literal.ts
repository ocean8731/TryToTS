/**
 * Template Literal
 * string type을 조작할 때 사용
 */
type CodeFactory = 'Code Factory';

// Uppercase
type CodeFactoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFactoryLower = Lowercase<CodeFactoryUpper>;

// Capitalize
type CodeFactoryCapital = Capitalize<CodeFactoryLower>;

// Uncapitalize
type CodeFactoryUnCapital = Uncapitalize<CodeFactoryCapital>;