/** Serhat Eklemeleri 
 * https://medium.com/@adebayootomuola/sign-in-page-with-react-and-tailwind-css-461820939dc8
 * https://byby.dev/at-rule-tailwind
*/
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],

  /**P.K. added */
  corePlugins: {
    preflight: false /** allows compatibility with other CSS in project - won't generate default baseline styles */
  },
  prefix: "tw-", /** avoid issues with existing css class names */
  important: true /**override any css that exists in the parent site / app */
   /**P.K. added */
}

