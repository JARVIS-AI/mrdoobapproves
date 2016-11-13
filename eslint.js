module.exports = {
  "env": {
    "browser": true,
  },
  "rules": {
    "semi-spacing": ["error", {"before": false, "after": true}],

    "space-before-function-paren": ["error", {
        "anonymous": "always",
        "named": "never",
        "asyncArrow": "ignore"
    }],

    "func-call-spacing": ["error", "never"],

    // Rules that should be turned on but are off until the code is updated
    // (change the 0 to a 2 and move them down to the next section)

    // "brace-style": [ 0, "1tbs", { "allowSingleLine": true } ],  // Require k&r style braces
    // "camelcase": 0,                          // Disallow names_with_underscore
    // "comma-spacing": 0,                      // Require space after comma
    // "eqeqeq": 0,                             // Require === and !==
    // "key-spacing": 0,                        // Require a space after key as in "key: value"
    // "new-cap": 0,                            // Disallow captialized function to be used without new.
    // "new-parens": 0,                         // Require new to always have parens. "a = new b();" = ok, "a = new b;" = bad
    // "no-comma-dangle": 0,                    // Disallow dangling commas as in [ 1, 2, 3, ]
    // "no-extra-semi": 0,                      // Disallow extra semicolons. Example function foo() { };
    // "no-mixed-spaces-and-tabs": 0,           // Disallow both spaces and tabs in the same line for indenting
    // "no-spaced-func": 0,                     // Require no space at function call. "fn()" = ok, "fn ()" = bad
    // "no-space-before-semi": 0,               // Require no space before semicolon
    // "no-trailing-spaces": 0,                 // Disallow trailing spaces
    // "no-unused-vars": 0,                     // Disallow unused variables.
    // "semi": 0,                               // Disallow missing semicolons
    // "space-after-keywords": [ 0, "always" ], // Require space after keywords
    // "space-in-brackets": [ 0, "always" ],    // Require space in parens
    // "space-in-parens": [ 'error', "always" ],      // Require space in parens
    // "space-infix-ops": 0,                    // Require space around operators "a + b" = ok, "a+b" = bad
    // "strict": 0,                             // Require "use strict"
    // "three-no-new-array": 0,                 // Disallow "new Array"
    // "three-space-unary-ops": [ 0, { "words": true, "nonwords": true } ],  // Require space before unary operators except "."

    // // Rules we intensionally want on

    // "comma-style": [ 2, "last" ],  // Require commas on the same line
    // // "no-bang-boolean-cast": 2,     // Disallow !value. Effectively require checking value === null, undefined, false, 0, etc..
    // "no-new-object": 2,            // Disallow "new Object()";

    // // Rules we intensionally want off

    // "yoda": 0,                   // Don't care if it's "if (1 == v)" or "if (v == 123)".
    // "no-empty": 0,               // Don't care if we have empty blocks
    // "eol-last": 0,               // Don't care if the file doesn't end with an EOL.
    // "no-shadow": 0,              // Don't care if the same variable name is used in an inner scope.
    // "no-multi-spaces": 0,        // Don't care if there's more than one space anywhere.
    // "no-unused-expressions": 0,  // Don't care if there are unused experssions. eg "flag && doThing();"
    // "consistent-return": 0,      // Don't care if some returns return no value
    // "dot-notation": 0,           // Don't care if it's obj["prop"] instead of obj.prop
    // "no-console": 0,             // allow the use of console
    // "curly": 0,                  // Don't require all if statements to have curly braces
    // "no-redeclare": 0,           // Don't care if var declared more than once in same scope. eg for (var x, ...) for (var x, ...);
    // "quotes": 0,                 // Don't care if quotes are double or single
    // "space-unary-ops": 0,        // Turn off default unary ops spacing
    // "no-use-before-define": 0,   // don't care if something is used before it's defined.
    // "no-underscore-dangle": 0,   // don't care if var starts with underscore
  },
  "globals": {
    "THREE": false,        // Don't allow overriding THREE
    "console": true,       // Define console and allow it to be overridden
  }
}