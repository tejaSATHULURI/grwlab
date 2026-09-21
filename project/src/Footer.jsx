import {footer} from './assets/constants/constants.json';

export default function Footer() {
  return (
    <footer>
        {footer.label}
        <p>{footer.copyright}</p>
    </footer>
  );
}