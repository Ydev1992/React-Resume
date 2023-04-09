import {FC, memo} from 'react';

import Icon, {IconProps} from './Icon';

const EmailIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    
  <path fill="currentColor" d="M64,77.82L13.12,34.79h101.76L64,77.82z M14.9,31.85l44.1,33.05L14.9,97.95V31.85z M113.1,97.95l-44.1-33.05L113.1,31.85V97.95z"/>
  </Icon>
));

export default EmailIcon;
