const Header = {
  data() {
    return {
      menus: ["Home", "About", "Contact"],
    };
  },
  template: `<ul>
                   <li v-for="menu in menus">{{menu}}</li>
               </ul>`,
};

export default Header;
