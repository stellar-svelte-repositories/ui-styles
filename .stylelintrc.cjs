/** @type { import('stylelint').Config } */
module.exports = {
  extends: "stylelint-config-standard-scss",
  fix: false,
  rules: {
    "selector-pseudo-class-no-unknown": [
      true, 
      {
        "ignorePseudoClasses": ["global"]
      }
    ],
    "scss/percent-placeholder-pattern": "^[A-Za-z]+(-{1}#\{\$[A-Za-z]+\}|(-{1}[A-Za-z]+))*(:[A-Za-z]+)*"
  }
};
