import FooterItem from "./FooterItem.js";

const Footer = {
  components: {
    "footerItem-component": FooterItem,
  },
  template: `<div class="footer">
                  <ul>
                  <footerItem-component v-for="x in 3">{{x}}</footerItem-component>
                  </ul>
          </div>`,
};

export default Footer;
