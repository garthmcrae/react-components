import React, { Fragment, useRef } from 'react';
import styles from './select.scss';
import useOnClickOutside from './useOnClickOutside';

interface Props {
  children: React.ReactNode;
  disabled: boolean;
  name: string;
  options: {
    label: string;
    props: Object;
    value: string;
  }[];
}

function Select({ disabled, name = 'select', options = [] }: Props) {
  const ref = useRef(null);
  const [active, setActive] = React.useState(false);
  const [focus, setFocus] = React.useState(false);
  const [, setValue] = React.useState('');
  const handleBlur = () => {
    setFocus(false);
  };
  const handleClick = () => {
    setActive(!active);
  };
  const handleFocus = event => {
    setFocus(true);
    setValue(event.target.value);
  };
  const handleKeyPress = event => {
    if (event.key === ' ') {
      setActive(!active);
    }
  };
  useOnClickOutside(ref, () => setActive(false));
  return (
    <div id={name} className={styles.select} ref={ref}>
      <div className={`${styles.options} ${active ? styles.active : styles.inactive} ${focus && styles.focus}`}>
        {options.map((option, index) => {
          return (
            <Fragment key={`${name}-${index}`}>
              <input
                disabled={disabled}
                onBlur={handleBlur}
                onChange={handleFocus}
                onFocus={handleFocus}
                onKeyPress={handleKeyPress}
                id={`${name}-${index}`}
                name={name}
                type="radio"
                value={option.value}
                {...option.props}
              />

              <label htmlFor={`${name}-${index}`} onClick={handleClick}>
                {option.label}
              </label>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default Select;
